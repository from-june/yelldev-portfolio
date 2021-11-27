import wanwol from 'images/wanwolremind.png';
import waveyy from 'images/Waveyy.png';
import cloneTwitter from 'images/CloneTwitter-Home.png';
import momentum from 'images/vanillaJS-momentum.png';

const ProjectsData = [
  {
    id: 1,
    title: '완월-로드:길을 열다 2021',
    img_src: `${wanwol}`,
    hashtags: ['HTML', 'CSS', 'JavaScript'],
    description:
      '웹디자이너와 협업하여 만든 반응형 아카이브 사이트',
    links: {
      web: 'http://www.wanwolremind.co.kr/',
      github: ''
    }
  },
  {
    id: 2,
    title: '웨이비 : Waveyy',
    img_src: `${waveyy}`,
    hashtags: ['React', 'Styled-components', 'React Hook'],
    description:
      'The Movie Database API를 이용하여 최신 인기상영작과 티비프로그램을 확인할 수 있으며 원하는 작품을 검색할 수 있는 웹사이트',
    links: {
      web: 'https://compassionate-shockley-ee0497.netlify.app/',
      github: 'https://github.com/pak-fuse/react-Waveyy'
    }
  },
  {
    id: 3,
    title: 'Clone Twitter',
    img_src: `${cloneTwitter}`,
    hashtags: ['React', 'CSS', 'Firebase'],
    description: 'SNS인 트위터의 기능을 일부 구현하여 만든 웹사이트 ',
    links: {
      web: 'https://pak-fuse.github.io/react-clone-twitter/',
      github: 'https://github.com/pak-fuse/react-clone-twitter'
    }
  },
  {
    id: 4,
    title: 'Momentum',
    img_src: `${momentum}`,
    hashtags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Weather API와 geoLocation을 이용하여 사용자의 위치 정보를 받아 현재 날씨와 온도, 시간을 표시. 또한 사용자가 이름을 작성하고 오늘 할일을 체크해보는 웹사이트',
    links: {
      web: 'https://pak-fuse.github.io/vanillaJS-momentum/',
      github: 'https://github.com/pak-fuse/vanillaJS-momentum'
    }
  }
];

export default ProjectsData;
