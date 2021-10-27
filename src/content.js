function iniContent(spots, cells) {
    console.log('Init Viewer');

    var points = GENEPANEL.map((d, i) => my_particles(spots[i], d));
    points.map(d => SCENE.add(d));

    // // add_spheres();
    // INSTANCEDMESH = make_cells(cells);
    // SCENE.add(INSTANCEDMESH.back_face.instancedMesh); // needs to be rendered first
    // SCENE.add(INSTANCEDMESH.front_face.instancedMesh);

}
