import { SelectInputProps } from "@/types";
import { useState } from "react";
import FormInput from "./FormInput";

export default function SelectInput({ id, options }: SelectInputProps) {
  const [createMode, setCreateMode] = useState(false);
  if (createMode) {
    <FormInput id="continent_name" label="New Continent" type="text" />;
  } else {
    return (
      <select
        name={id}
        id={id}
        className="max-w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {options?.length ? (
          options.map(({ name }) => <option value={name}>{name}</option>)
        ) : (
          <option>
            <button onClick={() => setCreateMode(true)} type="button">
              Create new Continent
            </button>
          </option>
        )}
      </select>
    );
  }
}
