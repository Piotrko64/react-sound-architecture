import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,

    document.getElementById("root")
);

reportWebVitals();
