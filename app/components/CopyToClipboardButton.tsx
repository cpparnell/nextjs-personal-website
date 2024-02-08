'use client';
import { useState } from 'react';

interface Props {
  text: string;
}

const CopyToClipboardButton: React.FC<Props> = ({text}) => {
  const [textToCopy, setTextToCopy] = useState('Text to be copied');

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <button 
        onClick={copyTextToClipboard} 
        className="hover:shadow-lg relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center'"
      >
        <span className="group-hover:text-white flex items-center relative px-2 py-2 transition-all ease-in duration-75 text-gray-900 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {text}
            <svg className="group-hover:text-white pl-3 w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"/>
            </svg>
        </ span>
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
