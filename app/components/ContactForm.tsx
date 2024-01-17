// use client

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

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        value={formState.email} 
        onChange={handleChange} 
        placeholder="Your email" 
      />
      <input 
        type="text" 
        name="subject" 
        value={formState.subject} 
        onChange={handleChange} 
        placeholder="Subject" 
      />
      <textarea 
        name="message" 
        value={formState.message} 
        onChange={handleChange} 
        placeholder="Message"
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
