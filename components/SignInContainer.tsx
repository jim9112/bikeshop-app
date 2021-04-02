import SignIn from './SignIn';

const SignInContainer = () => {
  return (
    <div className="grid grid-flow-row justify-evenly">
      <div>
        <button className="px-4 py-2 bg-white rounded-t-md" type="button">
          Sign In
        </button>
        <button className="px-4 py-2 bg-secondary rounded-t-md" type="button">
          Sign Up
        </button>
      </div>
      <div className="bg-white w-max p-4 rounded-r-md rounded-bl-md">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInContainer;
