import Auctions from "./components/Auctions";
import { Discover } from "./components/Discover";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
