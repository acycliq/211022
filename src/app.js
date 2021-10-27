function app(geneData) {

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1);

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    // geneNames = Object.keys(data).sort();

    // get the gene panel (this is assigned to a global variable)
    GENEPANEL = getGenePanel(geneData);

    // loop over the genes and collect in one array the coords for each spot
    var img_width = CONFIGSETTINGS.img_width,
        img_height = CONFIGSETTINGS.img_height,
        img_depth = CONFIGSETTINGS.img_depth;

    for (var i = 0; i < GENEPANEL.length; i++) {
        var g = GENEPANEL[i];

        var temp = new Float32Array(data[g].map(d => [d.x - img_width / 2, img_height - d.y - img_height / 2, d.z - img_depth / 2]).flat());
        SPOTS_ARR.push(temp)
    }

    // Get the cell data
    CELLS_ARR = get_cell_xyz();

    iniScene();
    iniLights();
    iniContent(SPOTS_ARR, CELLS_ARR);
    animate();
    postScene();

}
