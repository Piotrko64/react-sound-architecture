import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";

const root = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,

    root
);

reportWebVitals();
