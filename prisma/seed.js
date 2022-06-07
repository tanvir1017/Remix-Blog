const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "JavaScript Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing js",
    },
    {
      title: "React.js Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing js",
    },
    {
      title: "Next.js Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing js",
    },
    {
      title: "Remix Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing js",
    },
    {
      title: "JavaScript Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing js",
    },
  ];
}
