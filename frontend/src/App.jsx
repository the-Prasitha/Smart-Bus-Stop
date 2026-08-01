import Header from "./components/layout/Header";
import BusCard from "./components/bus/BusCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">

      <Header />

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-white text-3xl font-bold mb-8">
          Next Arriving Buses
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <BusCard />
          <BusCard />
          <BusCard />

        </div>

      </div>

    </div>
  );
}

export default App;