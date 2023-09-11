import '../index.css';

export default function Footer() {
  return (
    <footer className="bottom-0 w-full bg-white lg:text-left my-0">
      <div className="p-4 text-center text-neutral-700">
        {new Date().getFullYear()}
        <a className="text-neutral-800" href="/">
          {' '}
          CovoituReact
        </a>
      </div>
    </footer>
  );
}
