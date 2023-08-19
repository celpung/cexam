import React, { useState } from "react";
import Image from "next/image";
import { OutLinedPrimaryButton, PrimaryButtons } from "@/components/buttons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");
  const hurufDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis vero nesciunt incidunt amet assumenda.";
  const angkaDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis vero nesciunt incidunt amet assumenda.";
  const simbolDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis vero nesciunt incidunt amet assumenda.";

  const handleNavLinkClick = (link: any) => {
    setActiveLink(link);
  };

  function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  }

  return (
    <div id="home" className="home h-screen flex justify-center">
      <div className="container h-screen">
        <div className="h-16 flex justify-end items-center p-4">
          {/* <Image
            src="/images/Logo.png"
            alt="My Image Alt Text"
            width={300}
            height={200}
            style={{ height: "50%", width: "10%" }}
          /> */}

          {/* <nav className="p-4">
            <ul className="flex justify-center space-x-6">
              <li
                className={`nav-item cursor-pointer ${activeLink === "home" ? "nav-active" : ""}`}
                onClick={() => {
                  handleNavLinkClick("home");
                  router.push("/");
                }}
              >
                Home
              </li>
              <li
                className={`nav-item cursor-pointer ${activeLink === "about" ? "nav-active" : ""}`}
                onClick={() => {
                  handleNavLinkClick("about");
                  router.push("/about");
                }}
              >
                About
              </li>
              <li
                className={`nav-item cursor-pointer ${activeLink === "company" ? "nav-active" : ""}`}
                onClick={() => {
                  handleNavLinkClick("company");
                  router.push("/company");
                }}
              >
                Company
              </li>
            </ul>
          </nav> */}

          <div className="flex justify-between gap-2 items-center">
            <PrimaryButtons title="Sign In" action={() => {}} />
            <OutLinedPrimaryButton title="Register" action={() => {}} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 p-4">
            <p className="landing-title landing-title text-center md:text-left mb-3">
              Raih impian yang nyata bersama kami
            </p>
            <p className="landing-desc text-center md:text-left mb-3">
              Hadir sebagai solusi ujian online calon polisi dengan antarmuka elegan dan fungsionalitas canggih,
              menciptakan pengalaman ujian yang lebih interaktif dan adil.{" "}
            </p>

            <div className="text-center my-5">
              <p className="small-text font-bold text-gray-400 letter-space-2 mb-2">Layanan Kami</p>
              <p className="landing-sub letter-space-2">Pilih Simulasi Ujian</p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="landing-box mb-4 md:mb-0 w-full md:w-1/3 text-center p-4">
                <div className="flex justify-center items-center mb-2">
                  <Image
                    src="/images/alphabet.png"
                    alt="My Image Alt Text"
                    width={300}
                    height={200}
                    style={{ height: "20%", width: "20%" }}
                  />
                </div>

                <h3 className="mb-2">Huruf Hilang</h3>
                <p className="mb-2">{truncateText(hurufDescription, 100)}</p>
                <div className="grid grid-cols-2 gap-4">
                  <PrimaryButtons title="Mulai" action={() => router.push("/exams/kecermatan/huruf-hilang")} />
                  <OutLinedPrimaryButton title="Pelajari" action={() => router.push("/exams/kecermatan/huruf-hilang")} />
                </div>
              </div>
              <div className="landing-box mb-4 md:mb-0 md:mx-2 w-full md:w-1/3 text-center p-4">
                <div className="flex justify-center items-center mb-2">
                  <Image
                    src="/images/math.png"
                    alt="My Image Alt Text"
                    width={300}
                    height={200}
                    style={{ height: "20%", width: "20%" }}
                  />
                </div>

                <h3 className="mb-2">Angka Hilang</h3>
                <p className="mb-2">{truncateText(angkaDescription, 100)}</p>
                <div className="grid grid-cols-2 gap-4">
                  <PrimaryButtons title="Mulai" action={() => router.push("/exams/kecermatan/angka-hilang")} />
                  <OutLinedPrimaryButton title="Pelajari" action={() => router.push("/exams/kecermatan/angka-hilang")} />
                </div>
              </div>

              <div className="landing-box mb-4 md:mb-0 w-full md:w-1/3 text-center p-4">
                <div className="flex justify-center items-center mb-2">
                  <Image
                    src="/images/symbol.png"
                    alt="My Image Alt Text"
                    width={300}
                    height={200}
                    style={{ height: "20%", width: "20%" }}
                  />
                </div>
                <h3 className="mb-2">Simbol Hilang</h3>
                <p className="mb-2">{truncateText(simbolDescription, 100)}</p>
                <div className="grid grid-cols-2 gap-4">
                  <PrimaryButtons title="Mulai" action={() => router.push("/exams/kecermatan/simbol-hilang")} />
                  <OutLinedPrimaryButton title="Pelajari" action={() => router.push("/exams/kecermatan/simbol-hilang")} />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex md:col-span-1 p-4 justify-center md:justify-end">
            <Image
              src="/images/landing-img.png"
              alt="My Image Alt Text"
              width={300}
              height={200}
              className="landing-img w-full h-full md:w-auto md:h-auto"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
