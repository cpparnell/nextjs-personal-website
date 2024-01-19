import Box from "./ContentBox";

export default function Education() {
  
    return (
    <Box title="Education">
        <div>
            <div className="flex items-center justify-start">
                <h1 className="text-lg font-bold">University of Illinois at Urbana-Champaign</h1>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2022</time>
            <div className="flex-col items-center justify-start">
                <div className="flex items-center">
                    <h1 className="text-md font-bold">BS Computer Science</h1>
                    <h1 className="text-sm items-centerfont-medium pl-2">3.1 / 4.0</h1>
                </div>
                <p className="text-sm  text-gray-500">
                    Degree Specialization in Intelligence & Big Data
                </p>
            </div>         
        </div>
    </Box>
  )
}