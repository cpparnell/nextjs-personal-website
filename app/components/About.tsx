import Image from 'next/image'

export default function About() {
    
    function calculateAge(dob: Date): number {
        const diff_ms: number = Date.now() - dob.getTime();
        const age_dt: Date = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  
    return (
    <section className="w-full pr-[400px] pl-[200px]">
        <div className="justify-start items-start block p-6 bg-white border border-gray-300 rounded-lg">
            <div>
                <p className="font-medium dark:text-white sm:text-md md:text-lg lg:text-lg">About Me</p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="sm: text-sm md:text-md lg:text-md">
                <p>
                I am a {calculateAge(new Date('1999-10-15'))} year old lover of software, movement, and food. When I am not working on software, you can find me running on Chicago's Lakefront Trail, experimenting with a new recipe in the kitchen, or playing pool at the local dive.
                </p>
            </div>
        </div>
    </section>
  )
}