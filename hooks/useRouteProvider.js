import { Route, Redirect } from 'react-router-dom';

export const useRouteProvider = () => {
  // TODO: Add logic for auth here
  const isLoggedIn = true;

  //   const PublicRoute = ({ component: Component, path }) => (
  //     <Route render={() =>
  //     isLoggedIn ? (
  //         <Redirect to='/dashboard' />
  //     ) : (
  //         <Component  />
  //     )
  //     } />
  //   );

  //   const PrivateRoute = ({component, adminOnly, path}) => {
  //     <Route render={() =>
  //         isLoggedIn ? (
  //             <Redirect to='/dashboard' />
  //         ) : (
  //             <Redirect to='/login' />
  //         )
  //         } />
  //   }
};
