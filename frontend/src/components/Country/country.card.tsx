import { Country } from "@/graphql/generated/schema";
import Link from "next/link";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`country/${country.code}`} className="flex flex-col items-center border border-green-500">
      <h1>{country.name}</h1>
      <p>{country.emoji}</p>
    </Link>
  );
}
