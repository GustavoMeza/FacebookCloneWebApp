let avatarConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/avatar/view.html',
    bind: (model, view) => {
        let img = view.querySelector('img');
        if(model.id == "507f191e810c19729de86000") {
            img.src = "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/25348296_1626880354035649_8675981907841327950_n.jpg?_nc_cat=107&_nc_ohc=73RqeWPZLEMAQlgbkL71ElgEKdtmXQj96FCkip2DUC8sjwIMjfYcBh8EA&_nc_ht=scontent.fbjx1-1.fna&oh=ebb7c3c746452aed35b4aacb8a83e41f&oe=5E704DDE";
        }
        if(model.id == "507f191e810c19729de86001") {
            img.src = "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/67623540_2062666167172374_6104123665580818432_o.jpg?_nc_cat=106&_nc_ohc=qTXxtZIXVg4AQl2hKRDvVD-duJ2Jk2npVVOk0ppp66yKi7XFSofmI-59A&_nc_ht=scontent.fbjx1-1.fna&oh=99a0c6fdd6fe6657a14c750efe588e41&oe=5E75E8F6";
        }
        if(model.id == "507f191e810c19729de86002") {
            img.src = "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/51632698_2324595077585241_535762707358416896_n.jpg?_nc_cat=100&_nc_ohc=7r56EEHHp6kAQknYcjvaH8uYc9lUDqOqLjOEwhLyhoaI45iaL0cMH6vZw&_nc_ht=scontent.fbjx1-1.fna&oh=4c8a63089ad2f53bff553a2a3d37eb77&oe=5E7D7999";
        }
    },
};

let buildAvatar = componentBuilderFactory(avatarConfig);
