import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface SliderBanner {
  categoryDetails: [
    {
      idCategoria: string;
      imagem: string;
      nome: string;
    }
  ];
}

export function SliderCategory({ categoryDetails }: SliderBanner) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {categoryDetails.map((category, idx) => {
        return (
          <SwiperSlide key={category.idCategoria + idx}>
            <a
              key={category.nome}
              href={"#"}
              className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75"
            >
              <span aria-hidden="true" className="absolute inset-0">
                <img
                  src={category.imagem}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
              />
              <span className="relative mt-auto text-center text-xl font-bold text-white">
                {category.nome}
              </span>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
