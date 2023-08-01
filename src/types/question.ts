export type question = {
  optionA: string;
  optionB: string;
  trueOption?: number;
  level: level;
  levelOrder?: number;
  isCorrect?: boolean;
  correct?: number;
  incorrect?: number;
};
export type level = {
  name: string;
};
