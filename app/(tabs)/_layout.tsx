import { Tabs, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authProvider';

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isMounted, isAuthenticated]);

  return <Tabs />;
}