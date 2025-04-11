'use strict';

/**
 * video-production service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-production.video-production');
