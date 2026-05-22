import { useState } from "react";
import { LandingScreen } from "./components/LandingScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ResultScreen } from "./components/ResultScreen";
import { TopBar } from "./components/TopBar";
import { questions } from "./data/questions";
import { getProfile, sumAnswers } from "./lib/scoring";

type Screen = "intro" | "quiz" | "result";

export default function App() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [answers, setAnswers] = useState<number[]>([]);

  const currentIndex = answers.length;

  const start = () => {
    setAnswers([]);
    setScreen("quiz");
  };

  const answer = (points: number) => {
    const next = [...answers, points];
    if (next.length === questions.length) {
      setAnswers(next);
      setScreen("result");
    } else {
      setAnswers(next);
    }
  };

  const back = () => {
    if (answers.length === 0) return;
    setAnswers(answers.slice(0, -1));
  };

  const restart = () => {
    setAnswers([]);
    setScreen("intro");
  };

  const renderScreen = () => {
    if (screen === "intro") {
      return <LandingScreen onStart={start} />;
    }
    if (screen === "result") {
      const total = sumAnswers(answers);
      return (
        <ResultScreen
          profile={getProfile(total)}
          total={total}
          onRestart={restart}
        />
      );
    }
    return (
      <QuestionScreen
        question={questions[currentIndex]}
        index={currentIndex}
        total={questions.length}
        onAnswer={answer}
        onBack={back}
        canGoBack={currentIndex > 0}
      />
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col">{renderScreen()}</div>
    </div>
  );
}
