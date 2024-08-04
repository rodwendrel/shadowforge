-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "world" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "bannerURL" TEXT NOT NULL,
    "inviteCode" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "world_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_world" (
    "userId" INTEGER NOT NULL,
    "worldId" INTEGER NOT NULL,

    CONSTRAINT "user_world_pkey" PRIMARY KEY ("userId","worldId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_key" ON "user"("user");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "world_id_key" ON "world"("id");

-- CreateIndex
CREATE UNIQUE INDEX "world_inviteCode_key" ON "world"("inviteCode");

-- AddForeignKey
ALTER TABLE "world" ADD CONSTRAINT "world_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_world" ADD CONSTRAINT "user_world_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_world" ADD CONSTRAINT "user_world_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "world"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
