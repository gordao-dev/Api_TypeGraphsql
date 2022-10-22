-- CreateTable
CREATE TABLE "Desafio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_information" TEXT NOT NULL,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER NOT NULL,

    CONSTRAINT "Desafio_pkey" PRIMARY KEY ("id")
);
