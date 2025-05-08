import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";
import { LogOut } from "lucide-react";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;

export const useUserStore = create((set, get) => ({
	user: null,
	loading: false,
	isLoading: false,
	error: null,
	message: null,
	checkingAuth: true,

	signup: async ({ name, email, password, confirmPassword }) => {
		set({ loading: true });

		if (password !== confirmPassword) {
			set({ loading: false });
			return toast.error("Passwords do not match");
		}

		try {
			const res = await axios.post("/auth/signup", { name, email, password });
			set({ 
				user: { ...res.data.user, isEmailVerified: false }, 
				loading: false 
			});
			toast.success(res.data.message);
			return res.data;
		} catch (error) {
			set({ loading: false });
			toast.error(error.response?.data?.message || "An error occurred");
			throw error;
		}
	},
	
	login: async ( email, password) => {
		set({ loading: true });

		try {
			const res = await axios.post("/auth/login", { email, password });
			
			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	logout: async () => {
		try {
			await axios.post("/auth/logout");
			set({ user: null });
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred");
		}
	},

	checkAuth: async () => {
		set({ checkingAuth: true });
		try {
			const response = await axios.get("/auth/profile");
			set({ user: response.data, checkingAuth: false });
		} catch (error) {
			set({ checkingAuth: false, user: null });
		}
	},

	refreshToken: async () => {
		// Prevent multiple simultaneous refresh attempts
		if (get().checkingAuth) return;

		set({ checkingAuth: true });
		try {
			const response = await axios.post("/auth/refresh-token");
			set({ checkingAuth: false });
			return response.data;
		} catch (error) {
			set({ user: null, checkingAuth: false });
			throw error;
		}
	},

	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post("/auth/verify-email", { 
				code,
				email: get().user.email 
			});
			
			set({ 
				user: { ...get().user, isEmailVerified: true },
				isLoading: false,
				error: null
			});
			
			return response.data;
		} catch (error) {
			set({ 
				error: error.response?.data?.message || "Error verifying email", 
				isLoading: false 
			});
			throw error;
		}
	},

	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post("/auth/forgot-password", { 
				email 
			});
			
			set({
				message: response.data.message, 
				isLoading: false 
			});
			
			return response.data;
		} catch (error) {
			set({
				error: error.response?.data?.message || "Error sending reset password email",
				isLoading: false
			});
			throw error;
		}
	},

	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { 
				password 
			});
			
			set({ 
				message: response.data.message, 
				isLoading: false 
			});
			
			return response.data;
		} catch (error) {
			set({
				error: error.response?.data?.message || "Error resetting password",
				isLoading: false
			});
			throw error;
		}
	},

	clearError: () => set({ error: null }),
	clearMessage: () => set({ message: null }),
}));


// TODO:  Implement the axios interceptors for refreshing access token


// Axios interceptor for token refresh
let refreshPromise = null;

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				// If a refresh is already in progress, wait for it to complete
				if (refreshPromise) {
					await refreshPromise;
					return axios(originalRequest);
				}

				// Start a new refresh process
				refreshPromise = useUserStore.getState().refreshToken();
				await refreshPromise;
				refreshPromise = null;

				return axios(originalRequest);
			} catch (refreshError) {
				// If refresh fails, redirect to login or handle as needed
				useUserStore.getState().logout();
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);