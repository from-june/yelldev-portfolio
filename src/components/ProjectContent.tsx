import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface IProjectContent {
  title: string;
  imgSrc: string;
  hashtags: string[];
  description: string;
  links: {
    web: string;
    github?: string;
  };
}

const ProjectContainer = styled.div`
  position: relative;
  width: 400px;
  min-height: 450px;
  border-radius: 3px;
  padding: 24px;
  background-color: ${props => props.theme.color.whiteColor};

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    width: 300px;
    min-height: 370px;
    padding: 16px;
  }
`;

const ProjectTitle = styled.p`
  font-family: ${props => props.theme.font.boldFont};
  font-size: 2.4rem;
  margin-bottom: 16px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

const Hashtags = styled.ul`
  display: flex;
  margin-bottom: 16px;

  li {
    padding: 4px 16px;
    border-radius: 50px;
    background-color: ${props => props.theme.color.yellowColor};
    color: ${props => props.theme.color.whiteColor};
    font-family: ${props => props.theme.font.enFont};
    font-size: 1.3rem;
    font-weight: 700;
  }

  li:not(:last-child) {
    margin-right: 8px;
  }

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    margin-bottom: 8px;

    li {
      padding: 4px 8px;
      font-size: 1.2rem;
    }
  }
`;

const Description = styled.p`
  border-top: 1px solid ${props => props.theme.color.yellowColor};
  padding-top: 8px;
  font-size: 1.6rem;
  font-weight: 200;
  letter-spacing: -0.05em;
  text-align: justify;
  margin-bottom: 16px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

const Icons = styled.div`
  position: absolute;
  bottom: 16px;
  right: 24px;

  a {
    transition: color 0.1s linear;
  }

  a:hover {
    color: ${props => props.theme.color.mintColor};
  }

  a:last-child {
    margin-left: 4px;
  }

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    right: 16px;
  }
`;

const ProjectContent = ({
  title,
  imgSrc,
  hashtags,
  description,
  links
}: IProjectContent) => {
  return (
    <ProjectContainer>
      <ProjectImg src={imgSrc} />
      <ProjectTitle>{title}</ProjectTitle>
      <Hashtags>
        {hashtags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </Hashtags>
      <Description>{description}</Description>
      <Icons>
        <a href={links.web} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLink} size="4x" />
        </a>
        {links.github === '' ? null : (
          <a href={links.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
        )}
      </Icons>
    </ProjectContainer>
  );
};

export default ProjectContent;
