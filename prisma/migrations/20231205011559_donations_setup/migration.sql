-- CreateTable
CREATE TABLE "DonationRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "estimatedWeight" REAL NOT NULL,
    "photoUrl" TEXT,
    "pickupDate" DATETIME NOT NULL,
    "pickupTimeWindow" TEXT NOT NULL,
    CONSTRAINT "DonationRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DonationType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DonationTypeToDonationRequest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DonationTypeToDonationRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "DonationRequest" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DonationTypeToDonationRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "DonationType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DonationType_type_key" ON "DonationType"("type");

-- CreateIndex
CREATE UNIQUE INDEX "_DonationTypeToDonationRequest_AB_unique" ON "_DonationTypeToDonationRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_DonationTypeToDonationRequest_B_index" ON "_DonationTypeToDonationRequest"("B");
