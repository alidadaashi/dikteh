export type question = {
  optionA: string;
  optionB: string;
  trueOption?: number;
  level: level;
  levelOrder?: number;
  isCorrect?: boolean;
};
export type level = {
  name: string;
};
