import AppName from "./components/AppName";
import CurrentTime from "./components/CurrentTime";
import Heading from "./components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center className="Clock-container">
      <AppName />
      <Heading />
      <CurrentTime />
    </center>
  );
}

export default App;
