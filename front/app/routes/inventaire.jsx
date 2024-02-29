import CarteStock from "../components/carteStock"
import axios from "axios"
import { useLoaderData } from "@remix-run/react"
import { LoaderFunction } from "@remix-run/node"

export async function loader() {
    try {
        const response = axios.get("http://localhost:8000/api/articles/search")
        console.log(response)
        return response.data
    } catch (error) {
        console.error(
            "Une erreur s'est produite lors de la récupération des données de l'API :",
            error
        )
        return {
            error: "Une erreur s'est produite lors de la récupération des données de l'API.",
        }
    }
}

export default function inventaire() {
    const data = useLoaderData()
    console.log("test", data)
    return (
        <div className="flex flex-col h-full ">
            <div className=" flex justify-center flex-row items-center">
                <input
                    type="text"
                    placeholder="Rechercher un stock"
                    className="border border-black rounded-lg p-2 my-10  w-1/3"
                />
                <div
                    className=" absolute left-[64%] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                />
            </div>
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
