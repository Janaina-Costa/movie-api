BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Movie] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [name] VARCHAR(120) NOT NULL,
    [image] NVARCHAR(1000) NOT NULL,
    [genre] NVARCHAR(1000) NOT NULL,
    [linkUrl] NVARCHAR(1000) NOT NULL,
    [watchedDate] DATETIME2 NOT NULL,
    [userOpinion] NVARCHAR(1000) NOT NULL,
    [review] NVARCHAR(1000) NOT NULL,
    [isFirstTimeWatching] BIT NOT NULL,
    [quantityViews] INT NOT NULL,
    CONSTRAINT [Movie_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Movie_name_key] UNIQUE NONCLUSTERED ([name])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
