import React from 'react';

const stats = [
  { value: '0+', label: 'Campus placements in 2023-24' },
  { value: '0+', label: 'Companies visited for placements in 2023-24' },
  { value: '00.0 LPA', label: 'Highest salary offered through campus placements' },
];

const companies = [
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Nvidia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg',
  },
];

const CampusPlacements = () => {
  return (
    <div className="bg-[#002b5c] text-white px-4 py-12">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Campus Placements</h2>
        <p className="text-md text-gray-200">
          For many years, BCA graduates from T.P. College, Madhepura (BNMU University) have been the preferred choice of recruiters. Through our dedicated placement support, we ensure that every student is equipped to launch a successful career.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center mb-12">
        {stats.map((item, i) => (
          <div key={i} className="bg-blue-400 text-[#002b5c] p-6 rounded-md font-bold text-xl shadow-md">
            <div>{item.value}</div>
            <div className="mt-1 text-sm font-medium">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-[#002b5c] mb-6">
          Our BCA students have received job offers from top global and national companies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusPlacements;
