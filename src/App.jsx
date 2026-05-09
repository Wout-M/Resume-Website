import './App.css'
import Certificate from './components/Certificate'
import Education from './components/Education'
import Project from './components/Project'
import Skill from './components/Skill'
import Work from './components/Work'
import { Avatar, Box, Button, Flex, Grid, Heading, Link, Text } from '@radix-ui/themes'

import { resume_data } from './data/data'

export default function App() {

  return (
    <div>
      <Flex gap="3" justify="between">
        <Flex direction="column">
          <Heading size="6">{resume_data.name}</Heading>
          <Text size="2" color="gray" className="Consolas">{resume_data.description}</Text>
          <Flex mt="3" gap="2" wrap="wrap">
            {resume_data.links.map(link => (
              <Link href={link.url} target="_blank" key={link.url}>
                <Button variant="outline" color="gray" highContrast>{link.icon}</Button>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Avatar
          size="8"
          src={resume_data.image}
          fallback="A"
        />
      </Flex>
      <Box mt="4" mb="2">
        <Heading mb="1" size="4">About</Heading>
        <Text size="2" color="gray" className="Consolas Line-1">{resume_data.about}</Text>
      </Box>
      <Box mt="4" mb="2">
        <Heading mb="1" size="4">Experience</Heading>
        {resume_data.experience.map(work => (
          <Work work={work} key={work.company} />
        ))}
      </Box>
      <Box mt="4" mb="2">
        <Heading mb="1" size="4">Education</Heading>
        {resume_data.education.map(edu => (
          <Education education={edu} key={edu.degree} />
        ))}
      </Box>
      <Flex mt="4" mb="2" gap="4" width="auto">
        <Box>
          <Heading mb="2" size="4">Languages</Heading>
          <Flex direction="column" gap="2">
            {resume_data.languages.map(language => (
              <Text size="2" key={language.name}>
                <b>{language.name}:</b> {language.level}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box>
          <Heading mb="2" size="4">Skills</Heading>
          <Flex direction="column" gap="2">
            {resume_data.skills.map(skill => (
              <Skill skill={skill} key={skill.area} />
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box mt="4" mb="2">
        <Heading mb="1" size="4">Certificates</Heading>
        <Flex direction="column" gap="1">
          {resume_data.certificates.map(cert => (
            <Certificate certificate={cert} key={cert.name} />
          ))}
        </Flex>
      </Box>
      <Box mt="4" mb="2">
        <Heading mb="2" size="4">Projects</Heading>
        <Grid
          columns={{
            initial: "2",
            xs: "3",
          }}
          gap="3"
          width="auto">
          {resume_data.projects.map(project => (
            <Project project={project} key={project.name} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}