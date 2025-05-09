import React from 'react';
import { Paperclip } from 'lucide-react';

const syllabusData = [

  { title: 'PROSPECTUS OF T. P. COLLEGE, MADHEPURA', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA', date: '30/08/2019' },
  { title: 'SYLLABUS OF BCA 1ST YEAR', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA 2ND YEAR', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA 3RD YEAR', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA 4TH YEAR', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA 5TH YEAR', date: '01/01/2025' },
  { title: 'SYLLABUS OF BCA 6TH YEAR', date: '01/01/2025' },
];

const SyllabusPage = () => {
  return (
    <div className="bg-[#e9f9fa] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white border shadow-md rounded">
        <div className="border-b px-6 py-4 bg-orange-100 font-bold text-orange-600 text-lg">
          Syllabus and Study Material
        </div>
        <ul className="divide-y">
          {syllabusData.map((item, idx) => (
            <li key={idx} className="flex justify-between items-start px-6 py-4 hover:bg-gray-50">
              <div>
                <p className="font-semibold text-gray-800">{idx + 1}. {item.title}</p>
                <p className="text-sm text-orange-600">Posted Date: {item.date}</p>
              </div>
              <a
                href="#"
                className="flex items-center text-green-700 font-medium text-sm hover:underline"
              >
                <Paperclip className="w-4 h-4 mr-1" />
                Download Attachment
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SyllabusPage;
