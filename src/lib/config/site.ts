import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Iqbal55',
  subtitle: 'Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/fotoiqbal@1.jpeg',
    name: 'M. Iqbal Maulana',
    status: '🌸',
    bio: 'EE Student'
  },
  themeColor: '#3D4451'
}
