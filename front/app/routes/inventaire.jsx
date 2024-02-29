import CarteStock from "../components/carteStock"
import axios from "axios"
import { useLoaderData } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { Form } from "@remix-run/react"

export async function loader({ request  }) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const search = searchParams.get('search');
    if (!search) {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/articles/"
            )
            return response.data
        } catch (error) {
            return {
                error: error.message,
            }
        }
    } else {
        try {
            const response = await axios({
                method: 'get',
                url: "http://localhost:8000/api/articles/search/",
                data: {
                    query: search,
                }
            })

            return response.data
        } catch (error) {
            return {
                error: error.message,
            }
        }
    }
}

export default function inventaire() {
    const data = useLoaderData()
    
    if (data.error) {
        return <div>Une erreur s'est produite : {data.error}</div>;
    }

    // Vérifier si data est un tableau
    if (!Array.isArray(data)) {
        return <div>Données invalides.</div>;
    }

    return (
        <div className="flex flex-col h-full ">
            <Form method="post">
                <div className=" flex justify-center flex-row items-center">
                    <input
                        type="text"
                        placeholder="Rechercher un stock"
                        name="search"
                        className="border border-black rounded-lg p-2 my-10  w-1/3"
                    />
                    <button
                        type="submit"
                        className=" m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Rechercher
                    </button>
                </div>
            </Form>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                {data.map((stock) => (
                    <CarteStock
                        key={stock._id}
                        nom={stock.designation}
                        quantite={stock.quantite}
                        valeur={stock.prix_unitaire}
                    />
                ))}
            </div>
        </div>
    )
}

export async function action({ request }) {
    console.log("test")
    const formData = await request.formData()
    const search = formData.get("search")
    return redirect(`/inventaire${search ? `?search=${search}` : ''}`);
}
