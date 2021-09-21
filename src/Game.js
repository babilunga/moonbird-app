import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import './styles/game.css';
// import { Link } from 'react-router-dom';

function Game() {
  const unityContext = new UnityContext({
    loaderUrl: 'build/demo.loader.js',
    dataUrl: 'build/demo.data',
    frameworkUrl: 'build/demo.framework.js',
    codeUrl: 'build/demo.wasm',
    streamingAssetsUrl: 'StreamingAssets',
  });

  return (
    <div className="game__container">
      <Unity
        unityContext={unityContext}
        className="game"
        style={{
          width: '960px',
          height: '600px',
          background: '#231F20',
        }}
      />
    </div>
  );
}

export default Game;
