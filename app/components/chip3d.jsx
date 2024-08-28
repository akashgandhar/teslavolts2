// components/BabylonScene.js
import { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

const BabylonScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      // Create a basic camera
      const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas, true);

      // Create a light
      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

      // Load the GLB model
      BABYLON.SceneLoader.Append('/models/', 'model.glb', scene, function (scene) {
        scene.createDefaultCameraOrLight(true, true, true);
      });

      return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default BabylonScene;
