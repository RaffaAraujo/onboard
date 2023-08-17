import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
    --gray-25: #FCFCFD;
    --gray-50: #F9FAFB;
    --gray-100: #F2F4F7;
    --gray-200: #EAECF0;
    --gray-300: #D0D5DD;
    --gray-400: #98A2B3;
    --gray-500: #667085;
    --gray-600: #475467;
    --gray-700: #344054;
    --gray-800: #1D2939;
    --gray-900: #101828;

  /* Primary-Color */
    --primary-25: #BED2FF;
    --primary-50: #AEC6FF;
    --primary-100: #9DBAF0;
    --primary-200: #9DBAF0;
    --primary-300: #7DA2F5;
    --primary-400: #6D96EB;
    --primary-500: #5D8AE1;
    --primary-600: #4D7ED7;
    --primary-700: #3D72CD;
    --primary-800: #2D66C3;
    --primary-900: #1D5AB9;

    /* Error-Color */
    --error-25: #FFFBFA;
    --error-50: #FEF3F2;
    --error-100: #FEE4E2;
    --error-200: #FECDCA;
    --error-300: #FDA29B;
    --error-400: #F97066;
    --error-500: #F04438;
    --error-600: #D92D20;
    --error-700: #B42318;
    --error-800: #912018;
    --error-900: #7A271A;

    /* Warning-Color */
    --warning-25: #FFFCF5;
    --warning-50: #FFFAEB;
    --warning-100: #FEF0C7;
    --warning-200: #FEDF89;
    --warning-300: #FEC84B;
    --warning-400: #FDB022;
    --warning-500: #F79009;
    --warning-600: #DC6803;
    --warning-700: #B54708;
    --warning-800: #93370D;
    --warning-900: #7A2E0E;

    --success-25: #F6FEF9;
    --success-50: #ECFDF3;
    --success-100: #D1FADF;
    --success-200: #A6F4C5;
    --success-300: #6CE9A6;
    --success-400: #32D583;
    --success-500: #12B76A;
    --success-600: #039855;
    --success-700: #027A48;
    --success-800: #05603A;
    --success-900: #054F31;

    /*========== Fonts ==========*/
    /*.5rem = 8px | 1rem = 16px ...*/
    --body-font: 'Inter', sans-serif;

    --text-small-xs: 0.75rem; // 12px
    --text-small-sm: 0.875rem; // 14px
    --text-small-md: 1rem; // 16px
    --text-small-lg: 1.125rem; // 18px
    --text-small-xl: 1.25rem; // 20px
    --text-headline-sm: 1.5rem; // 24px
    --text-headline-md: 1.875rem; // 30px
    --text-headline-lg: 2.25rem; // 36px
    --text-headline-xl: 2.50rem; // 36px
    --text-display-sm: 3rem; // 48px
    --text-display-md: 3.75rem; // 60px
    --text-display-lg: 4.5rem; // 72px

    /*========== Font weight ==========*/

    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semibold: 600;
    --weight-bold: 700;
    --weight-black: 900;

    --container-padding-md: 2rem;
    --container-padding-sm: 1rem;

    --gray-800-ligh: #fff;
  }

  /* @media (prefers-color-scheme: dark) {
    body {
      background: var(--gray-800);
    }
  }

  @media (prefers-color-scheme: light) {
    body {
      background: var(--gray-800-light);
    }
  } */

    html {
      scroll-behavior: smooth;
    }
    body {
      background: var(--gray-800);
      font-synthesis: none;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    body, input, textarea, button {
      font-family: var(--body-font);
      font-weight: 500;
    }

    input, button, textarea, select {
      font: inherit;
    }

    a {
      text-decoration: none;
    }

    ul{
        list-style: none;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
      font-family: var(--body-font);
      color: var(--gray-50);
      font-weight: 500;
    }
`;
