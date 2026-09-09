import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { prisma } from "@/lib/prisma"; // wire up once DB is connected

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: "Missing fields." }, { status: 400 });
  }

  // TODO once DB is wired up:
  // const existing = await prisma.user.findUnique({ where: { email } });
  // if (existing) {
  //   return NextResponse.json({ message: "Email already in use." }, { status: 409 });
  // }
  // const passwordHash = await bcrypt.hash(password, 10);
  // await prisma.user.create({ data: { name, email, passwordHash, role: "MEMBER" } });

  return NextResponse.json(
    { message: "Registration isn't wired to a database yet." },
    { status: 501 }
  );
}