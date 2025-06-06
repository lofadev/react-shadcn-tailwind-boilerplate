import { useRoutes } from 'react-router-dom';

import globalRoutes from './global';
import protectedRoutes from './private';
import publicRoutes from './public';

const AppRoutes = () => {
  const routing = useRoutes([...globalRoutes, ...publicRoutes, ...protectedRoutes]);

  return <>{routing}</>;
};

export default AppRoutes;
