let postConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/post/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let postContentDOM = view.querySelector('.postContent');
        let likesBannerPlaceholder = view.querySelector('.likesBanner');
        let commentListPlaceholder = view.querySelector('.commentList');

        buildAvatar(model.userId).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });
        postContentDOM.innerText = model.content;
        buildLikesBanner(model.id).then(likesBannerDOM => {
            view.replaceChild(likesBannerDOM, likesBannerPlaceholder);
        });
        buildCommentList(model.id).then(commentListDOM => {
            view.replaceChild(commentListDOM, commentListPlaceholder);
        });
    },
};

let buildPost = componentBuilderFactory(postConfig);
