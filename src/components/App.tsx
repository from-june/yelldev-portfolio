import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/Header';
import yellAvatar from 'images/yell.png';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
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
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: ${props => props.theme.textColor};
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: -0.1em;
  line-height: 1.5;
  text-align: center;

  span:nth-child(2) {
    font-weight: 700;
    color: ${props => props.theme.mintColor};
  }

  span:last-child {
    font-weight: 700;
    font-size: 3.2rem;
    color: ${props => props.theme.yellowColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
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
    </>
  );
}

export default App;
