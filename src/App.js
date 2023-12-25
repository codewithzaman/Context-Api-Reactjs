import React from "react";
import UserProvider from "./Context/UserProvider";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <UserProvider>
      <User/>
      </UserProvider>
    </div>
  );
}

export default App;
