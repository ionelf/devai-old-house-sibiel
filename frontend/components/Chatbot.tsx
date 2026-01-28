export default function Chatbot() {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg p-4 w-80">
      <p className="font-semibold">DevAI</p>
      <input
        className="border p-2 w-full mt-2"
        placeholder="Întreabă despre cazare..."
      />
    </div>
  );
}
