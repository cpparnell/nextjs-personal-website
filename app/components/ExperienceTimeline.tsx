import Image from 'next/image'

export default function Experience() {
  return (
    <section className="w-full pr-[400px] pl-[200px]">
        <div className="justify-start items-start block p-6 bg-white border border-gray-300 rounded-lg">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-4">
                    <div className="flex items-center justify-start">
                        <h1 className="text-lg font-bold">LTN Global</h1>
                    </div>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - Present</time>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Insert Description of what I have done</p>
                </li>
                <li className="mb-10 ms-4">
                    <h1 className="text-lg font-bold">CSG International</h1>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021 - March 2022</time>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">Test Automation Engineer</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Insert Description of what I have done</p>
                </li>
                <li className="mb-10 ms-4">
                    <h1 className="text-lg font-bold">CSG International</h1>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021 - September 2021</time>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">Test Automation Engineering Intern</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Insert Description of what I have done</p>
                </li>
                <li className="mb-10 ms-4">
                    <h1 className="text-lg font-bold">Wi-Tronix, LLC</h1>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2020 - Jan 2021</time>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">Software Development Intern</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Insert Description of what I have done</p>
                </li>
            </ol>
        </div>
    </section>
  )
}