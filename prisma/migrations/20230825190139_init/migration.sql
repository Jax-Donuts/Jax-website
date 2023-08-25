-- CreateTable
CREATE TABLE "Donut" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "type" TEXT NOT NULL,
    "families" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "Donut_pkey" PRIMARY KEY ("id")
);
