import useFormFields from '../lib/useFormFields';
import { useRouter } from 'next/router';

const SignUp = () => {
  const { onChange, formData }: any = useFormFields();
  const router = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.password2) {
      let element = e.target as HTMLFormElement;
      element.reset();
      router.push('/main');
      console.log('form matches');
    } else {
      console.log('form does not match');
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl">Sign Up</h1>
      <form className="grid grid-cols-2 pt-8 gap-4" onSubmit={onSubmit}>
        <label htmlFor="userName">Email</label>
        <input
          className="border border-black rounded-sm bg-lightGrey ml-4"
          type="email"
          id="email"
          name="email"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border border-black rounded-sm bg-lightGrey ml-4"
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
        <label htmlFor="password2">Verify Password</label>
        <input
          className="border border-black rounded-sm bg-lightGrey ml-4"
          type="password"
          id="password2"
          name="password2"
          onChange={onChange}
        />
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
