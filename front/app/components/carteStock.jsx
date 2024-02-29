import styles from "../styles/styles.css"

export default function CarteStock(props) {
    return (
        <div className="max-w-sm  rounded-xl overflow-hidden shadow-lg p-10 m-10 border border-black min-w-max flex flex-col gap-3">
            <h1 className="font-bold text-xl mb-2 text-center">{props.nom}</h1>
            <p>Quantité : {props.quantite}</p>
            <p>Valeur : {props.valeur}€</p>
        </div>
    )
}

export const links = () => [{ rel: "stylesheet", href: styles }]
