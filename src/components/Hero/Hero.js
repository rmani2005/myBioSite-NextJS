import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import MyComponent from './MyComponent.js';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! I Am <br />
          Manikandan Ravi
        </SectionTitle>
        <SectionTitle2>
            <MyComponent/>
        </SectionTitle2>
        <SectionText>
         I'm Automation & DevOps enthusiastic, having a experience & wider knowledge in GUI, API Automation, DevOps tools, pipeline, Cloud platform and many more projects!
        </SectionText>
        <Button>Download My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

function Resume() {
  return (
    <iframe src='../resume/ManikandanRavi-resume.pdf' />
  ) 
}

export default Hero;