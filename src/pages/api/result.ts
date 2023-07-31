import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/lib/db';

import { question } from '@/types/question';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const answers = JSON.parse(req.body);
  const questions: question[] = await db.question.findMany({
    // include: {
    //   level: true,
    // },
    select: {
      trueOption: true,
      optionA: true,
      optionB: true,
      order: true,
      level: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      order: 'asc',
    },
  });
  const score: any = {};
  let grade = 20;
  questions.forEach((question, i) => {
    // create a new level object if it doesn't exist
    if (!score[question.level.name]) {
      score[question.level.name] = {
        correct: 0,
        incorrect: 0,
        level: question.level.name,
      };
    }
    if (question.trueOption !== answers[i]) {
      score[question.level.name].incorrect++;
      grade--;
    } else {
      score[question.level.name].correct++;
    }
  });
  res.status(200).json({ data: { score, grade } });
}
