export default function BookingForm() {
  return (
    <form className="mt-6 space-y-3">
      <input type="date" className="border p-2 w-full" />
      <input type="date" className="border p-2 w-full" />
      <select className="border p-2 w-full">
        <option>1–4 persoane</option>
        <option>5–6 persoane</option>
        <option>7–9 persoane</option>
      </select>
      <button className="bg-green-800 text-white p-3 w-full">
        Verifică disponibilitatea
      </button>
    </form>
  );
}
