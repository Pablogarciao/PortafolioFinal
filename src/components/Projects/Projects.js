import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

{/*const projectsDemo = [{
  id: 1,
  image: '/images/1.png',
  title: 'Project 1',
  description: 'This is a project that I have worked on',
  tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  source: ''
},{
  id: 1,
  image: '/images/1.png',
  title: 'Project 2',
  description: 'This is a project that I have worked on',
  tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  source: ''
},{
  id: 1,
  image: '/images/1.png',
  title: 'Project 3',
  description: 'This is a project that I have worked on',
  tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  source: ''
},
{
  id: 1,
  image: '/images/1.png',
  title: 'Project 4',
  description: 'This is a project that I have worked on',
  tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  source: ''
}]
*/}

const Projects = () => (
  
  <Section nopadding id="projects">
    <SectionDivider>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>  
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}

          {/*
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
      ))}
    */

      /*}
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    */}
    </GridContainer>
    </SectionDivider>
  </Section>
);

export default Projects;