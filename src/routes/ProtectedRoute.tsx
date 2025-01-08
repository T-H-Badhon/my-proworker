import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  children,
  allowType
}: {
  children: ReactNode;
  allowType: string[];
}) => {

  const user = JSON.parse(sessionStorage.getItem('userData') || '{}');

  console.log(user)

  if (user?.role && allowType.includes(user?.role)) {
    return children;
  } else {
    return <Navigate to={`/login`} replace />;
  }


};

export default ProtectedRoute;
