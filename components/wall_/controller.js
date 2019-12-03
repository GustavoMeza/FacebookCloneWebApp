let wall_Config = {
    model: 'https://127.0.0.1:5001/posts/UserId',
    view: 'components/wall_/view.html',
    bind: (model, view) => {
        let profilePlaceholder = view.querySelector('.profile');
        
        buildProfile(getProfileId()).then(profileDOM => {
            view.replaceChild(profileDOM, profilePlaceholder);
        });

        model.forEach(postId => {
            buildPost(postId)
                .then(postDOM => {
                    view.appendChild(postDOM);
                });
        });
    },
};

let buildWall_ = componentBuilderFactory(wall_Config);
