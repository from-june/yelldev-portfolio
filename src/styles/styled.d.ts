import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      yellowColor: string;
      mintColor: string;
      textColor: string;
      bgColor: string;
      whiteColor: string;
    };

    font: {
      nomalFont: string;
      boldFont: string;
      enFont: string;
    };
  }
}
