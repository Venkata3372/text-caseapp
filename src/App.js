import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const transformText = (text, caseType) => {
    switch (caseType) {
      case 'lower':
        return text.toLowerCase();
      case 'upper':
        return text.toUpperCase();
      case 'camel':
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');
      case 'pascal':
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
      case 'snake':
        return text.replace(/\s+/g, '_');
      case 'kebab':
        return text.replace(/\s+/g, '-');
      case 'trim':
        return text.trim();
      default:
        return text;
    }
  };

  return (
    <div className="container">
      <div>
        <input className="text-input" type="text" value={inputText} onChange={handleInputChange} placeholder="Enter text..." />
        {inputText && (
          <div>
            <div className="text-display">Original Text: {inputText}</div>
            <div className="case-container">
              <div className="case-label">Lowercase</div>
              <div className="text-display">{transformText(inputText, 'lower')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Uppercase</div>
              <div className="text-display">{transformText(inputText, 'upper')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Camel Case</div>
              <div className="text-display">{transformText(inputText, 'camel')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Pascal Case</div>
              <div className="text-display">{transformText(inputText, 'pascal')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Snake Case</div>
              <div className="text-display">{transformText(inputText, 'snake')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Kebab Case</div>
              <div className="text-display">{transformText(inputText, 'kebab')}</div>
            </div>
            <div className="case-container">
              <div className="case-label">Trimmed</div>
              <div className="text-display">{transformText(inputText, 'trim')}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
