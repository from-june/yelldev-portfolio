import styled from 'styled-components';
import ProjectContent from 'components/ProjectContent';
import ProjectsData from 'components/ProjectsData';

const ProjectsContainer = styled.div`
  padding: 32px 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      {ProjectsData.map(project => (
        <ProjectContent
          key={project.id}
          title={project.title}
          imgSrc={project.img_src}
          hashtags={project.hashtags}
          description={project.description}
          links={project.links}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
