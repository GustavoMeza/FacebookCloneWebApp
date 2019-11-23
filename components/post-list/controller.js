let postListConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/post-list/view.html',
    bind: (model, view) => {
        let postIds = model.map(post => post.id);
        postIds.forEach(postId => {
            buildPost(postId)
                .then(postDOM => {
                    view.appendChild(postDOM);
                });
        });
    },
};

let buildPostList = componentBuilderFactory(postListConfig);
