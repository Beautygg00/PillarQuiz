import { profiles, type Profile } from "../data/profiles";

export function getProfile(total: number): Profile {
  const match = profiles.find(
    (p) => total >= p.range[0] && total <= p.range[1],
  );
  return match ?? profiles[0];
}

export function sumAnswers(answers: number[]): number {
  return answers.reduce((a, b) => a + b, 0);
}
