function Footer() {
  return (
    <footer className="bg-blue-500">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white">
        <li className="font-bold text-inverse-soft">
          Created by{" "}
          <a href="https://github.com/tatimoreira" target="_blank" className="font-bold text-inverse-soft">
            Tatiana Moreira
          </a>
        </li>

        <li>
          <a
            href="https://github.com/tatimoreira"
            target="_blank"
            className="font-bold text-inverse-soft"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
