let componentBuilderFactory = configs => {
    let loadTemplate = fetch(configs.view)
        .then( response => response.text() )
        .then( html => {
            let parser = new DOMParser();
            return parser.parseFromString(html, 'text/html').querySelector('div');
        });

    return modelId => {
        let loadModel = getJsonFromApi(`${configs.model}/${modelId}`);
        
        let viewPromise = loadTemplate
            .then(template => {
                return document.importNode(template, true);
            });

       Promise.all([loadModel, viewPromise])
            .then(values => {
                let model = values[0];
                let view = values[1];
                configs.bind(model, view);
            });

        return viewPromise;
    };
};
