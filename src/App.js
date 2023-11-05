import './App.css';
import { RouterProvider } from 'react-router';
import router from './config/router';
import GlobalStyle from './config/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
