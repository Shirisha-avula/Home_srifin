import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import SRIFIN from "pages/SRIFIN";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <SRIFIN /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
