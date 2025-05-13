-- CreateEnum
CREATE TYPE "MonitorType" AS ENUM ('HTTP', 'SSL', 'DOMAIN', 'HEARTBEAT', 'TCP', 'ICMP', 'KEYWORD');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('EMAIL', 'SMS', 'SLACK', 'WEBHOOK');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "MonitorType" NOT NULL,
    "config" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "checkInterval" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckResult" (
    "id" TEXT NOT NULL,
    "monitorId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "responseTime" INTEGER,
    "details" JSONB,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CheckResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "address" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationSent" (
    "id" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "monitorId" TEXT,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "NotificationSent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Monitor" ADD CONSTRAINT "Monitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckResult" ADD CONSTRAINT "CheckResult_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationSent" ADD CONSTRAINT "NotificationSent_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationSent" ADD CONSTRAINT "NotificationSent_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
