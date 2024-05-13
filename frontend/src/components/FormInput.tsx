import { FormInputProps } from "@/types";

export default function FormInput({ id, label, type, style }: FormInputProps) {
  switch (type) {
    case "submit":
      return (
        <div className={`${style}`}>
          <button
            className="shadow-xl bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg px-4 py-2 max-w-32"
            id={id}
            type="submit">
            {label}
          </button>
        </div>
      );
    default:
      return (
        <div className={`flex ${style}`}>
          <div className="relative">
            <input
              id={id}
              type={type}
              name={id}
              className="w-full h-8 px-2 py-1 text-gray-900 placeholder-transparent border-b-2 border-gray-300 rounded-lg peer focus:outline-none focus:border-blue-600"
              autoComplete="off"
              placeholder={label}
            />
            <label
              htmlFor={id}
              className="absolute text-sm text-gray-600 transition-all left-1 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:font-light peer-focus:text-sm">
              {label}
            </label>
          </div>
        </div>
      );
  }
}
