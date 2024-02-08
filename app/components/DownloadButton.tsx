'use client';

interface Props {
  text: string;
  fileUrl: string;
}

const DownloadButton: React.FC<Props> = ({text, fileUrl}) => {
  return (
    <div >
      <button className="hover:shadow-lg relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center'">
        <span className="flex items-center relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <a
            href={fileUrl}
            download
            >
            {text}
            </a>
            <svg className="pl-3 w-6 h-6 text-gray-900 dark:text-white group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"/>
            </svg>
        </ span>
      </button>
    </div>
  );
};

export default DownloadButton;