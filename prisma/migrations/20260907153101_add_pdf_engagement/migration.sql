-- CreateTable
CREATE TABLE "PdfEngagement" (
    "id" TEXT NOT NULL,
    "resourceSlug" TEXT NOT NULL,
    "resourceTitle" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "downloadCount" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PdfEngagement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PdfEngagement_resourceSlug_key" ON "PdfEngagement"("resourceSlug");

-- CreateIndex
CREATE INDEX "PdfEngagement_resourceSlug_idx" ON "PdfEngagement"("resourceSlug");
