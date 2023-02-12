// import logo from "../public/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import SecondaryNavComponent from "./Components/SecondaryNavComponent";
import MainComponent from "./Components/MainSectionComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <SecondaryNavComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
