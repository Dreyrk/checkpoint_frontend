import { useGetCountriesQuery } from "@/graphql/generated/schema";
import Link from "next/link";

export default function CountryList() {
  const { data } = useGetCountriesQuery();
  return (
    <ul className="max-md:grid max-md:grid-cols-3 flex flex-wrap gap-4">
      {data?.countries.map(({ name, emoji, id, code }) => (
        <li className="min-w-24 p-4 rounded-lg bg-gray-200 border border-gray-600" key={id}>
          <Link className="grid place-items-center" href={`/country/${code}`}>
            <span>{name}</span>
            <span>{emoji}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
