let personConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/person/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let namePlaceholder = view.querySelector('.name');

        buildAvatar(model.id).then(avatarDOM => {
            avatarPlaceholder.parentElement.replaceChild(avatarDOM, avatarPlaceholder);
        });

        buildName(model.id).then(nameDOM => {
            namePlaceholder.parentElement.replaceChild(nameDOM, namePlaceholder);
        });
    },
};

let buildPerson = componentBuilderFactory(personConfig);
