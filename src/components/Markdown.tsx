import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  width: 514px;
  padding: 16px;
  background-color: ${props => props.theme.color.whiteColor};
  border-radius: 3px;
  margin: 0 auto;
  box-shadow: 8px 8px ${props => props.theme.color.mintColor};
`;

const MarkdownText = styled.p`
  font-size: 2.6rem;
  font-family: ${props => props.theme.font.boldFont};
  margin-bottom: 24px;

  span {
    display: block;
    font-family: ${props => props.theme.font.nomalFont};
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: -0.1em;
    text-decoration: underline;
  }
`;

const markdown = `
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
`;

const Markdown = () => {
  return (
    <MarkdownContainer>
      <MarkdownText>
        기술스택 뱃지<span>더 많은 뱃지를 보유하고 싶습니다!</span>
      </MarkdownText>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkdownContainer>
  );
};

export default Markdown;
