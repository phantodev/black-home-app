import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Footer from "../components/footer";

const navigation = {
  pages: [
    { name: "Nossa Empresa", href: "#" },
    { name: "Nossos Produtos", href: "#" },
    { name: "Fale Conosco", href: "#" },
  ],
};

const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt: "Brown leather key ring with brass metal loops and rivets on wood table.",
    description: "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    price: "R$100,00",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt: "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description: "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$120,00",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt: "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description: "Be more productive than enterprise project managers with a single piece of paper.",
    price: "R$100,00",
  },
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt: "Brown leather key ring with brass metal loops and rivets on wood table.",
    description: "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    price: "R$100,00",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt: "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description: "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$120,00",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt: "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description: "Be more productive than enterprise project managers with a single piece of paper.",
    price: "R$100,00",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt: "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description: "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$120,00",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt: "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description: "Be more productive than enterprise project managers with a single piece of paper.",
    price: "R$100,00",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200"></div>
                <Tab.Panels as={Fragment}></Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <a href="#">
                        <span className="sr-only">Black Home Design</span>
                        <img src="/logo.svg" alt="" className="h-8 w-auto" />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="px-4 bottom-0 inset-x-0">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.pages.map((page) => (
                            <a key={page.name} href={page.href} className="flex items-center text-sm font-medium text-white">
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                      <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="" className="h-8 w-auto" />
                    </a>

                    <div className="flex-1 flex items-center justify-end">
                      <a href="#" className="hidden text-sm font-medium text-white lg:block">
                        Rua Padre Agostinho, 154 - Centro
                      </a>

                      <div className="flex items-center lg:ml-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative max-w-3xl mx-auto py-20 px-6 flex flex-col items-center text-center sm:py-20 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Nossos Produtos</h1>
          <p className="mt-4 text-xl text-white">Os melhores produtos você encontra aqui em nossa loja!</p>
        </div>
      </div>

      <main>
        {/* Collection section */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Categorias
              </label>
              <select
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm rounded-md"
                defaultValue="Todos"
              >
                <option>Todos</option>
                <option>Mesas</option>
                <option>Sofás</option>
                <option>Cadeiras</option>
                <option>Poltronas</option>
              </select>
            </div>
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Busca Rápida
              </label>
              <div className="mt-1 relative flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="shadow-sm focus:ring-gray-800 focus:border-gray-800 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                    Ctrl+K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="collection-heading" className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
            {collections.map((collection) => (
              <div key={collection.name} className="group block mb-20">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img src={collection.imageSrc} alt={collection.imageAlt} className="w-full h-full object-center object-cover" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                <p className="mt-2 text-2xl font-bold text-gray-500">{collection.price}</p>
                <Link href={collection.href}>
                  <a className="mt-8 w-full block bg-gray-800 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-gray-500 sm:w-auto">
                    Detalhes do Produto
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <nav className="border-t border-gray-200 px-4 mt-20 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <ArrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Anterior
              </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                1
              </a>
              {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
              <a
                href="#"
                className="border-gray-800 text-gray-800 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                3
              </a>
              <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
              </span>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                10
              </a>
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Próximo
                <ArrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </section>

        {/* Featured section */}
        <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img src="/sala-2.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Faça sua encomenda!
                </h2>
                <p className="mt-3 text-xl text-white">
                  Precisa de um projeto especial ou algum móvel sobre encomenda? Entre em contato conosco e faça um orçamento sem
                  compromisso com nossa equipe de atendimento!
                </p>
                <a
                  href="#"
                  className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Quero encomendar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <Footer />
      </footer>
    </div>
  );
}
