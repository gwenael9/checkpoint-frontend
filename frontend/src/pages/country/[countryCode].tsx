import Layout from "@/components/Layout/Layout";
import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CountryName() {
  const router = useRouter();
  const { countryCode } = router.query;
  console.log(router.query);

  const { data } = useCountryQuery({
    variables: {
      code: countryCode as string,
    },
    skip: typeof countryCode === "undefined",
  });

  const country = data?.country;

  return (
    <Layout title="test">
      <div className="flex justify-center mt-2">
        <div className="flex items-center flex-col">
          {country?.emoji}
          <h2>
            Name : {country?.name} ({country?.code})
          </h2>
          {country?.continent && <p>Continent : {country?.continent?.name}</p>}
        </div>
      </div>
    </Layout>
  );
}
