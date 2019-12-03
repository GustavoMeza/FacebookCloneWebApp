let profileConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/profile/view.html',
    bind: (model, view) => {
        let avatarPlaceholder = view.querySelector('.avatar');
        let namePlaceholder = view.querySelector('.name');
        let addFriend = view.querySelector('.addFriend');

        buildAvatar(model.id).then(avatarDOM => {
            view.replaceChild(avatarDOM, avatarPlaceholder);
        });

        buildName(model.id).then(nameDOM => {
            view.replaceChild(nameDOM, namePlaceholder);
        });

        addFriend.onclick = () => {
            let friendship = {
                userAId: getUserId(),
                userBId: model.id,
            }
            postJsonToApi('https://127.0.0.1:5001/friendships', friendship);
        }
    },
};

let buildProfile = componentBuilderFactory(profileConfig);
