export const baseUrlConfig =
  process.env.NODE_MODE_ENV === 'production'
    ? 'http://production.com'
    : 'http://localhost:3000'
