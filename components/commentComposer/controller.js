let commentComposerConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/commentComposer/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let commentContentDOM = view.querySelector('.commentContent');
        let submitCommentDOM = view.querySelector('.submitComment');

        buildAvatar(getUserId()).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });

        submitCommentDOM.onclick = () => {
            let comment = {
                content: commentContentDOM.value,
                userId: getUserId(),
                postId: model.id,
            };
            postJsonToApi('https://127.0.0.1:5001/comments', comment);
        };
    },
};

let buildCommentComposer = componentBuilderFactory(commentComposerConfig);
