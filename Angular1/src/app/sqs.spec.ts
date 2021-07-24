import { Sqs } from './sqs';

describe('Sqs', () => {
  it('should create an instance', () => {
    expect(new Sqs()).toBeTruthy();
  });
});
