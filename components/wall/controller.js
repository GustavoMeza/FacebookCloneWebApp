let wallConfig = {
    model: 'https://127.0.0.1:5001/wall',
    view: 'components/wall/view.html',
    bind: (model, view) => {
        let postComposerPlaceholder = view.querySelector('.postComposer');

        buildPostComposer(getUserId()).then(postComposerDOM => {
            view.replaceChild(postComposerDOM, postComposerPlaceholder);
        });

        model.forEach(postId => {
            buildPost(postId)
                .then(postDOM => {
                    view.appendChild(postDOM);
                });
        });
    },
};

let buildWall = componentBuilderFactory(wallConfig);
