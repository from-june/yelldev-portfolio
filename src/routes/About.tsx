import styled from 'styled-components';
import yellAbout from 'images/about_yell.png';
import Markdown from 'components/Markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faBlogger } from '@fortawesome/free-brands-svg-icons';

const AboutContainer = styled.div`
  padding: 64px 128px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-right: 96px;
`;

interface IYellImg {
  src: string;
  alt: string;
}

const YellImg = styled.img<IYellImg>`
  display: block;
  width: 250px;
  height: auto;
  position: relative;
  left: 29px;
  z-index: 2;
  margin-bottom: 64px;
`;

const ImgBack = styled.div`
  position: absolute;
  top: 50px;
  display: block;
  content: '';
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background-color: ${props => props.theme.color.yellowColor};
  z-index: 1;

  ::after {
    position: absolute;
    top: -10px;
    right: -50px;
    display: block;
    content: '';
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.mintColor};
  }
`;

const YellName = styled.p`
  margin-bottom: 4px;
  padding-top: 8px;
  color: ${props => props.theme.color.yellowColor};
  border-top: 1px solid ${props => props.theme.color.textColor};
  font-family: ${props => props.theme.font.enFont};
  font-size: 3.2rem;
  font-style: italic;
  font-weight: 900;
  text-align: center;
`;

const IconContainer = styled.div`
  text-align: center;

  svg:hover {
    color: ${props => props.theme.color.mintColor};
  }

  svg:first-child {
    margin-right: 4px;
  }
`;

const ContentsContainer = styled.div``;

const AboutDescription = styled.div`
  position: relative;
  top: 16px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 8px 8px ${props => props.theme.color.yellowColor};
  margin-bottom: 64px;
`;

const AboutTitle = styled.p`
  font-family: ${props => props.theme.font.boldFont};
  font-size: 3.2rem;
  letter-spacing: -0.05em;
  margin-bottom: 24px;

  span {
    font-size: 4rem;
    color: ${props => props.theme.color.yellowColor};
  }
`;

const AboutYell = styled.p`
  max-width: 482px;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: -0.1em;
  text-align: justify;

  strong {
    font-weight: 500;
    text-decoration: underline;
  }

  strong:first-child {
    color: ${props => props.theme.color.mintColor};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ImgContainer>
        <YellImg src={yellAbout} alt="옐" />
        <ImgBack />
        <YellName>yell</YellName>
        <IconContainer>
          <a
            href="https://github.com/pak-fuse"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="6x" />
          </a>
          <a
            href="https://pak-fuse.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBlogger} size="6x" />
          </a>
        </IconContainer>
      </ImgContainer>
      <ContentsContainer>
        <AboutDescription>
          <AboutTitle>
            안녕하세요. <span>옐</span> 입니다!
          </AboutTitle>
          <AboutYell>
            개발의 여러 분야 중에서도 <strong>프론트엔드를 택한 것</strong>은,
            <br />
            <strong>눈으로 보이는 결과물</strong>을 만드는 것이 좋았기
            때문입니다. 그래서 UI로 색감을 다채롭게 쓰는 것을 좋아하며 UX로 더
            나은 방향이 무엇일지 고민합니다.
            <br />
            <br />
            <strong>어떤 일이든 협업을 바탕으로 이루어진다는 걸 인지</strong>
            하고 있으며 그 밑바탕이 서로 간의 대화라고 생각합니다. 그렇기 때문에
            일의 원활한 진행을 위해 팀원들과 지속적인 소통을 합니다.
          </AboutYell>
        </AboutDescription>
        <Markdown />
      </ContentsContainer>
    </AboutContainer>
  );
};

export default About;
