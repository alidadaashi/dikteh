import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const answers = JSON.parse(req.body);
  const questions = await db.question.findMany({
    // include: {
    //   level: true,
    // },
    select: {
      trueOption: true,
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
  let score = 20;
  questions.forEach((question, i) => {
    if (question.trueOption !== answers[i]) {
      score--;
    }
  });
  res.status(200).json({ data: { score } });
}
