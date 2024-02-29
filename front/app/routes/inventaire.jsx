import CarteStock from "../components/carteStock"

export default function inventaire() {
    const fakeData = [
        {
            id: 1,
            nom: "Stock 1",
            quantite: 10,
            valeur: 100,
        },
        {
            id: 2,
            nom: "Stock 2",
            quantite: 20,
            valeur: 200,
        },
        {
            id: 3,
            nom: "Stock 3",
            quantite: 30,
            valeur: 300,
        },
        {
            id: 4,
            nom: "Stock 4",
            quantite: 40,
            valeur: 400,
        },
        {
            id: 5,
            nom: "Stock 5",
            quantite: 50,
            valeur: 500,
        },
        {
            id: 6,
            nom: "Stock 6",
            quantite: 60,
            valeur: 600,
        },
        {
            id: 7,
            nom: "Stock 7",
            quantite: 70,
            valeur: 700,
        },
        {
            id: 8,
            nom: "Stock 8",
            quantite: 80,
            valeur: 800,
        },
        {
            id: 9,
            nom: "Stock 9",
            quantite: 90,
            valeur: 900,
        },
        {
            id: 10,
            nom: "Stock 10",
            quantite: 100,
            valeur: 1000,
        },
    ]

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
                {fakeData.map((stock) => (
                    <CarteStock
                        key={stock.id}
                        nom={stock.nom}
                        quantite={stock.quantite}
                        valeur={stock.valeur}
                    />
                ))}
            </div>
        </div>
    )
}
