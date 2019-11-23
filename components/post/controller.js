let postConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/post/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let postContentDOM = view.querySelector('.postContent');

        postContentDOM.innerText = model.content;
        buildAvatar(model.userId).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });
    },
};

let buildPost = componentBuilderFactory(postConfig);
