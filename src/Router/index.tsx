import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Workplaces } from "../view/pages/Workplaces";
import { AuthLayout } from "../view/layouts/AuthLayout";
import ContentLayout from "../view/layouts/ContentLayout";
import { CreateWorkplace } from "../view/pages/Workplaces/CreateWorkplace";

export function Router() {
  return(
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<ContentLayout />}>
            <Route path="/workplaces" element={<Workplaces />}/>
            <Route path="/workplaces/create" element={<CreateWorkplace />}/>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}