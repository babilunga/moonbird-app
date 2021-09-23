import React from 'react';

const App = ({ children }) => {
  return (
    <div
      className="App"
      style={
        {
          // textAlign: 'center',
          // minHeight: '100%',
          // height: '100vh',
          // padding: '8px',
        }
      }
    >
      {children}
    </div>
  );
};

export default App;
