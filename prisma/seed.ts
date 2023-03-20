import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // Delete any Membership records from previous seeds

  await prisma.membership.deleteMany({});

  // Create new Membership records

  const basicMembership = await prisma.membership.create({
    data: {
      level: "Basic",
      description: "1 martial art - 2 sessions per week. Monthly fee.",
      price: "£25.00",
    },
  });

  const intermidiateMembership = await prisma.membership.create({
    data: {
      level: "Intermidiate",
      description: "1 martial art - 3 sessions per week.",
      price: "£35.00",
    },
  });
  const advancedMembership = await prisma.membership.create({
    data: {
      level: "Advanced",
      description: "any 2 martial arts - 5 sessions per ",
      price: "£45.00",
    },
  });
  const eliteMembership = await prisma.membership.create({
    data: {
      level: "Elite",
      description: "Unlimited classes. ",
      price: "£60.00",
    },
  });
  const juniorMembership = await prisma.membership.create({
    data: {
      level: "Junior",
      description: "Can attend all-kids martial arts sessions. ",
      price: "£25.00",
    },
  });
  const email = "rachel@remix.run";
  const intermediateMemberEmail = "intermediateMemberEmail@email.com";

  // cleanup the existing database
  await prisma.user
    .delete({ where: { email: intermediateMemberEmail } })
    .catch(() => {
      // no worries if it doesn't exist yet
    });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email: intermediateMemberEmail,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      membershipId: intermidiateMembership.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
