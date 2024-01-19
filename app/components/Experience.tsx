interface Props {
    company: string;
    start_date: string;
    end_date?: string | null;
    position: string;
    description?: string | null;
  }

const Experience: React.FC<Props> = ({company, start_date, end_date = null, position, description = null}) => {
    return (
        <li className="mb-10 ms-4">
            <div className="flex items-center justify-start">
                <h1 className="text-lg font-bold">{company}</h1>
            </div>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{start_date} - {end_date || "Present"}</time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">{position}</h3>
            {description && <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>}
        </li>
    );
};

export default Experience;
