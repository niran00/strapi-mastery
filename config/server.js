module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // 👇 This is the important part for dev environments like Render
  url: env('PUBLIC_URL', 'https://strapi-mastery.onrender.com'),
  allowedHosts: ['strapi-mastery.onrender.com'],
});
