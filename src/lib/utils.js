/**
 * @overview Utility functions.
 */
'use strict';

import crypto from 'crypto';

/**
 * @overview Generates a random hash to use as an activation token.
 *
 * @returns {String} The activation token.
 */
export function genActivationToken () {
  const HASH_ALGORITHM = 'sha256';
  const RANDOM_BYTES = crypto.randomBytes(64);
  const ENCODING = 'hex';

  const hash = crypto.createHash(HASH_ALGORITHM);

  const token = hash.update(RANDOM_BYTES).digest(ENCODING);

  return token;
}