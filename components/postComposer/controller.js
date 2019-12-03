let postComposerConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/postComposer/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let postContentDOM = view.querySelector('.postContent');
        let submitPostDOM = view.querySelector('.submitPost');

        buildAvatar(getUserId()).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });

        submitPostDOM.onclick = () => {
            let post = {
                content: postContentDOM.value,
                userId: getUserId(),
            };
            postJsonToApi('https://127.0.0.1:5001/posts', post);
        };
    },
};

let buildPostComposer = componentBuilderFactory(postComposerConfig);
