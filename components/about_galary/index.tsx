import Image from "next/image";
export default function AboutGalary() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      {/* Heading Section */}
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900]">GALARY</span>
      </h4>
      <h2 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
        What we make
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-14 py-7">
        <div className="flex flex-row lg:flex-col gap-3 md:gap-14 ">
          <div className="relative aspect-square w-full">
            <Image
              src="https://smolnarod.ru/wp-content/uploads/2019/04/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B917.png"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="https://static.wixstatic.com/media/dec73f_1b77dbaacc5e45c5af1bbca2fcc4442f~mv2.jpg/v1/fit/w_1000,h_1000,al_c,q_80/file.png"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative aspect-square lg:col-start-2 lg:col-end-4">
          <Image
            src="https://cdn.thespaces.com/wp-content/uploads/2018/03/Le-House-designs-secret-garden-cafe-An%E2%80%99garden-Cafe%CC%81-in-Hanoi-13.jpg"
            alt="Restaurant"
            fill
          />
        </div>
        <div className="flex flex-row lg:flex-col gap-3 md:gap-14 ">
          <div className="relative aspect-square w-full">
            <Image
              src="https://remykitchenbakery.ru/storage/app/uploads/public/640/0d7/d4f/thumb_245_960_0_0_0_auto.png"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="https://avatars.mds.yandex.net/i?id=a22a4a9a6d79043c3124c9fa1a72022d60824cf0-13235383-images-thumbs&n=13"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
