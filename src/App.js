import React from "react";
import Routes from "./router/Routes";
import "./App.scss";
import Layout from "./layouts";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
