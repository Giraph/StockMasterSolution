//export async function loader(){}
import { Form, useActionData } from "@remix-run/react"
import type { ActionFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import React from "react"

export default function creation() {
    const data = useActionData<typeof action>()
    return (
        <div className="flex justify-center content-center h-screen">
            <div className=" mt-8 w-auto h-1/2 overflow-hidden shadow-xl p-10 rounded-3xl border border-black">
                <h1 className="justify-center text-2xl text-center pb-6">
                    Création de stock
                </h1>
                <Form method="post">
                    <label className="block">
                        <span className="text-gray-700">Nom</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="nom de l'entreprise"
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Montant</span>
                        <input
                            min="0"
                            step="0.01"
                            type="number"
                            name="price"
                            placeholder="valeur de l'action"
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Quantité</span>
                        <input
                            min="0"
                            type="number"
                            name="quantity"
                            placeholder="quantité disponible"
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
                        />
                    </label>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className=" m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Valider
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

//ici : enregistrer les données du formulaire et renvoyer à l'accueil ou l'inventaire
// export async function action(requete) {
//     const formData = await requete.formData()
// }

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const name = formData.get("name")
    const price = formData.get("price")
    const quantity = formData.get("quantity")
    
    if (name !== null && price !== null && quantity !== null) {
        return redirect("/") // valid login so redirect to home page
    }
}
