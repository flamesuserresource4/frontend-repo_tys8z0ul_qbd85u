import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeatureGrid from './components/FeatureGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <Categories />
      <FeatureGrid />
    </div>
  );
}

export default App;
