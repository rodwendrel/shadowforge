/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_world` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "user_world" DROP CONSTRAINT "user_world_userId_fkey";

-- DropForeignKey
ALTER TABLE "world" DROP CONSTRAINT "world_creatorId_fkey";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AlterTable
ALTER TABLE "user_world" DROP CONSTRAINT "user_world_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_world_pkey" PRIMARY KEY ("userId", "worldId");

-- AlterTable
ALTER TABLE "world" ALTER COLUMN "creatorId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "world" ADD CONSTRAINT "world_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_world" ADD CONSTRAINT "user_world_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
