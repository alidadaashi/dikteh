import { db } from '@/lib/db';

async function main() {
  const level = await db.level.upsert({
    where: { name: 'ابتدایی' },
    update: {},
    create: {
      name: 'ابتدایی',
      questions: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Song ${i}`,
          optionA: 'ye panjere ba ye ghafas',
          optionB: 'ye panjere ba do ghafas',
          trueOption: 1,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  console.log({ level });
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
