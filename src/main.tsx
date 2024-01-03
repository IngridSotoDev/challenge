import ReactDOM from 'react-dom';
import LoginPage from './pages/login';

import '@/styles/global.scss'

const App = () => {
  return (
    <LoginPage />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));