import * as remx from 'remx';

const initialState = {
  loading: true,
  topics: [],
  posts: [],
  selectedPost: {}
};

const state = remx.state(initialState);

export const getters = remx.getters({

  isLoading() {
    return state.loading;
  },
  
  getTopics() {
    return state.topics;
  },

  getPosts() {
    return state.posts;
  }

});

export const setters = remx.setters({

  setLoading(isLoading) {
    state.loading = isLoading;
  },

  setTopics(topics) {
    state.topics = topics;
  },

  setPosts(posts) {
    state.posts = posts;
  }

});