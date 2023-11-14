"use client";

import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const submitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i8vnn2j",
        "template_qk1djho",
        form?.current || "",
        "BJnzwM149ua4PMQSH"
      )
      .then(
        (result) => {
          // Add sucess toast
          console.log(result.text);
        },
        (error) => {
          // Add error toast
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className='flex flex-col p-3 items-center'>
      <div className='leading-freedom flex-shrink text-2xl'>Contact</div>

      <form
        ref={form}
        onSubmit={submitEmail}
        className='flex flex-col gap-3 flex-wrap w-full justify-center max-w-screen-md'
      >
        <input placeholder='Your name' className='input' name='name' required />
        <input
          placeholder='Email address'
          className='input'
          name='email'
          required
        />
        <input
          placeholder='Subject'
          className='input'
          name='subject'
          required
        />
        <textarea
          placeholder='Enter message here...'
          className='text-area'
          name='message'
          required
        />
        <button type='submit' className='btn-primary text-gray-600 font-bold'>
          Send
        </button>
      </form>
    </section>
  );
};
