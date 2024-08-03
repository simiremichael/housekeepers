// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Ensure the Prisma client is reused during hot-reloads in development.
  // Otherwise, a new client is created every time a file is changed.
//   @ts-ignore
  if (!global.prisma) {
    //   @ts-ignore
    global.prisma = new PrismaClient();
  }
    // @ts-ignore
  prisma = global.prisma;
}

export default prisma;
