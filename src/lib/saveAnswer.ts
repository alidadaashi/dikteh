export const saveAnswer = (answer: number) => {
  const oldAnswers: string | null = localStorage.getItem('answers');
  let answers: number[];
  if (!oldAnswers) {
    answers = [];
  } else {
    answers = JSON.parse(oldAnswers);
  }
  answers.push(answer);
  localStorage.setItem('answers', JSON.stringify(answers));
};
