/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- DropIndex
DROP INDEX "user_user_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "user";
