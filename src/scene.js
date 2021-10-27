function iniScene() {

    // Canvas
    CANVAS = document.querySelector('canvas.webgl')

    var container = document.createElement('div');
    document.body.appendChild(container);

    var near = 20,
        far = 80000;
    CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, near, far);
    CAMERA.position.set(0, 0, 38000);

    SCENE = new THREE.Scene();
    // scene.background = new THREE.Color(0xdddddd);

    // ground
    var geometry = new THREE.BoxGeometry(10, 0.15, 10);
    var material = new THREE.MeshPhongMaterial({
        color: 0xa0adaf,
        shininess: 150,
        specular: 0xffffff,
        shading: THREE.SmoothShading
    });

    var ground = new THREE.Mesh(geometry, material);
    ground.scale.multiplyScalar(3);
    ground.castShadow = false;
    ground.receiveShadow = true;
    // scene.add(ground);

    // Controls
    CONTROLS = new THREE.OrbitControls(CAMERA, CANVAS);
    // controls.enableDamping = true;

    // Renderer
    RENDERER = new THREE.WebGLRenderer({
        canvas: CANVAS,
        antialias: true,
    });
    RENDERER.setSize(window.innerWidth, window.innerHeight);
    RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    RENDERER.shadowMap.enabled = true;
    RENDERER.shadowMap.type = THREE.BasicShadowMap;

    stats = new Stats();
    container.appendChild(stats.dom);

    // var axes = createAxes(1000, SCENE);
    // SCENE.add(axes)

}


