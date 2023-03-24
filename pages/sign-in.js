import Head from 'next/head';
import Signin from '../components/Signin';

function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign-in</title>
      </Head>
      <SignIn />
    </>
  );
}

export default SignInPage;
