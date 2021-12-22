import styled from 'styled-components';
import ProjectContent from 'components/ProjectContent';
import ProjectsData from 'components/ProjectsData';

const ProjectsContainer = styled.div`
  padding: 32px 64px;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    padding: 16px 32px;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      {ProjectsData.map(project => (
        <ProjectContent
          key={project.id}
          id={project.id}
          title={project.title}
          hashtags={project.hashtags}
          description={project.description}
          links={project.links}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
