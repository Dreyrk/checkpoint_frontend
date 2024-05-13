import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-28 bg-wild text-white w-full px-4 flex flex-col justify-evenly items-center">
      <Link className="flex gap-4 items-center" href="/">
        <FaHome size={40} />
        <h1 className="text-lg font-bold">Checkpoint : frontend</h1>
      </Link>
      <h2 className="">Countries</h2>
    </header>
  );
}
