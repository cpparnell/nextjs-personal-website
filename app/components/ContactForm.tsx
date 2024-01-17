'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface EmailFormState {
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<EmailFormState>({ email: '', subject: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send data to the API route
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    const data = await response.json();
    // Handle response
    console.log(data);
  };

  const SendIcon: React.FC = () => {
    return (
      <svg 
        className="w-3 h-3 text-gray-800 dark:text-white pl-2 group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path 
          className="stroke-current"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    );
  };
  
  
  return (
    <section>
      <p className="font-medium dark:text-white sm:text-sm md:text-md lg:text-md">Send Me a Message</p>
      <div className="border-t border-gray-300 my-2"></div>
      <form onSubmit={handleSubmit} className="flex flex-wrap flex-col py-2">
          <div>
            <div className="py-2">
              <input className="rounded-lg bg-grey-500 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center font-mono"
                type="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange} 
                placeholder="Email" 
              />
            </div>
            <div className="py-2">
              <input className="rounded-lg bg-grey-500 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center font-mono"
                type="text" 
                name="subject" 
                value={formState.subject} 
                onChange={handleChange} 
                placeholder="Subject"
                defaultValue={"Hi, Connor!"}
              />
            </div>
            <div className="py-2">
              <textarea className="rounded-lg bg-grey-500 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center font-mono"
                name="message" 
                value={formState.message} 
                onChange={handleChange} 
                placeholder="Message"
              />
            </div>
          </div>
        <div className="pt-2">
          <button type="submit" className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 flex items-center font-mono'>
              <span className="relative px-2 py-2 stransition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <div className="flex items-center">
                  <p>Send</p>
                  <SendIcon />
                </div>
              </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
