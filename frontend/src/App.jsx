import './App.css'
import { Navigate, Outlet } from "react-router-dom";
import { AuthUsercontext } from "./context/Authcontext";
import { useContext } from 'react';

function App() {
  const { token } = useContext(AuthUsercontext);
  console.log(token)
  return token ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth" />
  );
}
export default App;
