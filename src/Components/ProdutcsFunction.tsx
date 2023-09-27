export const PostProduct = () => {
  const createPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const departInput = event.target.depart;
    const l100Input = event.target.l100;
    const carInput = event.target.car;
    const heureInput = event.target.heure;
    const distanceInput = event.target.distance;
    const placeInput = event.target.place;
    const name = localStorage.getItem("name");

    console.log(heureInput);

    const depart: string = departInput.value;
    const l100: number = l100Input.value;
    const heure: number = heureInput.value;
    const distance: number = distanceInput.value;
    const place: number = placeInput.value;
    const car: string = carInput.value;

    console.log(heureInput);

    const formResult = {
      name: name,
      depart: depart,
      car: car,
      heure: heure,
      l100: l100,
      distance: distance,
      place: place,
    };

    fetch("http://localhost:3003/products/createproduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formResult),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          createPost(e);
        }}
      >
        <div className="space-y-4">
          <input
            name="depart"
            placeholder="D'où venez vous ?"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="number"
            name="l100"
            placeholder="Consommation de la voiture ?"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="name"
            name="car"
            placeholder="Modèle de la voiture"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="time"
            name="heure"
            placeholder="Heure de départ le matin"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="number"
            name="distance"
            placeholder="Distance en metre du trajet"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="number"
            name="place"
            placeholder="Nombre de place"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl"
          >
            Poster l'annonce
          </button>
        </div>
      </form>
    </>
  );
};
