import { Chat } from "../../cool-types/api_models";

const URL = "http://localhost:3000/";

export const getChatsWithTags = async (tags: string[]) : Promise<Chat[]> => {
    const allChats = await fetch(`${URL}/get/chats`).then((res) => res.json());
    return allChats.filter((chat: Chat) => {
        return chat.tags.some((tag) => tags.includes(tag));
    });
}


export const getChatsForPlatform = async (platform: string) : Promise<Chat[]> => {
    const allChats = await fetch(`${URL}/get/chats`).then((res) => res.json());
    return allChats.filter((chat: Chat) => {
        return chat.platform === platform;
    });
}