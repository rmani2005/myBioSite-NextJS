import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava,DiJenkins, DiCloud9, DiAws, IoInfiniteSharp } from 'react-icons/di';
import { BiInfinite } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web and API Automation using various tools 
      and developed/customized Automation framework and created DevOps projects End to End.<br/>
      Maintaining big automation and DevOps team as Lead Automation Engineer.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automation</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Java, Selenium,<br /> 
            BDD Cucumber, <br />
            KarateAPI & Tosca
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BiInfinite size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            GIT, Jenkins, Docker, K8s, <br/>
            CI/CD Pipelines 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCloud9 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Experience with Major<br />
             AWS  Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
