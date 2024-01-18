import Box from "./ContentBox";

export default function About() {
    
    function calculateAge(dob: Date): number {
        const diff_ms: number = Date.now() - dob.getTime();
        const age_dt: Date = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  
    return (
    <Box title="About">
        <div className="sm: text-sm md:text-md lg:text-md mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <p>
            I am a {calculateAge(new Date('1999-10-15'))} year old lover of software, movement, and food. When I am not working on software, you can find me running on Chicago's Lakefront Trail, experimenting with a new recipe in the kitchen, or playing pool at the local dive.
            </p>
        </div>
    </Box>
  )
}