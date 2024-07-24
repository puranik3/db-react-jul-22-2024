import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

// defult export can be imported with any name
import Application from "./App";

import "./services/configureAxios";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const appProps = {
    title: "Workshops Application",
    subtitle: "Find workshops nearby",
};

// props spread operator - {...appProps} -> properties of the appProps object are sent as props
// In class-based components, and you want to drill props {...this.appProps}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Application {...appProps} />
        </BrowserRouter>
    </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <Application
//       title="Workshops App"
//       subtitle="Find workshops nearby"
//     />
//     <Application title="GMail" subtitle="All your email safe abd secure" />
//     <Application title="Teams" subtitle="Chat, conference and share files" />
//   </React.StrictMode>
// )

// const el = <div>Hello <strong>React</strong></div>

// root.render(
//   <div>
//     Hello <strong>React</strong>
//   </div>
// );
