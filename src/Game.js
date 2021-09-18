import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

function Game() {
  const unityContext = new UnityContext({
    loaderUrl: 'build/app.loader.js',
    dataUrl: 'build/app.data',
    frameworkUrl: 'build/app.framework.js',
    codeUrl: 'build/app.wasm',
  });

  return (
    <div>
      <p>Game page</p>
      <Unity
        unityContext={unityContext}
        style={{
          height: '100%',
          width: 950,
        }}
      />
    </div>
  );
}

export default Game;
