// The animation loop. Code in the animate() function is getting executed on every tick

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function setInstanceColor(instanceId, isHighlighting) {
    if (instanceId == -1) return;
    var _color;
    var original_color = CELLS_ARR[instanceId].color;
    var tc = {r: original_color.r * 255, g: original_color.g * 255, b: original_color.b * 255};
    var highlight_color = tinycolor(tc).desaturate(80).toRgb();
    highlight_color = new THREE.Color(highlight_color.r / 255, highlight_color.g / 255, highlight_color.b / 255)
    isHighlighting ? _color = highlight_color : _color = new THREE.Color(original_color.r, original_color.g, original_color.b);

    INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, _color);
    INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
}

function setHightlightSphere(instanceId, isHighlighting) {
    var dummy = new THREE.Object3D();
    var highlight_sphere = new THREE.InstancedMesh(
        //provide geometry
        new THREE.SphereBufferGeometry(1, 24, 12),

        //provide material
         new THREE.MeshPhysicalMaterial(),

        //how many instances to allocate
        1
    );

    var coords = CELLS_ARR[instanceId].position,
        scales = CELLS_ARR[instanceId].scale,
        rot = CELLS_ARR[instanceId].rotation,
        color = new THREE.Color("yellow");;
    dummy.position.set(coords.x, coords.y, coords.z);
    dummy.scale.set(scales.x, scales.y, scales.z);
    dummy.rotation.set(rot.x, rot.y, rot.z);
    dummy.updateMatrix();
    highlight_sphere.name = 'cell_highlight';
    highlight_sphere.setMatrixAt(0, dummy.matrix);
    highlight_sphere.setColorAt(0, new THREE.Color(color.r, color.g, color.b));

    SCENE.add(highlight_sphere)
    // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
    // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
}

function render() {
    RENDERER.render(SCENE, CAMERA);
}
