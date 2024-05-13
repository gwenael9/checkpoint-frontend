import { AddCountryMutation, AddCountryMutationVariables, InputMaybe, NewCountryInput, ObjectId, useContinentsQuery } from "@/graphql/generated/schema";
import { CREATE_COUNTRY } from "@/requetes/mutations/create.country.mutation";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function CardCreateCountry() {

  const { data: continentData } = useContinentsQuery();

  const router = useRouter();


  const [createCountry] = useMutation<
    AddCountryMutation,
    AddCountryMutationVariables
  >(CREATE_COUNTRY, {
    onCompleted: () => {
      router.push("/");
    },
    onError(error) {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as unknown as NewCountryInput;
    if (data.name && data.code && data.emoji) {
      const continentId: InputMaybe<ObjectId> = data.continent?.id
        ? { id: data.continent.id }
        : null;

      createCountry({
        variables: {
          data: {
            name: data.name,
            code: data.code,
            emoji: data.emoji,
            continent: continentId,
          },
        },
      });
    }
  };

  return (
    <div className="w-full max-w-sm p-6 rounded-lg shadow-md border">
      <h1 className="text-xl font-semibold mb-4">Ajouter un pays</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name" className="font-semibold">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="France"
              className="border border-gray-400 rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="code" className="font-semibold">
              Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="FR"
              className="border border-gray-400 rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="emoji" className="font-semibold">
            Emoji
          </label>
          <input
            type="text"
            name="emoji"
            id="emoji"
            placeholder="🇫🇷"
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="continent" className="font-semibold">
            Continent
          </label>
          <select
            name="continent"
            id="continent"
            className="border border-gray-400 rounded px-3 py-2"
          >
            <option value="">Choisir un continent</option>
            {continentData?.continents.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
}
