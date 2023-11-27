/*
  Warnings:

  - You are about to drop the column `mobile` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `customers` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customers` DROP COLUMN `mobile`,
    DROP COLUMN `name`,
    ADD COLUMN `customerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NOT NULL;
