import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <h1>Welcome to the Session Logger!</h1>
      <p>
        This is a tool to help you keep track of all your surfing sessions here
        in Newport OR.
      </p>
      <p>
        To get started <Link to="/CreateAccount">Create An Account</Link> or{" "}
        <Link to="/LogIn">Log In</Link> if you already have one.
      </p>
    </>
  );
}

export default Landing;
