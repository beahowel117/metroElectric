import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import FeaturedWork from "./components/FeaturedWork";
import About from "./components/About";
import Services from "./components/Services";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <Nav />
      <Services />
    </Box>
  );
}

export default App;
