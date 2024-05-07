/*
  Warnings:

  - Added the required column `location` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `bathroom` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
DROP COLUMN "bathroom",
ADD COLUMN     "bathroom" BIGINT NOT NULL;
