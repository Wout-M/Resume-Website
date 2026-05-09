import { Badge, Card, Flex, Link, Text } from "@radix-ui/themes";
import type { Project } from "../data/resume.interface";

export default function Project({ project } : { project : Project }) {
    const technologies = project.technologies.map(tech => <Badge color="gray" key={tech}>{tech}</Badge>)

    return (
        <Card>
            <Flex direction="column" gap="1" justify="between" height="100%">
                <Flex direction="column" gap="1">
                    <Text size="3" weight="medium">
                        <Link href={project.link} target="_blank" style={{ color: "var(--gray-12)" }}>
                            {project.name}
                        </Link>
                    </Text>
                    <Text size="1" color="gray" className="Consolas" >{project.description}</Text>
                </Flex>
                <Flex direction="row" gap="1" wrap="wrap">
                    {technologies}
                </Flex>
            </Flex>
        </Card>
    )
}