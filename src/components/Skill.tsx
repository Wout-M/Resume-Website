import { Badge, Flex, Text } from "@radix-ui/themes";
import type { Skill } from "../data/resume.interface";

export default function Skill({ skill } : { skill : Skill }) {

    return (
        <Flex direction={{ initial: "column", xs: "row" }} gap="2">
            <Text size="2">{skill.area}:</Text>
            <Flex gap="1" wrap="wrap">
                {skill.skills.map(skill => (
                    <Badge color="gray" variant="solid" highContrast={true} key={skill}>{skill}</Badge>
                ))}
            </Flex>
        </Flex>
    )
}