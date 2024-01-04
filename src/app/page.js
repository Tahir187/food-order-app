import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      {/* About us */}
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Thank you once again for considering my application. I am eager to contribute to the success of Sapphire Consulting Services and look forward to the possibility of joining your team.</p>
          <p>Thank you once again for considering my application. I am eager to contribute to the success of Sapphire Consulting Services and look forward to the possibility of joining your team.</p>
          <p>Thank you once again for considering my application. I am eager to contribute to the success of Sapphire Consulting Services.</p>
        </div>
      </section>

      {/* Contact us */}
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate' }
          mainHeader={'Contact us'}
        />
        <div className="mt-8 flex flex-col gap-4">
          <a className="text-4xl underline text-gray-500" href="tel:+921234567891">+921234567891</a>
          <a className="text-4xl underline text-gray-500" href="email:foodbizz@gmail.com">foodbizz@gmail.com</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt16">
          &copy; 2024 All rights reserved to FOOD BIZZ
      </footer>
    </>
  );
}
