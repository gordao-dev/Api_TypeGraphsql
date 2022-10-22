-- CreateTable
CREATE TABLE "CriarUsuario" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordConfirmation" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CriarUsuario_email_key" ON "CriarUsuario"("email");
