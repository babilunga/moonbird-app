import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import './styles/game.css';

function Game() {
  const unityInstance = new UnityContext({
    loaderUrl: 'build/prefinal.loader.js',
    dataUrl: 'build/prefinal.data',
    frameworkUrl: 'build/prefinal.framework.js',
    codeUrl: 'build/prefinal.wasm',
    streamingAssetsUrl: 'StreamingAssets',
  });

  // console.log(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

  return (
    <div className="game__container">
      <div className="game__ratio-wrapper">
        <div className="game__field">
          <Unity unityContext={unityInstance} className="game" />
          <div id="unity-loading-bar">
            <div id="unity-logo"></div>
            <div id="unity-progress-bar-empty">
              <div id="unity-progress-bar-full"></div>
            </div>
          </div>
          <div id="unity-mobile-warning">
            WebGL builds are not supported on mobile devices.
          </div>
          <div id="unity-footer">
            <div id="unity-webgl-logo"></div>
            <div id="unity-fullscreen-button"></div>
            <div id="unity-build-title">MoonBird</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
