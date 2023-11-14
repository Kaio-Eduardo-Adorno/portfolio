"use client";

import { FormEvent, useState } from "react";

export const Contact: React.FC = () => {
  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const setContact = (field: string) => {
    return (e: any) => {
      setContactValues({ ...contactValues, [field]: e.target.value });
    };
  };

  const submitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id='contact' className='flex flex-col p-3 items-center'>
      <div className='leading-freedom flex-shrink text-2xl'>Contact</div>

      <form
        onSubmit={submitEmail}
        className='flex flex-col gap-3 flex-wrap w-full justify-center max-w-screen-md'
      >
        <input
          placeholder='Your name'
          className='input'
          onClick={setContact("name")}
        />
        <input
          placeholder='Email address'
          className='input'
          onClick={setContact("email")}
        />
        <input
          placeholder='Subject'
          className='input'
          onClick={setContact("subject")}
        />
        <textarea
          placeholder='Enter message here...'
          className='text-area'
          onClick={setContact("message")}
        />
        <button type='submit' className='btn-primary text-gray-600 font-bold'>
          Send
        </button>
      </form>
    </section>
  );
};
