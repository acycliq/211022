// variables in the global scope
var CAMERA = null,
    SCENE = null,
    RENDERER = null,
    CONTROLS = null,
    CANVAS = null,
    ALL_GENEDATA = null,
    CELLS_ARR = [],
    SPOTS_ARR = [],
    CONFIGSETTINGS = null,
    legend_added = false, //used to make sure the listener is attached only once
    GENEPANEL = null,
    INSTANCEDMESH = null,
    PARTICLES = null,
    PREV_INSTANCE_ID = -1;
    MOUSE = new THREE.Vector2(),
    RAYCASTER = new THREE.Raycaster(),
    COLOR = new THREE.Color();
