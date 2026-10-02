import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 3000);
createApp().listen(port, () => {
  console.log(`BeanShop działa na http://localhost:${port}`);
  if (process.env.ENABLE_TEST_API === '1') console.log('API testowe włączone: /api/test/*');
});
