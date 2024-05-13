import { FormEvent } from "react";
import FormInput from "../FormInput";
import { useRouter } from "next/router";
import SelectInput from "../SelectInput";
import { useCreateCountryMutation, useGetContinentQuery } from "@/graphql/generated/schema";
import client from "@/graphql/client";

const createFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
  },
  {
    id: "emoji",
    label: "Emoji",
    type: "text",
  },
  {
    id: "code",
    label: "Code",
    type: "text",
  },
];

export default function CreateForm() {
  const router = useRouter();
  const [createCountry] = useCreateCountryMutation();
  const { data: continentList } = useGetContinentQuery();
  console.log(continentList?.continents);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const formJSON: any = Object.fromEntries(formData.entries());
      const res = await createCountry({ variables: { data: { ...formJSON } } });
      router.push(`/country/${res.data?.addCountry.code}`);
    } catch (e) {
      console.error((e as Error).message);
    } finally {
      client.resetStore();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex max-md:flex-col gap-6 items-center bg-gray-200 rounded-md px-8 py-6">
      <h3 className="text-lg font-semibold max-md:mb-6">Create New Country</h3>
      {createFields.map(({ id, label, type }) => (
        <FormInput id={id} label={label} type={type} key={id} />
      ))}
      {/* <SelectInput id="country_continent_select" options={continentList?.continents} /> */}
      <FormInput type="submit" id="submit_create_country" label="Create" style="self-end" />
    </form>
  );
}
