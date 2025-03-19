import { Link } from 'react-router';

import PageWrapper from '@/components/page-wrapper';
import { Button } from '@/components/ui/button';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@/constants';
import { useAuthStore } from '@/store';
import { removeLocalStorage } from '@/utils';

const Home = () => {
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    removeLocalStorage(LOCAL_STORAGE_KEY.TOKEN);
    setUser(null);
  };

  return (
    <div>
      <PageWrapper>
        <div className="mt-4 flex h-full items-center justify-between">
          <h1>Home page</h1>
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Link className="underline-offset-4 transition-all hover:underline" to={ROUTE_PATH.AUTH.LOGIN}>
              Login
            </Link>
          )}
        </div>
      </PageWrapper>
    </div>
  );
};

export default Home;
