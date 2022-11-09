import { FunctionComponent } from 'react';
import MainLayout from './components/layouts/main/MainLayout';
import Home from './components/pages/home/Home';

/* @todo create an error boundary */
const App: FunctionComponent = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);

export default App;
