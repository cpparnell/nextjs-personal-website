import dynamic from 'next/dynamic';
import PersonalCard from './PersonalCard';

const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

export default function Badge() {
  
    return (
    <section className="top-8 left-8 z-50 fixed">
        <div className="flex-col justify-end items-start h-screen">
            <PersonalCard />
            <div className="shadow-lg block px-6 pt-6 pb-2 bg-white border border-gray-300 rounded-lg mb-8">
                <div>
                    <ContactForm />
                </div>
            </div>
            <div className="shadow-lg block px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                <p>Like this website? <a className="text-gradient font-bold" href="https://github.com/cpparnell/nextjs-personal-website" >Check out the code here!</a></p>
            </div>
        </div>
    </section>
  )
}