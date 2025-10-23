
import React from 'react';


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