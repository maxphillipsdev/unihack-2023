import { NumberUpto } from "./sussy";

// type modelling for the domain
type University = "unsw" | "anu" | "usyd";


// models a response that would be received when requesting a specific group
type SupportedPlatforms = "messenger" | "whatsapp" | "discord";

// @chat/get [will have token]
type Chat = {
    chatID: string;
    university: University;

    platform: SupportedPlatforms;
    
    name: string;
    image: string;
    totalMembers: number;
    capacity: number | "inf";
    inviteLink: string; // :D
    description: string;
    
    tags: string[];
}