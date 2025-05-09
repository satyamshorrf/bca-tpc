import Card from '../components/Card';

const teacherData = [
  {
    image: 'user.jpg',
    name: 'Not Available',
    title: 'Hon\'ble',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'user.jpg',
    name: 'Prof. (Dr.) Lorem Ipsum',
    title: 'Hon\'ble Principal',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'user.jpg',
    name: 'Prof. (Dr.) Lorem Ipsum',
    title: 'Hon\'ble Coordinator',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'user.jpg',
    name: 'Not Available',
    title: 'Hon\'ble',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'AshishSir.png',
    name: 'Asst. Prof. Ashish Kumar Jha',
    title: 'Hon\'ble Teacher',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'AkhileshSir.png',
    name: 'Asst. Prof. Akhilesh Kumar',
    title: 'Hon\'ble Teacher',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'GudduSir.png',
    name: 'Asst. Prof. Guddu Kumar',
    title: 'Hon\'ble Teacher',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
  {
    image: 'BhartiSir.png',
    name: 'Asst. Prof. Bharti Kumar',
    title: 'Hon\'ble Teacher',
    department: 'Department of Computer Science',
    organization: 'Government of Bihar',
  },
];


const TeacherPage = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto'>
      {teacherData.map((teacher, index) => (
        <Card
          key={index}
          image={teacher.image}
          name={teacher.name}
          title={teacher.title}
          department={teacher.department}
          organization={teacher.organization}
        />
      ))}
    </div>
  );
};

export default TeacherPage;
