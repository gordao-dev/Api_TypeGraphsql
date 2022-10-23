import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: "pedr",
      email: "gorid@gmail.com",
      password: "123456",
      passwordConfirmation: "123456",
    },
  })
  .then(() => {
    console.log("cadastrou");
  });

async function main() {
  const allUsers = await prisma.user.findMany();

  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
