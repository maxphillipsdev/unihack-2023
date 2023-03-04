import { NumberUpto } from "./sussy";

// type modelling for the domain

type University = "unsw" | "anu" | "usyd";

// models a tag + metadata that corresponds to a course
type CourseTag = {
    type: "course";
    offeringFaculty: string; // no actual constraints as of yet (kinda overkill for hackathon tbh)
    courseCode: string;
    courseDescription?: string;
}

type ClubTag = {
    type: "club";
    clubName: string;
    clubDescription?: string;
}

// models tags that can be applied to a listing
type Tag = {
    data: CourseTag | ClubTag;
    tagOwnerUserId: string; // maps to user.user_id
    relevantUniversity: University; // todo: make name not bad
    colour: {
        r: NumberUpto<255>;
        g: NumberUpto<255>;
        b: NumberUpto<255>;
    }
}

// models a response that would be received when requesting a specific group
type SupportedPlatforms = "messenger" | "whatsapp" | "discord";
type Group = {
    groupOwnerUserId: string; // maps to user.user_id
    platform: SupportedPlatforms;
    inviteLink: string; // :D
    image: string; // :D

    totalMembers: number;
    capacity: number | "inf";
    tags: Tag[];
    university: University;
}


// models an individual user in the system
type User = {
    userId: string; // uuid
    firstName: string;
    lastName: string;
    middleNames?: string[];

    // hopefully we're not hosting these
    profileImage: string;
}