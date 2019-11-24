let commentListConfig = {
    model: 'https://127.0.0.1:5001/comments/forPost',
    view: 'components/commentList/view.html',
    bind: (model, view) => {
        model.forEach(commentId => {
            buildComment(commentId).then(commentDOM => {
                view.appendChild(commentDOM);
            });
        });
    },
};

let buildCommentList = componentBuilderFactory(commentListConfig);
