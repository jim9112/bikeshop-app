import Head from 'next/head';
import SignIn from '../components/SignIn';
import SignInContainer from '../components/SignInContainer';

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1 className="text-center">Bike Shop App</h1>
        </header>
        <SignInContainer />
      </main>
    </div>
  );
}
