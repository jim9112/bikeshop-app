import Head from 'next/head';
import SignIn from '../components/SignIn';

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
        <div className="bg-white h-80 w-96 m-auto">
          <SignIn />
        </div>
      </main>
    </div>
  );
}
