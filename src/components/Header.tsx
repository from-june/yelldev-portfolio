import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: sticky;
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
  color: ${props => props.theme.yellowColor};
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
  background-color: ${props => props.theme.mintColor};
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
    color: ${props => props.theme.mintColor};
  }

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <YellContainer>
          <Yell>yell</Yell>
          <Dot />
        </YellContainer>
      </Link>

      <HeaderList>
        <HeaderItem>
          <Link to="/about">about</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/projects">projects</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/contact">contact</Link>
        </HeaderItem>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
