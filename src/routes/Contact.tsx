import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ContentsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  background-color: ${props => props.theme.color.whiteColor};
  padding: 32px;
  border-radius: 3px;
  text-align: center;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    padding: 16px;
  }
`;

const Info = styled.p`
  font-size: 1.8rem;
  font-weight: 200;
  letter-spacing: -0.05em;
  margin-bottom: 16px;

  strong {
    color: ${props => props.theme.color.mintColor};
    font-weight: 600;
    text-decoration: underline;
  }

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
`;

const EmailIcon = styled.div`
  border-top: 1px solid ${props => props.theme.color.bgColor};
  padding-top: 16px;
  color: ${props => props.theme.color.yellowColor};
  margin-bottom: 8px;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    font-size: 0.5rem;
  }
`;

const EmailAddress = styled.p`
  font-family: ${props => props.theme.font.enFont};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media only screen and (max-width: ${props =>
      props.theme.media.breakPoint460}px) {
    font-size: 1.6rem;
  }
`;

const Contact = () => {
  return (
    <ContentsContainer>
      <Info>
        구인관련 및 궁금한 점이 있으시면
        <br />
        아래 <strong>이메일</strong>로 연락 바랍니다.
      </Info>
      <EmailIcon>
        <FontAwesomeIcon icon={faEnvelope} size="8x" />
      </EmailIcon>
      <EmailAddress>june.mintlatte@gmail.com</EmailAddress>
    </ContentsContainer>
  );
};

export default Contact;
