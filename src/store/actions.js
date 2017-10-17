const store = require('./store');

export async function getTopics() {
    store.setters.setLoading(true);
    let response = await fetch('https://www.reddit.com/subreddits/default.json');
    let responseJson = await response.json();
    store.setters.setTopics(responseJson.data.children);
    store.setters.setLoading(false);
}

export async function getPosts(url) {
    store.setters.setLoading(true);
    let response = await fetch(`https://www.reddit.com${url}hot.json`);
    let responseJson = await response.json();
    store.setters.setPosts(responseJson.data.children);
    store.setters.setLoading(false);
}
