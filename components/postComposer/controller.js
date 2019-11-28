let postComposerConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/postComposer/view.html',
    bind: (model, view) => {
        let inputDOM = view.querySelector('input');
        let buttonDOM = view.querySelector('button');

        buttonDOM.onclick = () => {
            let post = {
                content: inputDOM.value,
                userId: getUserId(),
            };
            let configs = {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch('https://127.0.0.1:5001/posts', configs);
        };
    },
};

let buildPostComposer = componentBuilderFactory(postComposerConfig);
