/*
  Warnings:

  - You are about to drop the column `date` on the `tours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tours" DROP COLUMN "date",
ADD COLUMN     "duration" INTEGER;
