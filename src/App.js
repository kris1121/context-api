import React from "react";
import Page from "./Page";
import Sidebar from "./Sidebar"
import './App.css';
import { ThemeProvider } from "./ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Page>
          <Sidebar/>
          </Page>
      </ThemeProvider>
    </div>
  );
}

export default App;
