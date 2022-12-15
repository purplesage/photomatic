import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';

function App() {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <div className="mx-5">
        <div className="relative">
          <div className="gradient-02 z-0" />
          <QuienesSomos />
        </div>
      </div>
    </div>
  );
}

export default App;
