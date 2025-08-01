import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import StacksSection from "./components/StacksSection";
import ProgressScrollBar from "./components/ProgressScrollBar";

function App() {
  return (
    <>
      <ProgressScrollBar />
      <Header />
      <FirstSection />
      <StacksSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
