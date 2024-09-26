import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/auth/login",
    register: "/auth/register",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        console.log(credentials);

        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("No user found");

        console.log(userFound);

        if (!userFound.password) throw new Error("User password is null");

        if (credentials?.password) {
          const matchPassword = await bcrypt.compare(
            credentials.password,
            userFound.password
          );
          if (!matchPassword) throw new Error("Wrong password");

        } else {
          throw new Error("Credentials are missing or incomplete.");
        }

        return {
          id: userFound.id,
          username: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {},
};
