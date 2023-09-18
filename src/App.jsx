
import Header from "./Components/Header/index";
import Nav from './Components/Nav/index';
import Footer from "./Components/Footer/index";
import Page from "./Components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;