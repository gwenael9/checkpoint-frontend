import CardCreateCountry from "@/components/Country/country.card.create";
import Layout from "@/components/Layout/Layout";

export default function Add() {
  return (
    <Layout title="Ajouter un pays">
      <div className="flex justify-center">
        <CardCreateCountry />
      </div>
    </Layout>
  );
}
