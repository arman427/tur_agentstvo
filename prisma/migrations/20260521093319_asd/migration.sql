/*
  Warnings:

  - Made the column `description` on table `tours` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tours" ALTER COLUMN "description" SET NOT NULL;
