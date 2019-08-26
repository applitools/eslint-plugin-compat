/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { docUrl } = require('../util/doc-url');

module.exports = {
    meta: {
        docs: {
            description: 'disallow usage of the rest parameter syntax',
            category: 'Compat',
            url: docUrl('no-rest-spread-parameter'),
        },
        schema: [],
    },

    create(context) {
        return {
            RestElement(node) {
                context.report({
                    node,
                    message: 'Invalid usage of rest parameter.',
                });
            },
            SpreadElement(node) {
                context.report({
                    node,
                    message: 'Invalid usage of spread operator.',
                });
            },
        };
    },
};
