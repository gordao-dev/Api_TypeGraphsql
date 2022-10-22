/*
  Warnings:

  - You are about to drop the `Desafio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Desafio";

-- CreateTable
CREATE TABLE "MarcandoPedal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_information" TEXT NOT NULL,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER NOT NULL,

    CONSTRAINT "MarcandoPedal_pkey" PRIMARY KEY ("id")
);
