import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Pretendard;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }

  textarea {
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
  }
  button {
    cursor: pointer;
  }
  .app {
    position: relative;
  }
`;

export default globalStyles;
