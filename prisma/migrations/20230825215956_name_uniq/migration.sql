/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Donut` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Donut_name_key" ON "Donut"("name");
