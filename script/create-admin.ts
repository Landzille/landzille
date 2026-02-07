import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Change these values
  const email = "info@landzille.com";
  const password = "qu@c2z2fkafXgLz"; // Change this to a secure password!
  const name = "Admin User";

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log(`User with email ${email} already exists!`);
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the admin user
  const admin = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("✅ Admin user created successfully!");
  console.log("Email:", admin.email);
  console.log("Password:", password);
  console.log("\n⚠️  Please change the password after first login!");
}

main()
  .catch((e) => {
    console.error("❌ Error creating admin user:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
