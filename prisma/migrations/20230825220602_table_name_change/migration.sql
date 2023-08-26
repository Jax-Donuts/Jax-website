/*
  Warnings:

  - You are about to drop the `Donut` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Donut";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "type" TEXT NOT NULL,
    "families" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
