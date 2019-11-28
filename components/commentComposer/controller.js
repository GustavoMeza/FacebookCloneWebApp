let commentComposerConfig = {
    model: 'https://127.0.0.1:5001/posts',
    view: 'components/commentComposer/view.html',
    bind: (model, view) => {
        let inputDOM = view.querySelector('input');
        let buttonDOM = view.querySelector('button');

        buttonDOM.onclick = () => {
            let comment = {
                content: inputDOM.value,
                userId: getUserId(),
                postId: model.id,
            };
            let config = {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch('https://127.0.0.1:5001/comments', config);
        };
    },
};

let buildCommentComposer = componentBuilderFactory(commentComposerConfig);
