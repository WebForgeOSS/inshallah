const retry = require('retry');

/**
 * Inshallah function that wraps the provided function with retry logic.
 * @param {Object} deps - Object containing dependencies (e.g., logger).
 * @param {Function} fn - The function to be retried.
 * @param {Object} options - Retry options.
 * @param {number} options.retries - Number of retries (default: 10).
 * @returns {Promise} - A promise that resolves with the result of the function or rejects with an error.
 */
const inshallah = (deps, fn, options) => {
  const { logger } = deps;
  const { retries = 10 } = options;
  let numAttempt = 0;

  const operation = retry.operation({
    retries,
    ...options,
  });

  return new Promise((resolve, reject) => {
    operation.attempt(async currentAttempt => {
      logger.debug(`Retry #${numAttempt}`);

      try {
        const result = await fn();

        logger.debug(`Retry #${numAttempt} - success`);
        resolve(result);
      } catch (error) {
        logger.debug(`Retry #${numAttempt} - fail`);
        logger.debug(`Error: ${error}`);
        operation.retry(error);

        if (numAttempt === retries) {
          logger.debug(
            `Retry #${numAttempt} - Max number of retries has been reached. The function will not retry anymore`
          );
          reject(operation.mainError());
        }

        numAttempt++;
      }
    });
  });
};

module.exports = inshallah;
