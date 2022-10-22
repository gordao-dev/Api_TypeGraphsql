-- CreateTable
CREATE TABLE "InscreverNoPedal" (
    "ride_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "subscription_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InscreverNoPedal_pkey" PRIMARY KEY ("ride_id")
);
