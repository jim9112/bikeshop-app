import React, { useRef, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInContainer = () => {
  const [formType, setFormType] = useState<'signIn' | 'signUp'>('signIn');
  const signUpButtonRef = useRef<any>(null);
  const signInButtonRef = useRef<any>(null);
  return (
    <div className="grid grid-flow-row justify-evenly">
      <div>
        <button
          ref={signInButtonRef}
          className="px-4 py-2 bg-white rounded-t-md"
          type="button"
          onClick={() => {
            setFormType('signIn');
            signInButtonRef.current?.classList.remove('bg-secondary');
            signInButtonRef.current?.classList.add('bg-white');
            signUpButtonRef.current.classList.remove('bg-white');
            signUpButtonRef.current.classList.add('bg-secondary');
          }}>
          Sign In
        </button>
        <button
          ref={signUpButtonRef}
          className="px-4 py-2 bg-secondary rounded-t-md"
          type="button"
          onClick={() => {
            setFormType('signUp');
            signUpButtonRef.current?.classList.remove('bg-secondary');
            signUpButtonRef.current?.classList.add('bg-white');
            signInButtonRef.current.classList.remove('bg-white');
            signInButtonRef.current.classList.add('bg-secondary');
          }}>
          Sign Up
        </button>
      </div>
      <div className="bg-white w-max p-4 rounded-r-md rounded-bl-md">
        {formType === 'signIn' && <SignIn />}
        {formType === 'signUp' && <SignUp />}
      </div>
    </div>
  );
};

export default SignInContainer;
