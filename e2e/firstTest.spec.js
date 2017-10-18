const testIds = require('./../src/testIds');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show list of topics', async () => {
    await expect(element(by.id(testIds.TopicsScreen_List))).toBeVisible();
  });

  it('should click topic and open next screen', async () => {
    await expect(element(by.id('0'))).toBeVisible();
    await element(by.id("0")).tap();
    await expect(element(by.id('0'))).toBeNotVisible();
  });
})