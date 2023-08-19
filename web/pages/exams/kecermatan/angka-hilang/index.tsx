import React, { useState } from "react";
import TesKecermatan from "@/components/kecermatan_exams/TesKecermatan";
import TestResult from "../result";

export default function AngkaHilang() {
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
        <TestResult
          totalKolom={result.maxKolom}
          totalSoal={result.questionLimit}
          benar={result.point}
          salah={result.wrongAnswer}
        />
      ) : (
        <TesKecermatan character="angka" onResult={handleTestResult} />
      )}
    </div>
  );
}
