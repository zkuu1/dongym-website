import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-base_purple py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img 
                className="h-7 w-auto" 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Website Logo" 
              />
              <p className="sr-only">Website Title</p>
            </a>
          </div>

          {/* Centered Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:items-center md:gap-5">
            <a 
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="/"
            >
              Home
            </a>
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Hit The Muscle
            </a>
            <a 
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Tentang Kami
            </a>
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Pricing
            </a>
          </div>

          {/* Auth buttons on the right */}
          <div className="flex items-center justify-end gap-3">
            <a 
              className="hidden items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-purple-200 sm:inline-flex"
              href="/register"
            >
              Sign in
            </a>
            <a 
              className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-base_purple shadow-sm transition-all duration-150 hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}