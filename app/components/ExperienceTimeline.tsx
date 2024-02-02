import Box from "./ContentBox"
import Experience from "./Experience"
import Tag from "./Tag"

export default function ExperienceTimeline() {
  return (
        <Box title="Experience">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <Experience 
                company="LTN Global"
                start_date="August 2022"
                position="Software Engineer" 
                headline="Architecting and automating video networking and encoding validation processes on broadcasts delivered to millions worldwide" 
                description="insert description" />
                <div className="mb-10 ml-2">
                  <Tag text='Video Engineering'></Tag>
                  <Tag text='Python'></Tag>
                  <Tag text='Linux'></Tag>
                </div>
                <Experience 
                company="CSG International"
                start_date="September 2021"
                end_date="March 2022"
                position="Test Automation Engineer" 
                headline="Architecting and implementing UI and API test plans for user-facing products" />
                <div className="mb-10 ml-2">

                </div>                
                <Experience 
                company="CSG International"
                start_date="June 2021"
                end_date="September 2022"
                position="Test Automation Engineering Intern" 
                description="Automating UI and API testing for user-facing products" />
                <div className="mb-10 ml-2">

                </div>
                <Experience 
                company="Wi-Tronix, LLC"
                start_date="June 2020"
                end_date="January 2021"
                position="Software Development Intern"
                description="Executed the full-scale automation of testing for a data monitoring dashboard, significantly increasing data accuracy and decreasing downtime. 
                This dashboard tracked realtime safety and efficiency metrics via on-train IoT devices, leading to a boost in operational performance and reduced costs for companies across the transportation industry.
                " />
                <div className="ml-2">
                  <Tag text='Selenium'></Tag>
                  <Tag text='Java'></Tag>
                  <Tag text='Data Processing'></Tag>
                </div>
            </ol>
        </Box>

  )
}