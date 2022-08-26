import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 20px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

.title {
    margin-top: 32px;
}

.feedbackList {
    list-style: none;
    padding: 0;
    gap: 4px;
    display: grid;
}

.feedbackFont {
    font-size: 18px;
    font-weight: 500;
}

.feedbackNotification {
    margin-top: 16px
}

.button {
  margin-top: 16px;
  margin-right: 8px;
  padding: 8px 16px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  background-color: #fff;
  border: 1px solid;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.button:hover {
  background-color: #1976d2;
  color: #fff;
}`;
