import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Chat, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type requestBody = {
  university: string;
  name: string;
  description: string;
  loginLink: string;
  image: string;
  tags: string[];
}

const isValidRequest = (o: any) : o is requestBody => {
  // copilot is insane!
  if (typeof o.university !== "string") return false;
  if (typeof o.loginLink !== "string") return false;
  if (typeof o.image !== "string") return false;
  if (typeof o.name !== "string") return false;
  if (typeof o.description !== "string") return false;
  if (!Array.isArray(o.tags)) return false;
  if (!o.tags.every((tag) => typeof tag === "string")) return false;
  return true;
}

const getPlatform = (inviteLink: string) : string | undefined => {
  // bruh this was all copilot
  if (inviteLink.includes("m.me")) return "messenger";
  if (inviteLink.includes("chat.whatsapp.com")) return "whatsapp";
  if (inviteLink.includes("discord.gg")) return "discord";

  return undefined;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    response.status(405).send("Method not allowed");
  }

  if (isValidRequest(request.body)) {
    response.status(400).send("Invalid request body");
  }

  const platform = getPlatform(request.body.loginLink);
  if (platform === undefined) {
    response.status(400).send("Invalid invite link");
  }

  await prisma.chat.create({
    data: {
      university: request.body.university,

      platform: platform!,
      inviteLink: request.body.loginLink,

      image: request.body.image,
      totalMembers: 0,
      capacity: 1000,

      name: request.body.name,
      description: request.body.description,
      
      tags: request.body.tags
    }
  });

  response.status(200).send("Success");
}
