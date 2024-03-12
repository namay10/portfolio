import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div name="Contact"
    className='bg-bluee w-full min-h-screen '>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white space-y-12">
       <div className=''>
        <p className="text-4xl font-bold border-b-2 border-black p-2 inline ">
          Contact
        </p>
      </div>    
      <div className='flex justify-center'>
      <form action='https://getform.io/f/pbgkkxyb' method='POST' className="bg-gray-600 py-4 px-4 rounded shadow-md max-w-md w-full">
        <input
          type="text"
          placeholder="Name"
          {...register("Name", { required: true })}
          className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: true,
            pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
          })}
          className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          {...register("Message")}
          className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
        />
        <div className='flex justify-center'>
        <button
          type="submit"
          className="bg-blue-500 text-white py-4 px-6 text-lg rounded-lg hover:bg-blue-600 "
        >
          Submit
        </button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;
