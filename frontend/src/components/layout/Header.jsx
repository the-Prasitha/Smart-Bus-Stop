function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>
          <h1 className="text-3xl font-bold text-blue-500">
            🚍 Smart Bus Stop
          </h1>

          <p className="text-slate-400 mt-1">
            Real-Time Bus Tracking & Priority Seat Reservation
          </p>
        </div>

        <div className="text-right">
          <p className="text-white text-xl font-semibold">
            10:45 AM
          </p>

          <p className="text-slate-400">
            Friday, August 1
          </p>
        </div>

      </div>
    </header>
  );
}

export default Header;