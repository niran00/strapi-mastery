'use strict';

/**
 * our-producer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-producer.our-producer');
