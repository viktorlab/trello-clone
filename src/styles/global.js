import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  body {
    background: #0079bf;;

    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  .modal {
    background-color: #F4F5F7;
    border-radius: 2px;
    margin: 48px 0 80px;
    outline: none;
    padding: 20px;
  }

  .overlay {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);;
  }
`;
