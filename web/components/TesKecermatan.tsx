/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TesKecermatanProps {
  character: string;
  onResult: (result: number) => void;
}

export default function TesKecermatan({ character, onResult }: TesKecermatanProps) {
  const delayTime = 5000;
  const [maxKolom, setMaxKolom] = useState<number>(30); // total kolom
  const [kolom, setKolom] = useState<number>(1);
  const [testDuration, setTestDuration] = useState<number>(60); // Durasi setiap tes dalam satu kolom (detik)
  const [seconds, setSeconds] = useState<number>(testDuration);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [questionLimit, setQuestionLimit] = useState<number>(30); // total pertanya dalam satu kolom
  const [answeredCount, setAnsweredCount] = useState<number>(1);
  const [point, setPoint] = useState<number>(0);
  const [gridValues, setGridValues] = useState<string[]>([]);
  const [missingValue, setMissingValue] = useState<string | undefined>();
  const [shuffledWord, setShuffledWord] = useState<string>("");
  const [delayInProgress, setDelayInProgress] = useState<boolean>(false);

  // generate random char
  const generateRandomTestType = () => {
    const testType =
      character == "huruf"
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : character == "angka"
        ? "1234567890"
        : character == "simbol"
        ? "αβγδεζηθικλμνξοπρστυφχψω"
        : "";
    let randomChars: string[] = [];

    while (randomChars.length < 5) {
      const randomIndex = Math.floor(Math.random() * testType.length);
      const randomChar = testType.charAt(randomIndex);
      if (!randomChars.includes(randomChar)) {
        randomChars.push(randomChar);
      }
    }

    setGridValues(randomChars);
    setSeconds(testDuration)
    setDelayInProgress(false);
  };

  useEffect(() => {
    setDelayInProgress(true);
    setTimeout(() => {
      generateRandomTestType();

      setDelayInProgress(false);
    }, delayTime);
  }, []);

  const refreshContent = () => {
    setDelayInProgress(true);
    setTimeout(() => {
      setSeconds(testDuration);
      generateRandomTestType();
      setKolom(kolom + 1);
      setAnsweredCount(1);
      setRefreshKey(refreshKey + 1);

      setDelayInProgress(false);
    }, delayTime);
  };

  // counting down
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (kolom === maxKolom) {
          onResult(point);
          clearInterval(interval);
        } else if (!delayInProgress) {
          refreshContent();
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, kolom, maxKolom, point, onResult, testDuration, generateRandomTestType, refreshKey, delayInProgress]);

  // set missing char
  useEffect(() => {
    if (gridValues.length > 0) {
      const randomIndex = Math.floor(Math.random() * gridValues.length);
      setMissingValue(gridValues[randomIndex]);
    }
  }, [gridValues]);

  // shuffle word first time
  useEffect(() => {
    setShuffledWord(shuffleWord(getFilteredValues()));
  }, [gridValues, missingValue]);

  function setMissingVal() {
    const randomIndex = Math.floor(Math.random() * gridValues.length);
    setMissingValue(gridValues[randomIndex]);
  }

  // get filtered value (4 char)
  const getFilteredValues = () => {
    return gridValues.filter((value) => value !== missingValue).join(" ");
  };

  // shuffle the 4 char
  function shuffleWord(word: string) {
    const array = word.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }

  // handle click
  const handleCellClick = (value: string) => {
    if (seconds === 0) {
      return;
    }
    if (answeredCount === questionLimit) {
      refreshContent();
      return;
    }

    if (value === missingValue) {
      setPoint(point + 1);
    }
    setAnsweredCount(answeredCount + 1);
    setMissingVal();
    // generateRandomTestType();
  };

  // circular timer countodwn
  const UrgeWithPleasureComponent = (duration: number, size: number) => (
    <CountdownCircleTimer
      key={refreshKey}
      size={size}
      isPlaying
      duration={duration}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );

  const testView = () => {
    return (
      <div className="flex justify-center h-screen items-center text-center ">
        <div className="container p-5">
          <div className="text-start mb-20 flex justify-between items-center">
            <h1 className="titling">
              Tes Kecermatan{" "}
              {character == "huruf" ? "Huruf" : character == "angka" ? "Angka" : character == "simbol" ? "Simbol" : ""}{" "}
              Hilang
            </h1>
            {UrgeWithPleasureComponent(testDuration, 80)}
          </div>
          <div className="grid grid-cols-2 mb-5">
            <div className="text-start">
              <h6>Nama : Edo Raditya</h6>
              <h6>ID Peserta : 5HF84G739</h6>
            </div>
            <div className="text-end flex justify-end items-center">
              <h5>
                Soal ke-{answeredCount} dari {questionLimit}
              </h5>
            </div>
          </div>

          <div className="border border-black border-t-2 border-s-2 border-e-2">
            <h1>
              Kolom : {kolom} / {maxKolom}
            </h1>
          </div>

          <div className="grid grid-cols-5 border border-black border-t-0 border-s-1 border-e-1">
            {gridValues.map((value, index) => (
              <div key={index} className="text-center test-font border-box border border-black">
                {value}
              </div>
            ))}

            {gridValues.map((_, index) => (
              <div key={index} className="border border-black p-4 text-center font-bold text-lg">
                {String.fromCharCode(65 + index)}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-10 w-full md:w-1/2">
              <div className="border border-black border-t-2 border-b-0 border-s-2 border-e-2">
                <h1 className="titling">{shuffledWord.replace(/\s/g, "").split("").join("  ")}</h1>
              </div>

              <div className="grid grid-cols-5 border border-black">
                {gridValues.map((_, index) => (
                  <div
                    key={index}
                    className="border border-black p-4 text-center font-bold text-lg cursor-pointer hover:bg-blue-500 hover:text-white"
                    onClick={() => handleCellClick(gridValues[index])}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* enable code blow for cheat code  */}
          {/* <div className="mt-10">
            <p>Missing value is : {missingValue}</p>
            <p>poin: {point}</p>
          </div> */}
        </div>
      </div>
    );
  };

  const loadingView = () => {
    return (
      <div className="flex justify-center h-screen items-center text-center">
        <div className="container p-5">
          <h3>Persiapan...</h3>
          <div className="flex justify-center my-10">{UrgeWithPleasureComponent(delayTime / 1000, 120)}</div>
          <h3>Selamat mengerjakan.</h3>
        </div>
      </div>
    );
  };

  return <div className="h-screen">{delayInProgress ? loadingView() : testView()}</div>;
}
