-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "bedroom" TEXT NOT NULL,
    "bathroom" TEXT NOT NULL,
    "livingRoom" TEXT NOT NULL,
    "toilet" TEXT NOT NULL,
    "kitchen" TEXT NOT NULL,
    "moreInfo" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
