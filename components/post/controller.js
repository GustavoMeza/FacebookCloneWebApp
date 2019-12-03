let postConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/post/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let namePlaceholder = view.querySelector('.name');
        let dateDOM = view.querySelector('.date');
        let postContentDOM = view.querySelector('.postContent');
        let likesBannerPlaceholder = view.querySelector('.likesBanner');
        let likeButtonDOM = view.querySelector('.likeButton');
        let commentListPlaceholder = view.querySelector('.commentList');
        let commentComposerPlaceholder = view.querySelector('.commentComposer');

        buildAvatar(model.userId).then(avatarDOM => {
            avatarPlaceholder.parentElement.replaceChild(avatarDOM, avatarPlaceholder);
        });

        buildName(model.userId).then(nameDOM => {
            namePlaceholder.parentElement.replaceChild(nameDOM, namePlaceholder);
        });

        dateDOM.innerText = new Date(model.createTime).toLocaleString("es-ES", {
            dateStyle: "long",
            timeStyle: "short",
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
            postJsonToApi('https://127.0.0.1:5001/likes', like);
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
