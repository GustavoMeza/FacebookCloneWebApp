let wall_Config = {
    model: 'https://127.0.0.1:5001/posts/UserId',
    view: 'components/wall/view.html',
    bind: (model, view) => {
        model.forEach(postId => {
            buildPost(postId)
                .then(postDOM => {
                    view.appendChild(postDOM);
                });
        });
    },
};

let buildWall_ = componentBuilderFactory(wall_Config);
