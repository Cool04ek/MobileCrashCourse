const store = require('./store');
import * as actions from './actions';

describe('action', () => {

    it('should fetch topics', async () => {
        fetch.mockResponse('{"data":{"children":[{"data":{"id":"1"}}]}}');
        await actions.getTopics();

        expect(store.getters.getTopics()).toMatchSnapshot();
    });
})