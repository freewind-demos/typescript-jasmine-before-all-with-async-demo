import hello from '../hello';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

let token: string = '';

beforeAll(async () => {
  await wait(1000);
  token = 'go!'
});


describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(hello()).toEqual("Hello,world!");
    expect(token).toEqual('go!')
  });
});
