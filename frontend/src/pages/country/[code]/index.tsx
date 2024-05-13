import { useRouter } from "next/router";
import { useGetCountryByCodeQuery } from "@/graphql/generated/schema";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();
  const countryCode = router.query.code;
  const { data } = useGetCountryByCodeQuery({
    variables: { code: typeof countryCode === "string" ? countryCode : "" },
  });
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 items-center mt-8">
        <span className="text-6xl lg:text-8xl">{data?.country.emoji}</span>
        <ul className="flex flex-col gap-6 items-center">
          <li>
            Name: {data?.country.name} ({data?.country.code})
          </li>
          <li>Continent: {data?.country.continent?.name}</li>
        </ul>
      </main>
    </>
  );
}
