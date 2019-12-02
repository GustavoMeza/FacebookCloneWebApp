let commentConfig = {
    model: 'https://127.0.0.1:5001/comments',
    view: 'components/comment/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let bubbleDOM = view.querySelector('.bubble');
        let namePlaceholder = bubbleDOM.querySelector('.name');
        let commentContentDOM = bubbleDOM.querySelector('.commentContent');

        buildAvatar(model.userId).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });

        buildName(model.userId).then(nameDOM => {
            bubbleDOM.replaceChild(nameDOM, namePlaceholder);
        });    
        commentContentDOM.innerText = model.content;
    },
};

let buildComment = componentBuilderFactory(commentConfig);
