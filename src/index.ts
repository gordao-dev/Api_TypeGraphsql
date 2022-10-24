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

prisma.ride
  .create({
    data: {
      name: "gu",
      end_date_registration: "00-00-0000 00:00:00",
      start_date: "00-00-0000 00:00:00",
      start_date_registration: "00-00-0000 00:00:00",
      start_place: "casa",
      additional_information: "da",
      participants_limit: 1000,
    },
  })
  .then(() => {
    console.log("Pedal marcado");
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
