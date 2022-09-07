import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = {
  pages: [
    { name: "Nossa Empresa", href: "#" },
    { name: "Nossos Produtos", href: "#" },
    { name: "Fale Conosco", href: "#" },
  ],
};

const product = {
  name: "Zip Tote Basket",
  price: "R$220,00",
  rating: 3.9,
  href: "#",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use. The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
  imageAlt: "Back angled view with bag open and handles to the side.",
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Titulo do Produto X</h1>
          <p className="mt-4 text-xl text-white">Uma breve descrição de um produto X!</p>
        </div>
      </div>

      <main>
        {/* Category section */}

        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto">
          <div className="flex text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
            <div className="flex text-base text-left transform transition w-full md:inline-block md:px-4 md:my-8 md:align-middle">
              <div className="w-full relative flex items-center bg-gray-100 px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                      <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-3">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">{product.price}</p>

                      <div className="mt-6">
                        <h4 className="sr-only">Description</h4>

                        <p className="text-sm text-gray-700">{product.description}</p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-6">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-800"
                          >
                            Fazer uma encomenda
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}

        <section aria-labelledby="collection-heading" className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="collection-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            Produtos em destaque
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Veja os produtos mais vendidos em nossa loj. Entre em contato hoje mesmo e faça a sua encomenda!
          </p>
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {collections.map((collection) => (
              <div key={collection.name} className="group block">
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
        </section>

        {/* Featured section */}
        <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">Copyright &copy; 2021 Black Home Design.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
