function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 14874,
            img_height: 5885,
            img_depth: 75,
            // zThres: 1500.0,
            geneData: 'https://www.googleapis.com/storage/v1/b/3d-viewer/o/211022/data/geneData/geneData.tsv',
        },
        {   // 1.
            name: 'vizgen',
            img_width: 98824,
            img_height: 77294,
            img_depth: 12,
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg1_VS6_JH_V6/contents/region_0/geneData?ref=master',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}

