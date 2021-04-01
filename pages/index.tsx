import Head from 'next/head';
import SignIn from '../components/SignIn';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1 className="text-center">Bike Shop App</h1>
        </header>
        <div>
          <SignIn />
        </div>
      </main>
    </div>
  );
}
