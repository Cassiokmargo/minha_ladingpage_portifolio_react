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
      <main>
        <FirstSection />
        <StacksSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
