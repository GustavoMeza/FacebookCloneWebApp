let postConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/post/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let postContentDOM = view.querySelector('.postContent');
        let likesBannerPlaceholder = view.querySelector('.likesBanner');
        let likeButtonDOM = view.querySelector('.likeButton');
        let commentListPlaceholder = view.querySelector('.commentList');
        let commentComposerPlaceholder = view.querySelector('.commentComposer');

        buildAvatar(model.userId).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });
        postContentDOM.innerText = model.content;
        buildLikesBanner(model.id).then(likesBannerDOM => {
            view.replaceChild(likesBannerDOM, likesBannerPlaceholder);
        });
        likeButtonDOM.onclick = () => {
            let like = {
                userId: getUserId(),
                postId: model.id,
            };
            let config = {
                method: "POST",
                body: JSON.stringify(like),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch('https://127.0.0.1:5001/likes', config);
        };
        buildCommentList(model.id).then(commentListDOM => {
            view.replaceChild(commentListDOM, commentListPlaceholder);
        });
        buildCommentComposer(model.id).then(commentComposerDOM => {
            view.replaceChild(commentComposerDOM, commentComposerPlaceholder);
        });
    },
};

let buildPost = componentBuilderFactory(postConfig);
