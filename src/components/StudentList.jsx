// src/components/StudentList.jsx

import StudentItem from './StudentItem';

function StudentList({ students, onDelete, search }) { 
  
  // Arama sonucu eşleşme yoksa mesajı göster
  if (students.length === 0 && search) {
    return (
      // className="no-data" zorunlu
      <p className="no-data">
        <em>"{search}"</em> ile eşleşen öğrenci yok
      </p>
    );
  }
  
  // Liste tamamen boşsa (arama yok) mesajı göster
  if (students.length === 0 && !search) {
    return (
      // className="no-data" zorunlu
      <p className="no-data">
        Henüz öğrenci yok, yukarıdaki formu kullanın.
      </p>
    );
  }

  // Listeyi render et
  // className="student-list" zorunlu
  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}
export default StudentList;