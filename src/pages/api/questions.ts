import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questions = await db.question.findMany({});
  res.status(200).json({ questions });
}
