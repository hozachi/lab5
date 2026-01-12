// src/components/StudentForm.jsx

import { useState } from 'react';

function StudentForm({ onAdd, students }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // --- 1. Temel Validation: İsim boş olmamalı ---
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Name cannot be empty.');
      return;
    }

    // --- 2. Grade Validation: 0 ile 100 arasında bir sayı olmalı ---
    const numericGrade = Number(grade);
    if (isNaN(numericGrade) || numericGrade < 0 || numericGrade > 100) {
      setError('Grade must be a number between 0 and 100.');
      return;
    }

    // --- 3. Duplicate Name Check (Case-insensitive) ---
    const nameExists = students.some(
      (student) => student.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (nameExists) {
      setError(`A student named "${trimmedName}" already exists.`);
      return;
    }

    // Başarılı: Öğrenciyi ekle
    onAdd({
      id: Date.now(),
      name: trimmedName,
      grade: numericGrade,
    });

    // Inputları temizle
    setName('');
    setGrade('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="input input-grade"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        min="0"
        max="100"
      />
      <button type="submit" className="btn">Add Student</button>
      
      {/* Hata mesajını göster (className="form-error" zorunlu) */}
      {error && <small className="form-error">{error}</small>}
    </form>
  );
}
export default StudentForm;