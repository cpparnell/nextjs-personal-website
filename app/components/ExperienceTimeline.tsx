import Box from "./ContentBox"
import Experience from "./Experience"

export default function ExperienceTimeline() {
  return (
        <Box title="Experience">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <Experience 
                company="LTN Global"
                start_date="August 2022"
                position="Software Engineer" 
                description="insert description" />
                <Experience 
                company="CSG International"
                start_date="September 2021"
                end_date="March 2022"
                position="Test Automation Engineer" 
                description="insert description" />
                <Experience 
                company="CSG International"
                start_date="June 2021"
                end_date="September 2022"
                position="Test Automation Engineering Intern" 
                description="insert description" />
                <Experience 
                company="Wi-Tronix, LLC"
                start_date="June 2020"
                end_date="January 2021"
                position="Software Development Intern" 
                description="insert description" />
            </ol>
        </Box>

  )
}