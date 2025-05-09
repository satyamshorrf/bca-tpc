import React from "react";
import { motion } from "framer-motion";

const AnnouncementPage = () => {
  return (
    <div className="w-full max-w-xl mx-auto shadow-lg rounded-md bg-white border-4 border-blue-900 space-y-4">
      <div className="bg-blue-900 text-white text-center py-2 px-4 text-lg font-semibold rounded-t-md">
        Important Announcements
      </div>

      <div className="overflow-hidden h-40 relative bg-gray-100 flex items-center justify-center p-60">
        <motion.div
          className="absolute text-red-600 text-center font-medium space-y-4"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <p>Announcement 1</p>
          <p>Announcement 2</p>
          <p>Announcement 3</p>
          <p>Announcement 4</p>
          <p>Announcement 5</p>
          <p>Announcement 6</p>
          <p>Announcement 7</p>
          <p>Announcement 8</p>
          <p>Announcement 9</p>
          <p>Announcement 10</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
