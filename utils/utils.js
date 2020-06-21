module.exports = {
  /**
   * Generate and return a random number between 500 to 3000
   * To serve as a value for the timeout method
   */
  getRandomReqTimeout: function() {
    const max = 3000; // an arbitrary maximum milliseconds that a request can take
    const min = 500; // an arbitrary minimum milliseconds that a request can take
    return Math.floor(Math.random() * (max - min) + min);
  }
};
