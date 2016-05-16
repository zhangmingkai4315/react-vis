import React from 'react';
import WordCloud from './WordCloud/WordCloud';
import worldCloudData from './data.config.js';
export default function App() {
  return (
    <div>
      <h1>Welcome to react-vis world!</h1>
      <WordCloud data={worldCloudData} />
    </div>
	);
}
