const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-white p-8  shadow-2xl rounded-lg">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <div className="flex">
            <img
              src="https://i.ibb.co/tKVSCr8/Logo.png"
              alt="logo-ct"
              className=""
            />
          </div>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
            <li>
              <a
                href="#"
                className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/donation"
                className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Donation
              </a>
            </li>
            <li>
              <a
                href="/statistics"
                className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-primary focus:text-primary"
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-primary focus:text-primary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="block text-center font-bold text-base leading-relaxed text-blue-gray-900 antialiased">
          Support a cause, make a difference, give generously, inspire change,
          donate today.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
