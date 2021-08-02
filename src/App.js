import "./normalize.css";
import "./main.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import BlogsEducation from "./components/BlogsEducation";
import Footer from "./components/Footer";
// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Domains />
        <Projects />
        <BlogsEducation />
      </main>
      <Footer />
    </>
  );
}

export default App;
