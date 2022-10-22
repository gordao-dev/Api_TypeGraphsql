/*
  Warnings:

  - The primary key for the `MarcandoPedal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `MarcandoPedal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarcandoPedal" DROP CONSTRAINT "MarcandoPedal_pkey",
DROP COLUMN "id",
ADD COLUMN     "ride_id" SERIAL NOT NULL,
ALTER COLUMN "additional_information" DROP NOT NULL,
ALTER COLUMN "participants_limit" DROP NOT NULL,
ADD CONSTRAINT "MarcandoPedal_pkey" PRIMARY KEY ("ride_id");
