import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <Header>Session Logger</Header>
      <InputForm />
    </>
  );
}

export default App;
