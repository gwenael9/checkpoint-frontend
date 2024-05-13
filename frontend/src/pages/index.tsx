import CountryCard from "@/components/Country/country.card";
import Layout from "@/components/Layout/Layout";
import { useCountriesQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data: countryData } = useCountriesQuery();

  return (
    <Layout title="Accueil">
      <div className="mt-2">
        <h1 className="font-bold text-lg">Tout nos pays</h1>
        <div className="grid gap-2 grid-cols-4 lg:grid-cols-6 mt-2">
          {countryData?.countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
