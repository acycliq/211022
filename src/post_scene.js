// Put here event listeners and other stuff to be called when everything else on the scene is ready

function postScene() {

    // adjust the scene if the browser's window is resized
    window.addEventListener('resize', onWindowResize);

    // mouse move
    window.addEventListener('mousemove', onMouseMove, false);

    // finally remove the preloader
    removePreloader();

    // and show the gene panel button
    legendControl();

    function onMouseMove(event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components

        MOUSE.x = (event.clientX / window.innerWidth) * 2 - 1;
        MOUSE.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
        // Update camera
        CAMERA.aspect = window.innerWidth / window.innerHeight;
        CAMERA.updateProjectionMatrix();

        // Update renderer
        RENDERER.setSize(window.innerWidth, window.innerHeight);
        RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }


    var paramsGUI = {
        numSpots: 0,
        numCells: 0,
    };

    gui = new dat.GUI();

    var numSpots = [0, 100000, 1000000, 5000000, 10000000, 20000000],
        numCells = [0, 100, 1000, 100000, 150000, 200000];
    gui.add(paramsGUI, 'numSpots', numSpots).name('Num simulated spots').onChange(onSelectCounts);
    gui.add(paramsGUI, 'numCells', numCells).name('Num simulated cells').onChange(onSelectCounts);

    function onSelectCounts() {
        console.log('Selected: ' + paramsGUI.numSpots + ' number of spots');
        var spots_xyz,
            cells_xyz;
        if (+paramsGUI.numSpots || +paramsGUI.numCells) {
            +paramsGUI.numSpots ? spots_xyz = simulate_spots(+paramsGUI.numSpots) : spots_xyz = SPOTS_ARR;
            +paramsGUI.numCells ? cells_xyz = get_sim_cell_xyz(+paramsGUI.numCells) : cells_xyz = CELLS_ARR;
            // console.log(spots_xyz);
        } else {
            spots_xyz = SPOTS_ARR;
            cells_xyz = CELLS_ARR;
        }

        iniScene();
        iniLights();
        iniContent(spots_xyz, cells_xyz);
    }

    gui.open();
}