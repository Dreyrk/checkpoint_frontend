import CountryList from "@/components/countries/CountryList";
import CreateForm from "@/components/countries/CreateForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 mt-8">
      <CreateForm />
      <CountryList />
    </main>
  );
}
