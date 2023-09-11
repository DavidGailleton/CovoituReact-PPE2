export type Product = {
  name: string;
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

type Props = {
  product: Product;
};
export const calculatePrice = (product: Product) => {
  return (
    Math.round(
      (((product.l100 / 100) * product.distance * product.essencePrice) / (product.place + 1)) *
        100,
    ) / 100
  );
};

export const ProductCard = (props: Props) => {
  return (
    <>
      <div className="col-start-1 row-start-1">
        <p>
          {props.product.heure} : {props.product.minute} h
        </p>
        <p>
          {props.product.depart} &rarr; {props.product.destination}
        </p>
      </div>
      <div className="col-start-2 row-start-1 text-end">
        <p>{calculatePrice(props.product)} €</p>
      </div>
      <div className="col-start-1 row-start-2">
        <h3 className="text-start">{props.product.name}</h3>
      </div>
      <div className="col-start-2 row-start-2 text-end">
        <p>Place : {props.product.place}</p>
      </div>
    </>
  );
};
