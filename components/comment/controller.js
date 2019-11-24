let commentConfig = {
    model: 'https://127.0.0.1:5001/comments',
    view: 'components/comment/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let commentContentDOM = view.querySelector('.commentContent');

        buildAvatar(model.userId).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });    
        commentContentDOM.innerText = model.content;
    },
};

let buildComment = componentBuilderFactory(commentConfig);
