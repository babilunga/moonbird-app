import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import './styles/game.css';
// import { Link } from 'react-router-dom';

function Game() {
  const unityContext = new UnityContext({
    loaderUrl: 'build/app.loader.js',
    dataUrl: 'build/app.data',
    frameworkUrl: 'build/app.framework.js',
    codeUrl: 'build/app.wasm',
  });

  return (
    <div className="bg">
      <div className="game-container">
        {/* <Link to="/" className="link">
        Return on site
      </Link> */}
        <Unity
          unityContext={unityContext}
          className="game"
          // style={{ width: '960px', height: '600px', background: '#231F20' }}
        />
      </div>
    </div>
  );
}

export default Game;
