export default function Error() {
  return (
    <>
      {/* Ajoute une feuille de style Tailwind CSS depuis un CDN */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css"
      />

      {/* Conteneur principal du composant */}
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        {/* Div pour le contenu du message d'erreur */}
        <div className="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
          {/* Partie gauche avec le message d'erreur */}
          <div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
            <header className="mb-6">
              <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
                404.
              </h2>
              <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
                Sorry, we couldn't find this page.
              </h3>
            </header>

            {/* Paragraphe du message d'erreur */}
            <p className="max-w-sm mb-5 leading-5 md:leading-7">
              Don't worry, sometimes even we make mistakes. You can find plenty
              of other things on our homepage.
            </p>

            {/* Bouton de retour à la page d'accueil */}
            <a href="/">
              <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700">
                Back to Homepage
              </button>
            </a>
          </div>

          {/* Partie droite avec l'illustration */}
          <div className="max-w-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2395 1800"
              className="w-full max-w-sm"
              width="400"
            >
              {/* ... (Code SVG pour l'illustration) */}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
