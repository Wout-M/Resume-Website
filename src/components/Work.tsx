import { Badge, Flex, Link, Text } from "@radix-ui/themes";
import type { Experience } from "../data/resume.interface";

export default function Work({ work } :  { work: Experience }) {
    const technologies = work.technologies.map(tech => <Badge color="gray" key={tech}>{tech}</Badge>)

    return (
        <Flex py="1" direction="column">
            <Flex direction="row" justify="between">
                <Text size="3" weight="medium">
                    <Link href={work.link} target="_blank" style={{ color: "var(--gray-12)" }}>
                        {work.company}
                    </Link>
                </Text>
                <Text size="2" color="gray" align="right">{work.start}{work.end ? ` - ${work.end}` : null}</Text>
            </Flex>
            <Text size="2" weight="medium" className="Consolas">{work.title}</Text>
            <Text size="1" color="gray" className="Consolas">{work.description}</Text>
            <Flex direction="row" gap="1" mt="1" wrap="wrap">
                {technologies}
            </Flex>
        </Flex>
    )
}