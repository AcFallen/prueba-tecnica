/*
  Warnings:

  - You are about to alter the column `status` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;
