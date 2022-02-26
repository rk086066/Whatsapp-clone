import React from "react";

//components
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";

import TemplateProvider from "./templates/TemplateProvider";
import Messenger from "./components/Messenger";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
