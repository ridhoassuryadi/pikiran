import { defaultSEO, extendSEO } from './seo'

const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO,
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about',
    }),
  },
  writing: {
    label: 'Writing',
    path: '/writing',
    seo: extendSEO({
      title: 'Writing',
      description: 'Thinking out loud about software design and development.',
      image: 'og/writing.png',
      url: 'writing',
    }),
  },
  app: {
    label: 'App',
    path: '/project/app',
    seo: extendSEO({
      title: 'Project - App',
      description: 'My favorite tools and software.',
      image: 'og/stack.png',
      url: 'project/app',
    }),
  }
}

export default routes
