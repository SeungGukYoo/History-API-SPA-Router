import "./App.css";
import useRouter from "./util/customHook";

function App() {
  const { push } = useRouter();
  return (
    <>
      <h1>root</h1>
      <button onClick={() => push("/about")}>about</button>
    </>
  );
}

export default App;
