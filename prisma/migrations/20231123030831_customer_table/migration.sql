/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `customers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
