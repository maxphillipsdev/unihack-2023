import { VercelRequest } from "@vercel/node";

export const isAuthenticated = (req: VercelRequest): boolean => {
    return true;
}