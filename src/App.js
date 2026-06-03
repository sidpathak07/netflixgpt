import Browse from './components/Browse';
import Login from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          email: user.email,
          uid: user.uid,
          accessToken: user.stsTokenManager?.accessToken,
          refreshToken: user.stsTokenManager?.refreshToken,
          displayName: user.displayName
        }));
        
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
