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
            <p className="mb-4">
            I am a {calculateAge(new Date('1999-10-15'))} year old software engineer who loves to create.
            </p>
            When I am not working on software, you can find me training for a marathon <a href="https://support.rmhc.org/site/TR/TeamRMHC-ChicagoMarathon/TeamRMHC?px=1635707&pg=personal&fr_id=1600" className="text-gradient hover:underline">(support me here!)</a> on Chicago's Lakefront Trail or exploring the city's rich culinary scene with my friends.
        </div>
    </Box>
  )
}