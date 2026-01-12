// src/App.jsx

import { useState, useMemo } from 'react';
import './styles/lab-styles.css'; // تأكد من أن هذا المسار صحيح
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';
import StudentList from './components/StudentList';

const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('high');

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      newStudent
    ]);
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === 'high' ? 'low' : 'high'));
  };

  const visibleStudents = useMemo(() => {
    let filteredStudents = students;

    if (filter === 'pass') {
      filteredStudents = filteredStudents.filter(s => s.grade >= 60);
    } else if (filter === 'fail') {
      filteredStudents = filteredStudents.filter(s => s.grade < 60);
    }

    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      filteredStudents = filteredStudents.filter(s =>
        s.name.toLowerCase().includes(lowerCaseSearch)
      );
    }

    const sortedStudents = filteredStudents.slice().sort((a, b) => {
      if (sortOrder === 'high') {
        return b.grade - a.grade;
      } else {
        return a.grade - b.grade;
      }
    });

    return sortedStudents;
  }, [students, filter, search, sortOrder]);

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      <StudentForm onAdd={addStudent} students={students} />
      
      <StudentControls
        filter={filter}
        search={search}
        sortOrder={sortOrder}
        onFilterChange={setFilter}
        onSearchChange={setSearch}
        onSortToggle={handleSortToggle}
      />
      
      <StudentList 
        students={visibleStudents} 
        onDelete={deleteStudent} 
        search={search} 
      />
    </div>
  );
}

export default App;