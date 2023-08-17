import { BrowserRouter } from "react-router-dom";
import RoutesAll from "./routes";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RoutesAll />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
      <ToastContainer theme="dark" position="top-center" />
    </>
  );
}

export default App;
