import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList,LinkList2, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <center>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1-551-689-7011">+1-551-689-7011</LinkItem>
          </center>
        </LinkColumn>
        <LinkColumn>
        <center>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rmani2005@gmail.com">
            rmani2005@gmail.com
          </LinkItem>
          </center>
          </LinkColumn>
          <LinkColumn>
          <center>
          <LinkTitle>Location</LinkTitle>
          <LinkItem>
            New York, USA
          </LinkItem>
          </center>
          </LinkColumn>
        </LinkList>
        <LinkList2>
          <center>
          <LinkColumn>
          <LinkTitle>Social Media</LinkTitle>
          <LinkItem>
           <SocialIconsContainer>
              <SocialContainer>
                <SocialIcons href="https://github.com/rmani2005">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/manikandanravi13/">
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://google.com">
                  <AiFillInstagram size="3rem" />
                </SocialIcons>
              </SocialContainer>
            </SocialIconsContainer>
          </LinkItem>
        </LinkColumn>
        </center>
      </LinkList2>
      <center>
      <Slogan>©Manikandan Ravi | All rights reserved 2023. Always Innovating in Automation & DevOps</Slogan>
     </center>
    </FooterWrapper>
  );
};

// Site is developed using<br/>
//      NodeJs, NextJS, MangoDB, Docker, Kubernetes, AWS EC2, ECS, EKS, Route 53<

export default Footer;
