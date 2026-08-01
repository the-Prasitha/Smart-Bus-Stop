function BusCard() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition">

      <h2 className="text-2xl font-bold text-blue-500">
        🚌 21A
      </h2>

      <p className="text-slate-300 mt-3">
        Destination
      </p>

      <p className="text-white text-xl font-semibold">
        Karur
      </p>

      <div className="flex justify-between mt-6">

        <div>
          <p className="text-slate-400">
            ETA
          </p>

          <p className="text-green-400 text-xl font-bold">
            5 min
          </p>
        </div>

        <div>
          <p className="text-slate-400">
            Seats
          </p>

          <p className="text-yellow-400 text-xl font-bold">
            12
          </p>
        </div>

      </div>

    </div>
  );
}

export default BusCard;