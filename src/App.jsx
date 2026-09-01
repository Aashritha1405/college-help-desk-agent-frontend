import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ChatSection from './components/sections/ChatSection.jsx';
import CoursesSection from './components/sections/CoursesSection.jsx';
import AdmissionsSection from './components/sections/AdmissionsSection.jsx';
import PlacementSection from './components/sections/PlacementSection.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <HeroSection />
        <CoursesSection />
        <AdmissionsSection />
        <PlacementSection />
      </main>
      <Footer />
      <ChatSection />
    </>
  );
}

export default App;
