import Image from "next/image";
const CHEFS = [
  {
    id: 0,
    image:
      "https://s3.amazonaws.com/media-p.slid.es/uploads/379138/images/1753139/owner.png",
    name: "Avroko",
    profession: "Master Chef",
  },
  {
    id: 1,
    image: "https://pnggallery.com/wp-content/uploads/chef-02.png",
    name: "Evan Mattew",
    profession: "Master Chef",
  },
  {
    id: 2,
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/3417386/pub_6003384ef8011c4a01cda79f_6003385cfd62ee0689aa950d/scale_1200",
    name: "Diane Clarkson",
    profession: "Master Chef",
  },
  {
    id: 3,
    image: "https://templates.petpooja.com/template-6/img/chef/1.png",
    name: "Dan Rafalin",
    profession: "Assistant Chef",
  },
];

export default function AboutTeam() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      {/* Heading Section */}
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900]">TEAM</span>
      </h4>
      <h2 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
        Meet Our Professional Chefs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-7">
        {CHEFS.map((chef) => (
          <div key={chef.id} className="">
            <div className="bg-[#ff9900] relative aspect-square">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                objectFit="cover"
              />
            </div>
            <div className="px-6 py-4 text-center">
              <h3 className="text-lg tracking-wide font-semibold text-black">
                {chef.name}
              </h3>
              <p className="text-xs tracking-tight text-gray-500">
                {chef.profession}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
