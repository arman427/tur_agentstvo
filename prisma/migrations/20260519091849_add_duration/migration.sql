/*
  Warnings:

  - Made the column `duration` on table `tours` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tours" ALTER COLUMN "duration" SET NOT NULL;
