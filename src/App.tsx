import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import StacksSection from "./components/StacksSection";
import ProgressScrollBar from "./components/ProgressScrollBar";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import ProcessWorkSection from "./components/ProcessWork";


function App() {
  return (
    <>
      <ProgressScrollBar />
      <Header />
      <main>
        <FirstSection />
        <ServicesSection />
        <ProcessWorkSection />
        <StacksSection />
        <ProjectsSection />
        <ContactSection />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
