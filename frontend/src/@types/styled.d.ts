import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      background: string;
    };

    fontSize: string;

    fontFamily: {
      regular: string;
      title: string;
      subTitle: string;
    };
  }
}
