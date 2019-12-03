let navConfig = {
    model: 'https://127.0.0.1:5001/users',
    view: 'components/nav/view.html',
    bind: (model, view) => {
        let newsTab = view.querySelector('#newsTab');
        let searchTab = view.querySelector('#searchTab');
        let accountTab = view.querySelector('#accountTab');

        newsTab.onclick = () => {
            window.location.href="http://127.0.0.1:8000/index.html"
        };

        searchTab.onclick = () => {
            window.location.href="http://127.0.0.1:8000/search.html"
        };

        accountTab.onclick = () => {
            window.location.href="http://127.0.0.1:8000/account.html"
        };
    },
};

let buildNav = componentBuilderFactory(navConfig);
