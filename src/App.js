import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Responsive Paragraph Word Counter</h1>
        <textarea
          className="text-area"
          placeholder="Start typing here..."
          value={text}
          onChange={handleChange}
        />
        <p className="word-count">Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
