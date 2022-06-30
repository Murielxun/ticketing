export const natsWrapper = {
  client: {
    // publish: (subject: string, data: string, callback: () => void) => {
    //   callback();
    // },

    // instead of providing a fake function like above, want to provide a mock function
    // to check whether this publish is actually called (meaning, acutally publishing event)

    // a mock function is essentially a fake func
    // but it allows us to make tests around it or make expectations around it
    // eg. can expect the mock function gets executed, or it gets executed with some particular arguments

    // need to have both the fake func & mock func
    // publisher still needs to call the fake func & the callback need to be executed
    // -> do both them together, move the fake func into mockImplementation
    publish: jest
      .fn()
      .mockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
      ),
  },
};
