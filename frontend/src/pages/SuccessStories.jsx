const alumni = [
  {
    name: "Lorem",
    role: "Sr. Director & Head,\nSamsung Electronics India Pvt. Ltd.",
    image: "/user.jpg",
  },
  {
    name: "Lorem",
    role: "Chief Marketing Officer\nAirtel Payments Bank",
    image: "/user.jpg",
  },
  {
    name: "Lorem",
    role: "Director\nDigital Marketing\nOracle India",
    image: "/user.jpg",
  },
  {
    name: "Lorem",
    role: "CEO\nModicare Ltd.",
    image: "/user.jpg",
  },
  {
    name: "Lorem",
    role: "President\nDigital Marketing\nOracle India",
    image: "/user.jpg",
  },
];

const SuccessStories = () => {
  return (
    <div className="text-center py-12 px-4 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
        Success Stories
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-20">
        After studying BCA from T.P. College, Madhepura, Successfully Working at
        Leading Organisations
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {alumni.map((person, index) => (
          <div
            key={index}
            className="w-64 bg-blue-700 text-white p-6 rounded-md"
          >
            <div className="flex justify-center -mt-16">
              <div className="relative w-24 h-24">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-yellow-400"></div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-yellow-400 mt-4">
              {person.name}
            </h3>
            <p className="mt-2 text-sm whitespace-pre-line">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
