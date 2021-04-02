const SignUp = () => {
  return (
    <>
      <h1 className="text-center text-3xl">Sign In</h1>
      <form
        className="grid grid-flow-row place-items-center pt-8 gap-4"
        action="">
        <label htmlFor="userName">
          UserName
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="text"
            id="userName"
            name="userName"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="password"
            id="password"
            name="password"
          />
        </label>
        <label htmlFor="password2">
          Password
          <input
            className="border border-black rounded-sm bg-lightGrey ml-4"
            type="password2"
            id="password2"
            name="password2"
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
