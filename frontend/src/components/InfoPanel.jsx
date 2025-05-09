
const panelData = [
  {
    title: 'ACHIEVEMENTS',
    icon: '🏆',
    items: [
    
    ],
  },
  {
    title: 'NOTICES/ANNOUNCEMENTS',
    icon: '📢',
    items: [

    ],
  },
  {
    title: 'NEWS&EVENTS',
    icon: '👥',
    items: [
 
    ],
  },
  {
    title: 'STUDENT UPDATES',
    icon: '💡',
    items: [
      {
     
      },
      {
     
      },
    ],
  },
];

const InfoPanel = () => {
  return (
    <div className="bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {panelData.map((panel, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm">
            <div className="border-b-2 border-red-500 p-3 flex justify-between items-center text-sm font-semibold text-red-700">
              <div className="flex gap-2 items-center">
                <span>{panel.title}</span>
                <span>{panel.icon}</span>
              </div>
              <span className="text-xs text-gray-600 hover:underline cursor-pointer">VIEW ALL &gt;</span>
            </div>
            <div className="px-4 py-3 space-y-4">
              {panel.items.map((item, idx) => (
                <div key={idx} className="border-b border-dashed pb-3">
                  {item.tags && (
                    <div className="flex flex-wrap gap-1 mb-1">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-black text-white text-xs px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm font-medium">{item.text}</p>
                  {item.sub && <p className="text-xs text-gray-500">{item.sub}</p>}
                  {item.new && <span className="text-pink-600 text-xs font-bold float-right">NEW</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPanel;
