let avatarConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/avatar/view.html',
    bind: (model, view) => {
        let nameDOM = view.querySelector('.name');
        nameDOM.innerText = `${model.firstName} ${model.lastName}`;
    },
};

let buildAvatar = componentBuilderFactory(avatarConfig);
