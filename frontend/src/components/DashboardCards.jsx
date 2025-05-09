import { Link } from 'react-router-dom';

const DashboardCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <Link to="/apply-admission" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-green-500">📝</div>
          <div className="mt-6 text-lg font-semibold">New Admission Apply</div>
        </Link>

        <Link to="/merit-list" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-orange-500">📄</div>
          <div className="mt-6 text-lg font-semibold">View Merit List</div>
        </Link>

        <Link to="/candidate-login" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-teal-500">🔐</div>
          <div className="mt-6 text-lg font-semibold">Candidate Login</div>
        </Link>

        <Link to="/college-login" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-green-500">🏫</div>
          <div className="mt-6 text-lg font-semibold">University / College Pre-Admission Login</div>
        </Link>

        <Link to="/forgot-password" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-red-400">❓</div>
          <div className="mt-6 text-lg font-semibold">Forgot your Application No. / Password</div>
        </Link>

        <Link to="/college-list" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-red-400">🏛️</div>
          <div className="mt-6 text-lg font-semibold">List of Colleges</div>
        </Link>

        <Link to="/application-dates" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-blue-400">🎓</div>
          <div className="mt-6 text-lg font-semibold">View Total Application with Start & Close Date</div>
        </Link>

        <Link to="/syllabus-prospectus" className="relative bg-blue-900 text-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center">
          <div className="absolute -top-6 rounded-full p-3 text-2xl text-white bg-red-400">🔒</div>
          <div className="mt-6 text-lg font-semibold">Syllabus and Prospectus</div>
        </Link>

      </div>
    </div>
  );
};

export default DashboardCards;
