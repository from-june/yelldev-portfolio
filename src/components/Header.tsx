import styled from 'styled-components';
import yellAvatar from 'images/yell.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 32px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const YellContainer = styled.div`
  position: relative;
  margin-right: 48px;
`;

const Yell = styled.h1`
  color: #ffc000;
  font-size: 4rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-style: italic;
  margin-right: 5px;
`;

const Dot = styled.div`
  position: absolute;
  top: 36px;
  right: -7px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #1bb991;
`;

const HeaderList = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  color: #999;
  margin-right: auto;
`;

const HeaderItem = styled.li`
  :hover {
    color: #1bb991;
  }

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  padding: 3px;
  border-radius: 50%;
  border: 1px solid #ffc000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <YellContainer>
        <Yell>yell</Yell>
        <Dot />
      </YellContainer>

      <HeaderList>
        <HeaderItem>about</HeaderItem>
        <HeaderItem>projects</HeaderItem>
        <HeaderItem>contact</HeaderItem>
      </HeaderList>
      <Avatar src={yellAvatar} alt="옐" />
    </HeaderContainer>
  );
};

export default Header;
