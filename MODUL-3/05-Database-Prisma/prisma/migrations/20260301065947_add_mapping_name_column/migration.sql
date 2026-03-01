/*
  Warnings:

  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_branchId_fkey";

-- DropTable
DROP TABLE "Manager";

-- CreateTable
CREATE TABLE "managers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "branch_id" INTEGER NOT NULL,

    CONSTRAINT "managers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "managers_branch_id_key" ON "managers"("branch_id");

-- AddForeignKey
ALTER TABLE "managers" ADD CONSTRAINT "managers_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
