import React from "react";
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";
import FilterOptions from "./components/FilterOptions";

const App = () => {
  return (
    <div>
      <FilterOptions />
      <div
        style={{ display: "flex", Window: "100%", backgroundColor: "#F4F5F9" }}
      >
        <EmailList />
        <EmailBody />
      </div>
    </div>
  );
};

export default App;
