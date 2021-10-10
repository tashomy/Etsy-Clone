import React from "react";

import { Route } from "react-router-dom";
import SixthDiv from "./pages/faq";
import Page from "./pages/main";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Page}></Route>
    </div>
  );
};

export default Routes;
