import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  children,
  allowType
}: {
  children: ReactNode;
  allowType: string[];
}) => {
    console.log(allowType)

  // const user = JSON.parse(localStorage.getItem('user') || '{}');

//   if (user?.role && allowType.includes(user?.role)) {
//     return children;
//   } else {
//     return <Navigate to={`/login`} replace />;
//   }

return children
};

export default ProtectedRoute;
