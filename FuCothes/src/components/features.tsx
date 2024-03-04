import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    // <div className="w-full h-screen bg-inherit">
    //   <section className="w-full h-full">
        
    //   </section>
    // </div>
    <div className="w-full h-full bg-inherit">
      <div className="w-full px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-32">
          <header className="text-center flex flex-col gap-6 mb-6">
            <h2 className="lg:text-[4vmax] font-normal sm:text-3xl font-space_grotesk text-white">
              Hottest Collections
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500 font-questrial">
            "Elevate your style with timeless elegance and modern sophistication. Discover ECE Store today!"
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <Link href="#" className="relative block group">
                <Image
                  src="/images/feature1.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-3xl bg-center object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Casual Trainers
                  </h3>

                  <span className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link href="#" className="relative block group bg-cover">
                <Image
                  src="/images/feature3.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className=" rounded-3xl bg-center object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Winter Jumpers
                  </h3>

                  <span className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link href="#" className="relative block group">
                <Image
                  src="/images/feature4.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-3xl h-full w-full object-cover transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Features;
