// import { defineConfig } from 'astro/config';

// import tailwind from '@astrojs/tailwind';

// import vercel from '@astrojs/vercel';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()],
//   output: 'server',
//   adapter: vercel()
// });

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercelServerless(),
});
