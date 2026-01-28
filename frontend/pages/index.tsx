import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";

export default function Home() {
  return (
    <Layout>
      <section className="h-screen bg-[url('/mountain.jpg')] bg-cover flex items-center">
        <div className="bg-white/80 p-10 max-w-xl">
          <h1 className="text-4xl font-serif">
            Old House Sibiel
          </h1>
          <p className="mt-4">
            Cazare montană autentică, liniște și tradiție în inima Mărginimii Sibiului.
          </p>
          <BookingForm />
        </div>
      </section>
    </Layout>
  );
}
