/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const rules = {
    'no-async-await': require('./rules/no-async-await'),
    'no-for-of': require('./rules/no-for-of'),
    'no-rest-spread-parameter': require('./rules/no-rest-spread-parameter'),
};

module.exports = {
    rules,
};
