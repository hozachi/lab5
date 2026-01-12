// src/components/StudentItem.jsx

function StudentItem({ student, onDelete }) {
  
  // Başarı durumunu hesapla (60 ve üzeri geçer)
  const passed = student.grade >= 60; 
  
  // Geçti/Kaldı CSS sınıfını belirle
  // student-pass veya student-fail zorunlu
  const statusClass = passed ? 'student-pass' : 'student-fail'; 
  
  const handleDelete = () => {
    onDelete(student.id); 
  };

  return (
    // student-item ve dinamik durumu birleştir
    <li className={`student-item ${statusClass}`}> 
      <div>
        <span className="student-name">{student.name}</span>
        <span className="student-grade">({student.grade})</span>
        {/* Durum metnini göster (Pass/Fail) */}
        <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
      </div>
      
      {/* Silme butonu */}
      <button 
        className="delete-btn" // delete-btn zorunlu
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}
export default StudentItem;