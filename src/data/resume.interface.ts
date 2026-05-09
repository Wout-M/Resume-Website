import type { ReactNode } from "react";

export interface Resume {
    readonly name: string;
    readonly description: string;
    readonly about: string;
    readonly image: string;
    readonly links: Link[];
    readonly experiences: Experience[];
    readonly education: Education[];
    readonly certificates: Certificate[];
    readonly skills: Skill[];
    readonly languages: Language[];
    readonly projects: Project[];
}

export interface Link {
    readonly icon: ReactNode;
    readonly url: string;
}

export interface Experience {
    readonly company: string;
    readonly link: string;
    readonly start: string;
    readonly end: string;
    readonly title: string;
    readonly description: string;
    readonly technologies: string[];
}

export interface Education {
    readonly school: string;
    readonly degree: string;
    readonly start: string;
    readonly end: string;
}

export interface Certificate {
    readonly name: string;
    readonly year: string;
    readonly location: string;
}

export interface Skill {
    readonly area: string;
    readonly skills: string[];
}

export interface Language {
    readonly name: string;
    readonly level: string;
}

export interface Project {
    readonly name: string;
    readonly description: string;
    readonly technologies: string[];
    readonly link: string;
}