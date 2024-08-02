// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";
// declare global {
//   var prisma: PrismaClient | undefined;
// }
// export const db =
//   globalThis.prisma || new PrismaClient().$extends(withAccelerate());

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate());
};
// const prismaClientSingleton = () => {
//   return new PrismaClient()
// };

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;
