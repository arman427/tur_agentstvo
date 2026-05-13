/*
  Warnings:

  - You are about to drop the column `productItemId` on the `BasketItem` table. All the data in the column will be lost.
  - Added the required column `tourId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_productItemId_fkey";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "productItemId",
ADD COLUMN     "tourId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
