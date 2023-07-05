/*
  Warnings:

  - You are about to drop the column `price_buy` on the `car` table. All the data in the column will be lost.
  - You are about to drop the column `price_sell` on the `car` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "manufactureId" INTEGER NOT NULL,
    "code" TEXT,
    "yearId" INTEGER NOT NULL,
    "year_number" INTEGER,
    "colorId" INTEGER NOT NULL,
    "color_wikia" TEXT,
    "rubber" BOOLEAN NOT NULL DEFAULT false,
    "custom" BOOLEAN NOT NULL DEFAULT false,
    "treasure_huntId" INTEGER NOT NULL,
    "new_model" BOOLEAN NOT NULL DEFAULT false,
    "companyId" INTEGER NOT NULL DEFAULT 0,
    "exclusiveId" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT DEFAULT 'M',
    "loose" BOOLEAN NOT NULL DEFAULT false,
    "priceInCents_buy" INTEGER,
    "priceInCents_sell" INTEGER,
    "sell" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "car_manufactureId_fkey" FOREIGN KEY ("manufactureId") REFERENCES "manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "colors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "year" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_treasure_huntId_fkey" FOREIGN KEY ("treasure_huntId") REFERENCES "treasureHunt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_exclusiveId_fkey" FOREIGN KEY ("exclusiveId") REFERENCES "exclusive" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_car" ("code", "colorId", "color_wikia", "companyId", "custom", "exclusiveId", "id", "loose", "manufactureId", "new_model", "rubber", "sell", "treasure_huntId", "type", "yearId", "year_number") SELECT "code", "colorId", "color_wikia", "companyId", "custom", "exclusiveId", "id", "loose", "manufactureId", "new_model", "rubber", "sell", "treasure_huntId", "type", "yearId", "year_number" FROM "car";
DROP TABLE "car";
ALTER TABLE "new_car" RENAME TO "car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
