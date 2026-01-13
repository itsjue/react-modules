import "./App.css";
import {Header} from './components/Header';
import {MainContent} from './components/MainContent';
import {ProductSection} from "./components/ProductSection";
import {Footer} from "./components/Footer";
// import {FAQ} from "./components/FAQ";
import { FAQprovider } from "./components/FAQprovider";

function App() {
  return (
    <>
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      {/* <FAQ /> */}
      <FAQprovider/>
      <Footer />
    </div>
    </>
  );
}

export default App;
