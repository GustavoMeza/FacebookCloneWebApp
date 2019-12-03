let peopleListConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/peopleList/view.html',
    bind: (model, view) => {
        model = model.map(user => user.id);
        model.forEach(userId => {
            buildPerson(userId)
                .then(userDOM => {
                    view.appendChild(userDOM);
                });
        });
    },
};

let buildPeopleList = componentBuilderFactory(peopleListConfig);
