import { NumberUpto } from "./sussy";

// type modelling for the domain

type University = "unsw" | "anu" | "usyd";

// models a response that would be received when requesting a specific group
type SupportedPlatforms = "messenger" | "whatsapp" | "discord";
export type Chat = {
    groupOwnerUserId: string; // maps to user.user_id
    platform: SupportedPlatforms;
    inviteLink: string; // :D
    image: string; // :D

    totalMembers: number;
    capacity: number;
    university: string; // maps to University.uniName

    tags: string[];
}
