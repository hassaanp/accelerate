// show user that they are signing out for 1 second and then call signout

import { auth } from '@/firebase-web/init';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    auth.signOut();
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, []);
  return <div>Signing out...</div>;
}
