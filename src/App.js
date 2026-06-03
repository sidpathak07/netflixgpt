import Browse from './components/Browse';
import Login from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

function App() {
  const dispatch = useDispatch();
  const PrivateRoute = ({children})=>{
    const user = useSelector(state=>state.user.user);
    if(!user) return <Navigate to="/" />
    return children;
  }

  


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <PrivateRoute><Browse /></PrivateRoute>
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
