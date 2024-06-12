export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-90 w-full mt-20">
      <div className="mx-auto w-full max-w-screen-xl bg-black">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-2 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Location
            </h2>
            <ul className="text-gray-500 dark:text-gray-100 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Jl. Raya Bojonegara KM. 7 Desa Bojonegara, Kecamatan
                  Bojonegara Kabupaten Serang, Provinsi Banten 42454
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Email
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  info@ap.co.id
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Telephone
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  +62 254-5750641
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Fax
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  +62 254-5750642
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between lg:justify-end">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="#">Renaldi</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
