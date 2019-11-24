let likesBannerConfig = {
    model: 'https://127.0.0.1:5001/likes/forPost',
    view: 'components/likesBanner/view.html',
    bind: (model, view) => {
        view.innerText = `${model.length} Likes`;
    },
};

let buildLikesBanner = componentBuilderFactory(likesBannerConfig);
