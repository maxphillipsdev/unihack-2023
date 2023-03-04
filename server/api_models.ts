import { NumberUpto } from "./sussy";

// type modelling for the domain

type university = "unsw" | "anu" | "usyd";

// models a tag + metadata that corresponds to a course
type course_tag = {
    type: "course";
    offering_faculty: string; // no actual constraints as of yet (kinda overkill for hackathon tbh)
    course_code: string;
    course_description?: string;
}

type club_tag = {
    type: "club";
    club_name: string;
    club_description?: string;
}

// models tags that can be applied to a listing
type tag = {
    data: course_tag | club_tag;
    tag_owner_user_id: string; // maps to user.user_id
    colour: {
        r: NumberUpto<255>;
        g: NumberUpto<255>;
        b: NumberUpto<255>;
    }
}

// models a response that would be received when requesting a specific group
type supported_platforms = "messenger" | "whatsapp" | "discord";
type group = {
    group_owner_user_id: string; // maps to user.user_id
    platform: supported_platforms;
    invite_link: URL; // :D
    image: URL; // :D

    total_members: number;
    capacity: number | "inf";
    tags: tag[];
    university: university;
}


// models an individual user in the system
type user = {
    user_id: string; // uuid
    first_name: string;
    last_name: string;
    middle_names?: string[];

    // hopefully we're not hosting these
    profile_image: URL;
}