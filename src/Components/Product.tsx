type Props = {
  product: Product;
};

// Définition du type Product
export type Product = {
  name: string;
  mail: string;
  destination: string;
  depart: string;
  car: string;
  heure: number;
  minute: number;
  essencePrice: number;
  l100: number;
  distance: number;
  place: number;
};

// Fonction pour calculer le prix du trajet en fonction des données du produit
export const calculatePrice = (product: Product) => {
  return (
    // Calcul du prix du trajet
    Math.round(
      (((product.l100 / 100000) * product.distance * 2) / (product.place + 1)) *
        100
    ) / 100
  );
};

// Composant ProductCard qui affiche les détails d'un produit
export const ProductCard = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{props.product.heure}</p>
          <p className="text-gray-600">
            {props.product.depart} &rarr; {props.product.destination}
          </p>
          <p className="text-gray-600">Place : {props.product.place}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">
            {calculatePrice(props.product)} € / trajet
          </p>
        </div>
      </div>
    </div>
  );
};
