import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Footer from "./components/footer";
import { NextSeo } from "next-seo";
import { BannerHelper } from "../server/helpers/banner";
import { CategoryHelper } from "../server/helpers/category";
import { ProductHelper } from "../server/helpers/product";
import { AboutHelper } from "../server/helpers/about";

import { SliderBanner } from "../components/Slider/banner";
import { SliderCategory } from "../components/Slider/category";
import { useRouter } from "next/router";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Pronta Entrega", href: "/produtos" },
    { name: "Consultoria", href: "/" },
    { name: "Contato", href: "/contato" },
  ],
};
const categories = [
  {
    name: "Poltronas",
    href: "#",
    imageSrc: "/poltronas.jpg",
  },
  {
    name: "Cadeiras",
    href: "#",
    imageSrc: "/cadeiras.jpg",
  },
  {
    name: "Mesa de Jantar",
    href: "#",
    imageSrc: "/mesa.jpg",
  },
  {
    name: "Aparadores",
    href: "#",
    imageSrc: "/aparador.jpg",
  },
  { name: "Sofás", href: "#", imageSrc: "/sofa-2.jpg" },
];
const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    price: "R$ 100",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$ 100",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
    price: "R$ 100",
  },
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    price: "R$ 100",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$ 100",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
    price: "R$ 100",
  },
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    price: "R$ 100",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
    price: "R$ 100",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props: any) {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDetails, setBannerDetails] = useState([{}] as [
    {
      idBanner: string;
      imagem: string;
      urli: string;
    }
  ]);
  const [categoryDetails, setCategoryDetails] = useState([{}] as [
    {
      idCategoria: string;
      imagem: string;
      nome: string;
    }
  ]);

  const [productMain, setProductMain] = useState([{}] as [
    {
      idProduto: string;
      foto: [{ urli: string }];
      nome: string;
      detalhe: string;
      valor: string;
      href: string;
    }
  ]);

  const [text, setText] = useState([{}] as [
    {
      idTexto: string;
      texto: string;
      idTipoTexto: string;
      nomeTipoTexto: string;
    }
  ]);

  useEffect(() => {
    setBannerDetails(JSON.parse(props.bannerDetails));
    setCategoryDetails(JSON.parse(props.category));
    setProductMain(JSON.parse(props.productMain));
    setText(JSON.parse(props.text));
  }, [props]);

  function FromProductPage(id: string) {
    router.push({
      pathname: "/produtos/" + id,
    });
  }

  return (
    <>
      <NextSeo
        title="Black Home Design - Home"
        description="Seja bem-vindo ao site da melhor empresa de Design de Interiores de Curitiba e projetos customizado para decoração de sua casa!"
      />
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
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
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
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
            <SliderBanner bannerDetails={bannerDetails} />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />

          {/* Navigation */}
          <header className="relative z-10">
            <nav aria-label="Top">
              {/* Secondary navigation */}
              <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div>
                    <div className="h-20 lg:h-40 flex items-center justify-between">
                      {/* Logo (lg+) */}
                      <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center lg:my-10">
                        <div>
                          <span className="sr-only">Black Home Design</span>
                          <div className="lg:flex-1 lg:flex lg:justify-center">
                            <img
                              className="h-24 w-auto"
                              src="/logo.svg"
                              alt=""
                            />
                          </div>
                          <div className="hidden h-full lg:flex">
                            {/* Flyout menus */}
                            <Popover.Group className="px-4 bottom-0 inset-x-0">
                              <div className="h-full flex justify-center space-x-8">
                                {navigation.pages.map((page) => (
                                  <a
                                    key={page.name}
                                    href={page.href}
                                    className="flex items-center text-lg font-medium text-white"
                                  >
                                    {page.name}
                                  </a>
                                ))}
                              </div>
                            </Popover.Group>
                          </div>
                        </div>
                      </div>

                      {/* Mobile menu and search (lg-) */}
                      <div className="flex-1 flex items-center lg:hidden">
                        <button
                          type="button"
                          className="-ml-2 p-2 text-white"
                          onClick={() => setMobileMenuOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Logo (lg-) */}
                      <div className="lg:hidden">
                        <span className="sr-only">Black Home Design</span>
                        <img src="/logo.svg" alt="" className="h-8 w-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0"></div>
        </div>

        <main>
          {/* Category section */}
          <section
            aria-labelledby="category-heading"
            className="pt-12 sm:pt-12 xl:max-w-7xl xl:mx-auto xl:px-8"
          >
            <div className="px-4 sm:px-6 lg:px-8 xl:px-0 flex justify-center">
              <h2
                id="category-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900"
              >
                Categorias
              </h2>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                  <SliderCategory categoryDetails={categoryDetails} />
                </div>
              </div>
            </div>
          </section>

          {/* Collection section */}
          <section
            aria-labelledby="collection-heading"
            className="max-w-xl mx-auto pt-12 px-4 sm:pt-12 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <h2
              id="collection-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 flex justify-center"
            >
              Produtos em Estoque
            </h2>
            <p className="mt-4 text-base text-gray-500 text-center">
              Acesse com exclusividade nossos últimos lançamentos de nossos
              produtos. Aproveite!
            </p>

            <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
              {productMain.length > 0 &&
                productMain.map((collection, idx) => (
                  <div key={collection.idProduto + idx} className="group block">
                    <div
                      aria-hidden="true"
                      className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                      onClick={() => {
                        FromProductPage(collection.idProduto);
                      }}
                    >
                      <img
                        src={`${collection.foto && collection.foto[0].urli}`}
                        alt={collection.nome}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                      {collection.nome}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {collection.detalhe}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-500">
                      R$: {collection.valor},00
                    </p>
                    <Link href={"#"}>
                      <a className="my-8 w-full block bg-gray-800 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-gray-500 sm:w-auto">
                        Detalhes do Produto
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          </section>

          {/* Featured section */}
          <section
            aria-labelledby="social-impact-heading"
            className="max-w-7xl mx-auto pt-12 px-4 sm:pt-12 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-6"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/sala.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-50 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                  <h2
                    id="social-impact-heading"
                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                  >
                    <span className="block sm:inline">Galeria em 3d</span>
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Visite a nossa galeria em 3d dos movéis criados por nós e
                    surpeenda-se!
                  </p>
                  <a
                    href="#"
                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Ver Galeria
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/consultoria.jpeg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-50 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                  <h2
                    id="social-impact-heading"
                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                  >
                    <span className="block sm:inline">
                      Faça uma consultoria!
                    </span>
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Precisa de um projeto especial ou algum móvel sobre
                    encomenda? Entre em contato conosco!
                  </p>
                  <a
                    href="#"
                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Entre em contato
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Featured section */}
          <section
            aria-labelledby="comfort-heading"
            className="max-w-7xl mx-auto py-6 px-4"
          >
            <div className="relative bg-white py-10">
              <h1 className="text-2xl">Sobre Nós</h1>
              <div dangerouslySetInnerHTML={{ __html: text[0].texto }}></div>
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
    </>
  );
}

export async function getServerSideProps() {
  const banner = await BannerHelper.getBanner();
  const category = await CategoryHelper.getCategory();
  const productMain = await ProductHelper.getProductMain();
  const text = await AboutHelper.getAbout();

  const Banner = JSON.stringify(banner);
  const Category = JSON.stringify(category);
  const ProductMain = JSON.stringify(productMain);
  const Text = JSON.stringify(
    text.filter((text: any) => text.nomeTipoTexto === "Sobre Nós")
  );

  return {
    props: {
      bannerDetails: Banner,
      category: Category,
      productMain: ProductMain,
      text: Text,
    },
  };
}
