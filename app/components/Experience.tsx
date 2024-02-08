interface Props {
    company: string;
    start_date: string;
    end_date?: string | null;
    position: string;
    headline?: string | null;
    points?: string[] | null;
  }



const Experience: React.FC<Props> = ({company, start_date, end_date = null, position, headline = null, points = null}) => {
    
    function generateBulletPoints(points: string[]): JSX.Element {
        return (
            <ul>
                {points.map((point, index) => (
                    <li key={index} className="pb-4">
                        {point}
                    </li>
                ))}
            </ul>
        );
    }
    
    return (
        <li className="ms-4">
            <div className="flex items-center justify-start">
                <h1 className="text-lg font-bold">{company}</h1>
            </div>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{start_date} - {end_date || "Present"}</time>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">{position}</h3>
            <h4 className="text-md">{headline}</h4>
            {points && <div className="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{generateBulletPoints(points)}</div>}
        </li>
    );
};

export default Experience;
