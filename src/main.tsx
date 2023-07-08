import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About.tsx";
import WindowRouter from "./components/Router.tsx";
import "./index.css";
import Route from "./util/Route.tsx";
import Routes from "./util/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WindowRouter>
    <Routes>
      <Route path="/" component={<App />} />
      <Route path="/about" component={<About />} />
    </Routes>
  </WindowRouter>
);
