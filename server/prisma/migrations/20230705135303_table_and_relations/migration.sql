-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "total" INTEGER
);

-- CreateTable
CREATE TABLE "colors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "hex" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT,
    "flag" TEXT,
    "photo" TEXT
);

-- CreateTable
CREATE TABLE "treasureHunt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "letter" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT
);

-- CreateTable
CREATE TABLE "exclusive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "letter" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT
);

-- CreateTable
CREATE TABLE "car" (
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
    "price_buy" REAL,
    "price_sell" REAL,
    "sell" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "car_manufactureId_fkey" FOREIGN KEY ("manufactureId") REFERENCES "manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "colors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "year" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_treasure_huntId_fkey" FOREIGN KEY ("treasure_huntId") REFERENCES "treasureHunt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_exclusiveId_fkey" FOREIGN KEY ("exclusiveId") REFERENCES "exclusive" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,
    CONSTRAINT "User_car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_car_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
