// src/hooks/useSplitText.js
import React from 'react';

// Simple function to split text into words and wrap them in a span
const useSplitText = (text) => {
  if (!text) return [];

  return text.split(" ").map((word, index) => (
    <span 
      key={index} 
      className="inline-block whitespace-nowrap mr-2"
    >
      {word}
    </span>
  ));
};

export default useSplitText;