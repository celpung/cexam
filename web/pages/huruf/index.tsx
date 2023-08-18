import React, { useState } from "react";
import TesKecermatan from "@/components/TesKecermatan";
import HasilTes from "../hasil";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const [testCompleted, setTestCompleted] = useState(false);
  const [result, setResult] = useState({
    point: 0,
    wrongAnswer: 0,
    maxKolom: 5,
    questionLimit: 3,
  });

  const handleTestResult = (point:number, wrongAnswer:number, maxKolom:number, questionLimit:number) => {
    setResult({ point, wrongAnswer, maxKolom, questionLimit });
    setTestCompleted(true);
  };

  return (
    <div>
      {testCompleted ? (
        <HasilTes
          totalKolom={result.maxKolom}
          totalSoal={result.questionLimit}
          benar={result.point}
          salah={result.wrongAnswer}
        />
      ) : (
        <TesKecermatan character="huruf" onResult={handleTestResult} />
      )}
    </div>
  );
}
