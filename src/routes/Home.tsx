import yellAvatar from 'images/yell.png';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IYellImg {
  src: string;
  alt: string;
}

const YellImg = styled.img<IYellImg>`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 24px;
`;

const underline = keyframes`
  0% {
    width: 0;
  } 100% {
    width: 61%;
  }
`;

const Description = styled.p`
  font-family: ${props => props.theme.font.boldFont};
  font-size: 3.8rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 1.2;
  text-align: center;

  span:nth-child(2) {
    font-size: 4.2rem;
    color: ${props => props.theme.color.mintColor};
  }

  span:last-child {
    font-size: 4.8rem;
    color: ${props => props.theme.color.yellowColor};
  }

  ::after {
    display: block;
    content: '';
    width: 61%;
    height: 5px;
    position: relative;
    margin-top: -10px;
    margin-left: 60px;
    background-color: ${props => props.theme.color.yellowColor};
    border-radius: 3px;
    animation: ${underline} 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint650}px) {
    font-size: 2.8rem;

    span:nth-child(2) {
      font-size: 3.2rem;
    }

    span:last-child {
      font-size: 3.8rem;
    }

    ::after {
      width: 64%;
      margin-left: 38px;
    }
  }
`;

const Home = () => (
  <Container>
    <YellImg src={yellAvatar} alt="옐" />
    <Description>
      원하는 기능을 구현하기 위해 고군분투하는
      <br />
      <span>프론트엔드 개발자</span>
      ,&ensp;
      <span>옐</span> 입니다.
    </Description>
  </Container>
);

export default Home;
