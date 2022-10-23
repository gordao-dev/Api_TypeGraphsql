/*
  Warnings:

  - You are about to drop the `CriarUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InscreverNoPedal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarcandoPedal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CriarUsuario";

-- DropTable
DROP TABLE "InscreverNoPedal";

-- DropTable
DROP TABLE "MarcandoPedal";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordConfirmation" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_information" TEXT,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER,
    "created_user_id" INTEGER NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "ride_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "subscription_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("ride_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_created_user_id_fkey" FOREIGN KEY ("created_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_ride_id_fkey" FOREIGN KEY ("ride_id") REFERENCES "Ride"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
