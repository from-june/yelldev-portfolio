import { useLocation } from 'react-router-dom';
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
  color: ${props => props.theme.color.yellowColor};
  font-size: 4rem;
  font-family: ${props => props.theme.font.enFont};
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
  background-color: ${props => props.theme.color.mintColor};
`;

const HeaderList = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-family: ${props => props.theme.font.enFont};
  font-weight: 300;
  margin-right: auto;
`;

const HeaderItem = styled.li<{ isActive: boolean }>`
  width: 100%;
  height: 50px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${props =>
      props.isActive
        ? props.theme.color.mintColor
        : props.theme.color.textColor};
    margin-left: 32px;

    :hover {
      color: ${props => props.theme.color.mintColor};
    }
  }
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <Link to="/">
        <YellContainer>
          <Yell>yell</Yell>
          <Dot />
        </YellContainer>
      </Link>

      <HeaderList>
        <HeaderItem isActive={pathname === '/about'}>
          <Link to="/about">about</Link>
        </HeaderItem>
        <HeaderItem isActive={pathname === '/projects'}>
          <Link to="/projects">projects</Link>
        </HeaderItem>
        <HeaderItem isActive={pathname === '/contact'}>
          <Link to="/contact">contact</Link>
        </HeaderItem>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
