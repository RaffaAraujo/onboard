import { Routes, Route } from "react-router-dom";
import Wellcome from "../pages/Wellcome";
import Information from "../pages/Information";
import { PrivateRoutes } from "./privateRoutes";
import SingIn from "../pages/SingIn";
import Finished from "../pages/Finished";
import NotFound from "../pages/NotFound";
import MessageError from "../pages/MessageError";
import Continue from "../pages/Continue";

export default function RoutesAll() {
  return (
    <Routes>
      <Route path="/:code" element={<Wellcome />} />
      <Route path="/login/:id" element={<SingIn />} />
      <Route path="/finalizado" element={<Finished />} />
      <Route path="/erro" element={<MessageError />} />
      <Route path="/continuar" element={<Continue />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/information"
        element={
          <PrivateRoutes>
            <Information />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
