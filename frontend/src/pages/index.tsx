import Header from "@/components/Header";
import CountryList from "@/components/countries/CountryList";
import CreateForm from "@/components/countries/CreateForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-10 mt-8">
        <CreateForm />
        <CountryList />
      </main>
    </>
  );
}
