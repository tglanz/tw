import { Engine, Scene, FreeCamera, Vector3, Mesh, HemisphericLight } from 'babylonjs';

export default canvasId => {
    const canvas = document.getElementById(canvasId);
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new FreeCamera("free-camera", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, false);

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    const sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    const ground = Mesh.CreateGround('ground1', 6, 6, 2, scene);

    engine.runRenderLoop(() => {
        scene.render();
    })

    window.addEventListener('resize', () => {
        engine.resize();
    })
}