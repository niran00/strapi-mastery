module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: 'https://strapi-mastery.onrender.com',
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  allowedHosts: ['strapi-mastery.onrender.com'], // ← Force allow
});
