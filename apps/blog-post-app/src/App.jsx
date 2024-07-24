import './App.css';
import './assets/css/dark-cards.css'
import './assets/css/icons.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
