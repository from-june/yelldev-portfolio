import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 5;
  overflow-x: auto;

  & > div {
    max-width: 1440px;
    width: 100%;
    display: flex;
  }

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    flex-wrap: wrap;
    padding: 8px 16px;

    & > div {
      flex-direction: column;
    }
  }
`;

const YellContainer = styled.div`
  position: relative;
  margin-right: 48px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    margin-right: 0;
  }
`;

const Yell = styled.h1`
  color: ${props => props.theme.color.yellowColor};
  font-size: 4rem;
  font-family: ${props => props.theme.font.enFont};
  font-weight: 900;
  font-style: italic;
  margin-right: 5px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    width: 100%;
    font-size: 3rem;
    text-align: center;
  }
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

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    width: 6px;
    height: 6px;
    top: 28px;
    left: calc(50% + 28px);
  }
`;

const HeaderList = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-family: ${props => props.theme.font.enFont};
  font-weight: 300;
  margin-right: auto;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    margin-left: auto;
    font-size: 1.6rem;

    & li:first-child a {
      margin-left: 0;
    }
  }
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

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    height: 40px;
  }
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <div>
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
      </div>
    </HeaderContainer>
  );
};

export default Header;
