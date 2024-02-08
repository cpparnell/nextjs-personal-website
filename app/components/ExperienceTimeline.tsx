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
                points={[
                  "Designing and automating video networking and encoding validation processes on broadcasts delivered to millions in Europe and the Americas.",
                  "Architect and developer of a tool that automatically monitors ad insertion across affiliate news channels, ensuring consistent on-time delivery of advertisements for more than a million viewers.",
                  "Developing and maintaining CI/CD pipelines in Gitlab for hundreds of test cases spanning multiple products."
                ]} />
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
                points={[
                  "Architected test plans and implemented UI and API automation test suites for Ascendon, a product used by Fortune 500 customers to bundle and sell digital services.",
                  "Developed and maintained CI/CD pipelines for Acendon product in Jenkins."
                ]} />
                <div className="mb-10 ml-2">
                  <Tag text='Test Architecture'></Tag>
                  <Tag text='Automation'></Tag>
                  <Tag text='C#'></Tag>
                </div>                
                <Experience 
                company="CSG International"
                start_date="June 2021"
                end_date="September 2022"
                position="Test Automation Engineering Intern" 
                points={[
                  "Implemented all-encompassing UI automation tests in C# Selenium for CSG Forte, a digital payment product.",
                  "Developed and maintained CI/CD pipelines for Forte product in Jenkins."
                ]} />
                <div className="mb-10 ml-2">
                  <Tag text='Test Automation'></Tag>
                  <Tag text='Selenium'></Tag>
                  <Tag text='C#'></Tag>
                </div>
                <Experience 
                company="Wi-Tronix"
                start_date="June 2020"
                end_date="January 2021"
                position="Software Development Intern"
                points={[
                  "Developed full-scale automation of testing for a live data monitoring dashboard that is used to track realtime safety and efficiency metrics for trains. Automated testing led to a 30% decrease in data inaccuracy and a 20% decrease in dashboard downtime.",
                  "The deployment of this dashboard to national rail companies led to a significant increase in rail safety and efficiency."
                ]} />
                <div className="ml-2">
                  <Tag text='Selenium'></Tag>
                  <Tag text='Java'></Tag>
                  <Tag text='Data Processing'></Tag>
                </div>
            </ol>
        </Box>

  )
}