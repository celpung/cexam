import { PrimaryButtons } from "@/components/buttons";
import React from "react";
import { useRouter } from "next/navigation";

interface TestResultProps {
  benar: number;
  salah: number;
  totalKolom: number;
  totalSoal: number;
}

export default function TestResult({ totalKolom, totalSoal, benar, salah }: TestResultProps) {
  const router = useRouter();
  const totalQuestion = totalKolom * totalSoal;
  const answered = benar + salah;
  const notAnswered = totalQuestion - answered;
  const skorBenar = (benar / totalQuestion) * 100;
  const nilai = Math.round((benar / totalQuestion) * 100);

  let numberClassName = "text-center";

  if (nilai < 10) {
    numberClassName += " text-red-500";
  } else if (nilai < 60) {
    numberClassName += " text-red-500";
  } else if (nilai < 75) {
    numberClassName += " text-orange-500";
  } else if (nilai < 90) {
    numberClassName += " text-green-500";
  } else {
    numberClassName += " text-blue-500";
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center h-screen items-center text-center">
        <div className="container">
          <h1>Poin Anda</h1>
          <p className={`${numberClassName} point-style my-10`}>{nilai}</p>

          <h5>Rangkuman Hasil Tes</h5>

          <div className="flex justify-center my-8">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-left border ps-4 pe-24 py-4">Deskripsi</th>
                  <th className="text-center border px-5">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left border ps-4">Total Soal</td>
                  <td className="text-center border">{totalQuestion}</td>
                </tr>
                <tr>
                  <td className="text-left border ps-4">Soal Dijawab</td>
                  <td className="text-center border">{answered}</td>
                </tr>
                <tr>
                  <td className="text-left border ps-4">Jawaban Benar</td>
                  <td className="text-center border">{benar}</td>
                </tr>
                <tr>
                  <td className="text-left border ps-4">Jawaban Salah</td>
                  <td className="text-center border">{salah}</td>
                </tr>
                <tr>
                  <td className="text-left border ps-4">Tidak Terjawab</td>
                  <td className="text-center border">{notAnswered}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <PrimaryButtons title="Kembali ke home" action={() => router.push("/")} />
          <div className="mb-5"></div>
        </div>
      </div>
    </div>
  );
}
