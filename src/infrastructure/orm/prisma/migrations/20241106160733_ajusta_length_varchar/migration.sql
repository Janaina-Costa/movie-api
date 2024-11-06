/*
  Warnings:

  - You are about to alter the column `userOpinion` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(360)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Movie] ALTER COLUMN [userOpinion] VARCHAR(360) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
