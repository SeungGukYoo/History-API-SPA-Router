import useRouter from "../util/customHook";

function About() {
  const { push } = useRouter();

  return (
    <div>
      <h1>about</h1>
      <button onClick={() => push("/")}>go home</button>
    </div>
  );
}

export default About;
