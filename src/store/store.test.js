import * as store from './store';

describe('store', () => {
    it('should set and get topics', () => {
        expect(store.setters.setTopics(['1', '2'])).toEqual();
        expect(store.getters.getTopics()).toEqual(['1', '2']);
    });

    it('should set and get posts', () => {
        expect(store.setters.setPosts([{}, {}])).toEqual();
        expect(store.getters.getPosts()).toEqual([{}, {}]);
    })
}) 