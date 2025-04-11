'use strict';

/**
 * our-process service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-process.our-process');
