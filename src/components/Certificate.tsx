import { Flex, Text } from "@radix-ui/themes";
import type { Certificate } from "../data/resume.interface";

export default function Certificate({ certificate } : { certificate: Certificate }) {

    return (
        <Flex direction="column">
            <Flex direction="row" justify="between">
                <Text size="2" weight="medium" >{certificate.name}</Text>
                <Text size="2" color="gray" align="right">{certificate.year}</Text>
            </Flex>
            <Text size="1" color="gray" className="Consolas">{certificate.location}</Text>
        </Flex>
    )
}