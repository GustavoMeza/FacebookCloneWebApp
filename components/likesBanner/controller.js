let likesBannerConfig = {
    model: 'https://127.0.0.1:5001/likes/forPost',
    view: 'components/likesBanner/view.html',
    bind: (model, view) => {
        let likeCount = view.querySelector('.likeCount');
        likeCount.innerText = `${model.length}`;
    },
};

let buildLikesBanner = componentBuilderFactory(likesBannerConfig);
