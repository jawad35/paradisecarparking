import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AdminPanel, Checkout, HomePage, Login, Register } from "./Components";
import { runScripts } from "./Components/HomePage/homePageScripts";
import PrivateRoute from "./Components/PrivateRouting";
import AdminRoute from "./Components/PrivateRouting/AdminRoute";
import Userpanel from "./Components/userPanel/Userpanel";
import LoadingComponent from "./Loading Animation/Loading";

import MessengerCustomerChat from "react-messenger-customer-chat";

const App = () => {
  useEffect(() => {
    runScripts();
  }, []);

  return (
    <BrowserRouter>
      <MessengerCustomerChat
        pageId="101621921567417"
        appId="932788690836898"
       
      />
      <Suspense fallback={<LoadingComponent />}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <AdminRoute exact path="/adminpanel" component={AdminPanel} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <PrivateRoute exact path="/userdashboard" component={Userpanel} />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
