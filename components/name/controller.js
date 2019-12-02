let nameConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/name/view.html',
    bind: (model, view) => {
        view.innerText = `${model.firstName} ${model.lastName}`;
        view.onclick = () => {
            window.location.href = `http://127.0.0.1:8000/profile.html?user=${model.id}`;
        }
    },
};

let buildName = componentBuilderFactory(nameConfig);
