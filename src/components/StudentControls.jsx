// src/components/StudentControls.jsx

function StudentControls({ filter, search, sortOrder, onFilterChange, onSearchChange, onSortToggle }) {
  
  const sortText = sortOrder === 'high' ? 'High Low' : 'Low High';
  
  return (
    <div className="controls">
      <div className="filters">
        {/* Filtreleme Butonları: all, pass, fail */}
        {['all', 'pass', 'fail'].map((f) => (
          <button
            key={f}
            // active class'ı ekle
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => onFilterChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Arama Input'u */}
      <input
        type="text"
        className="input search" 
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      
      {/* Sıralama Butonu */}
      <button 
        className="btn sort-btn" 
        onClick={onSortToggle}
      >
        Sort: {sortText}
      </button>
    </div>
  );
}
export default StudentControls;