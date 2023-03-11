import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  await prisma.course.create({
    data: {
      title: "TypeScript",
      chapters: {
        create: [
          {
            title: "Chapter 1",
            slug: "1-chapter-1",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Introduction",
                  slug: "1-introduction",
                  number: 1,
                  downloadUrl: "https://test.com",
                  videoId: 104626862,
                  text: "In this lesson lorem ipsum",
                },
              ],
            },
          },
          {
            title: "Chapter 2",
            slug: "2-chapter-1",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Leson 2-1 More with Nuxt Links ",
                  slug: "2-second",
                  number: 1,
                  downloadUrl: "https://test.com",
                  videoId: 717782270,
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
              ],
            },
          },
        ],
      },
    },
  });
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
