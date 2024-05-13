import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center h-20 bg-green-500 uppercase font-bold">
      <Link href="/">Checkpoint : frontend</Link>
      <Link href="/add">Ajouter</Link>
    </header>
  );
}
