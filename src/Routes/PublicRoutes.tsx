import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES_CONFIG, WILDCARD_ROUTES } from "../Shared/Constants";
import { CustomRouter } from "./RootRoutes";
import FormCreator from "../Views/FormCreator";

const Dashboard = lazy(() => import("../Views/Dashboard/Dashboard"));

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <Dashboard />,
    title: ROUTES_CONFIG.HOMEPAGE.title
  },
  {
    path: `${ROUTES_CONFIG.LOGIN.path}`,
    title: ROUTES_CONFIG.LOGIN.title,
    element: <FormCreator />
  },
  {
    path: "*",
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: "Rendering wildcard"
  }
];
