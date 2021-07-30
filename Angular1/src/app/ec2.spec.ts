import { Ec2 } from './ec2';

describe('Ec2', () => {
  it('should create an instance', () => {
    expect(new Ec2()).toBeTruthy();
  });
});
