import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Form Submitted');
  };
  const onChange = (e: React.ChangeEvent) => {
    let element = e.target as HTMLInputElement;
    setFormData({ ...formData, [element.name]: element.value });
    console.log(formData);
  };
  return (
    <>
      <h1 className="text-center text-3xl">Sign Up</h1>
      <form
        className="grid grid-flow-row place-items-center pt-8 gap-4"
        action=""
        onSubmit={onSubmit}>
        <label htmlFor="userName">
          Email
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="email"
            id="email"
            name="email"
            onChange={onChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="password"
            id="password"
            name="password"
            onChange={onChange}
          />
        </label>
        <label htmlFor="password2">
          Verify Password
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="password2"
            id="password2"
            name="password2"
            onChange={onChange}
          />
        </label>
        <button
          className="rounded-lg border border-black py-1 px-3  bg-primary text-white"
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
