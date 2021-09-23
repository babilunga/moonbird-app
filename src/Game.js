import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import './styles/game.css';

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
      <div className="game__ratio-wrapper">
        <div className="game__field">
          <Unity unityContext={unityContext} className="game" />
        </div>
      </div>
    </div>
  );
}

export default Game;
