import { db } from '@/lib/db';

import {
  questions_dabirestan,
  questions_ebtedaei,
  questions_rahnemaei,
} from './questions';
async function main() {
  let level = await db.level.upsert({
    where: { name: 'ابتدایی' },
    update: {},
    create: {
      name: 'ابتدایی',
      questions: {
        create: questions_ebtedaei.map((item, i) => ({
          optionA: item.optionA,
          optionB: item.optionB,
          trueOption: item.trueOption,
          order: item.order,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  level = await db.level.upsert({
    where: { name: 'راهنمایی' },
    update: {},
    create: {
      name: 'راهنمایی',
      questions: {
        create: questions_rahnemaei.map((item, i) => ({
          optionA: item.optionA,
          optionB: item.optionB,
          trueOption: item.trueOption,
          order: item.order,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  level = await db.level.upsert({
    where: { name: 'دبیرستان' },
    update: {},
    create: {
      name: 'دبیرستان',
      questions: {
        create: questions_dabirestan.map((item, i) => ({
          optionA: item.optionA,
          optionB: item.optionB,
          trueOption: item.trueOption,
          order: item.order,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  // console.log({ level });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
