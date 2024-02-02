import Box from "./ContentBox";

export default function About() {
    
    function calculateAge(dob: Date): number {
        const diff_ms: number = Date.now() - dob.getTime();
        const age_dt: Date = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  
    return (
    <Box title="About">
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <p>
            I am a {calculateAge(new Date('1999-10-15'))} year old software engineer who loves to create.
            </p>
            When I am not working on software, you can find me training for a marathon on Chicago's Lakefront Trail or exploring the city's rich culinary scene with my friends.
        </div>
    </Box>
  )
}