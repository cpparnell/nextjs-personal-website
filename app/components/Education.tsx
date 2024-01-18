import Box from "./ContentBox";

export default function Education() {
  
    return (
    <Box title="Education">
        <div>
            <div className="flex items-center justify-start">
                <h1 className="text-lg font-bold">University of Illinois - Urbana Champaign</h1>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2022</time>
        </div>
    </Box>
  )
}