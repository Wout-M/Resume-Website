import MailIcon from "../components/icons/MailIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GlobeIcon from "../components/icons/GlobeIcon";

export const resume_data = {
    name: "Wout Mergaerts",
    description: ".NET Developer focused on making fun projects",
    about: "I've been interested in programming and tinkering since childhood, making Java mods for Minecraft and creating projects with an Arduino. This got me into volunteering with CoderDojo in high school and going for an IT degree in college. Since 2020 I've been working as a .NET developer while making fun projects with .NET or React on the side.",
    image: "https://avatars.githubusercontent.com/u/38492330?v=4",
    links: [
        {
            icon: <MailIcon />,
            url: "mailto:wout.mergaerts@gmail.com"
        },
        {
            icon: <GlobeIcon />,
            url: "https://woutmergaerts.netlify.app/"
        },
        {
            icon: <GithubIcon />,
            url: "https://github.com/Wout-M"
        },
        {
            icon: <LinkedInIcon />,
            url: "https://www.linkedin.com/in/wout-mergaerts/"
        }
    ],
    experience: [
        {
            company: "BiCA AG",
            link: "https://www.cirrusoft.com",
            start: "Since Sep. 2024",
            end: "",
            title: ".NET Developer",
            description: "Started as a .NET developer in the team creating new funcionality for the Backoffice side of the Cirrus web application in Anglar & .NET Core. Also created a system that creates and compares snapshots daily for millions of records. Implemented a source generator that generates strongly-typed localization based on JSON resource files. Since September 2025, moved to the PoS (Point of Sale) team to create customer-facing functionalities in Angular & .NET Core.",
            technologies: ["C#", "TypeScript", ".NET Core", "Angular", "Entity Framework Core", "SQL Server", "CI/CD", "REST API", "xUnit"]
        },
         {
            company: "TechFirm Information Systems",
            link: "https://www.techfirm.ch/en/home-en",
            start: "Since Sep. 2024",
            end: "",
            title: ".NET Consultant",
            description: "Client: BiCA AG",
            technologies: []
        },
        {
            company: "Build-Software",
            link: "https://build-software.eu",
            start: "Sep. 2020",
            end: "Sep.2024",
            title: ".NET Developer → Team Lead",
            description: "Started as .NET developer implementing new functionality in VB.NET or C#. Quickly moved on to bigger projects like integrations with external apps & APIs, refactoring for performance improvements & maintainability and migrating from .NET Framework to .NET Core. Since 2023, I'm leading the team responsible for integrations with Outlook & Sharepoint (through Graph), planning software and various accounting programs. Since 2024, I'm leading the team responsible for creating future projects for Build-Software like a Blazor web application and a .NET MAUI mobile application.",
            technologies: ["C#", "VB.NET", ".NET Framework", ".NET Core", "Entity Framework (Core)", "Winforms", "SQL Server", "Blazor", ".NET MAUI", "REST API", "Graph", "Microservices", "Scrum"]
        },
        {
            company: "Brainjar",
            link: "https://brainjar.ai",
            start: "Mar. 2020",
            end: "May 2020",
            title: "Internship: Objective scoring in sport",
            description: "Research if scoring in dressage is possible with Pose Estimation. To make the research easier, I also created a web application with Docker, Flask & React to easily upload and annonate videos.",
            technologies: ["Python", "DeepLabCut", "Docker", "React", "Flask"]
        }
    ],
    education: [
        {
            school: "Thomas More Geel",
            degree: "Bachelor's Degree Applied Computer Science: Application Development",
            start: "2017",
            end: "2020"
        },
        {
            school: "Western Norway University of Applied Sciences",
            degree: "Erasmus semester: Advanced Web Applications, Machine Learning & Advanced Algorithms, Selected Topics in ICT",
            start: "Aug. 2019",
            end: "Dec. 2019"
        }
    ],
    certificates: [
        {
            name: "Building Mobile Apps with .NET MAUI",
            year: "2024",
            location: "U2U"
        },
        {
            name: "AI-102: Azure AI Engineer Associate",
            year: "2022",
            location: "Microsoft"
        },
        {
            name: "MS-600: Building Applications and Solutions with Microsoft 365 Core Services",
            year: "2021",
            location: "Microsoft"
        },
        {
            name: "Advanced .NET 5 Web Development with Visual Studio 2019",
            year: "2021",
            location: "U2U"
        }
    ],
    skills: [
        {
            area: "Desktop",
            skills: [
                "C#",
                "VB",
                "Python",
                "Java",
                "SQL Server",
                "ASP.NET",
                ".NET Core",
                ".NET Framework",
                "Entity Framework (Core)",
                "WPF",
                "Winforms",
                "xUnit",
                "FluentValidation"
            ]
        },
        {
            area: "Web",
            skills: [
                "Blazor",
                "MAUI",
                "React",
                "Angular",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS"
            ]
        },
        {
            area: "Others",
            skills: [
                "Git",
                "CI/CD Pipelines",
                "Docker",
                "Podman",
                "Azure",
                "DevOps",
            ]
        },
        {
            area: "Principles",
            skills: [
                "Microservices Architecture",
                "Clean Architecture",
                "Test-Driven Development",
                "Behavior-Driven Development",
                "Domain-Driven Design",
                "SOLID",
                "Clean Code"
            ]
        }
    ],
    languages: [
        {
            name: "Dutch",
            level: "Native"
        },
        {
            name: "English",
            level: "Full Professional"
        },
        {
            name: "German",
            level: "Intermediate/Professional"
        },
        {
            name: "French",
            level: "Limited Working"
        }
    ],
    projects: [
        {
            name: "Hungry Pig",
            description: "A symbolic comparison game for testing the cognitive development of prematurely born pre-schoolers.",
            technologies: ["Blazor", "MudBlazor", "Fluxor", ".NET 6"],
            link: "https://wout-m.github.io/HungryPig/"
        },
        {
            name: "Face Snake",
            description: "Play the famous Snake game using the position of your face in the camera.",
            technologies: ["React", "JavaScript", "Tensorflow.js", "Material-UI"],
            link: "https://face-snake.netlify.app"
        },
        {
            name: "Portfolio Website",
            description: "A portfolio website made with React & Radix",
            technologies: ["React", "JavaScript", "Radix", "Netlify"],
            link: "https://woutmergaerts.netlify.app/"
        },
        {
            name: "KGB Bot",
            description: "A Dicord bot that keeps track of deleted/edited messages for admins of servers that also has some fun games for members.",
            technologies: ["Discord.NET", "Quartz.NET", ".NET 8", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        },
        {
            name: "Wanderer Bot",
            description: "A Discord bot for a fantasy themed reading server of a famous YouTuber. Sorts people in their respective guilds.",
            technologies: ["Discord.NET", "Quartz.NET", ".NET 8", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        },
        {
            name: "ExWi Bot",
            description: "A Discord bot for the server of the science department of the university of Bern that keeps track of deleted/edited messages & sorts people in their respective degrees.",
            technologies: ["Discord.NET", ".NET 8", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        }
    ]
}
