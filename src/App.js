import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      userName='chat'
      userSecret='123456'
      projectID='481c5847-aefa-4a79-90b5-466d109bf08f'
    />
  );
};

export default App;
