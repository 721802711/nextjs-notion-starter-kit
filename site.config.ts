import { siteConfig } from './lib/site-config'               // 引入siteConfig函数

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1d52fbfce2a58021a466e2dc10d54457',         // Notion的页面ID
  // https://www.notion.so/55556666/1d52fbfce2a58021a466e2dc10d54457?pvs=4

  rootNotionSpaceId: null,

  // basic site info (required)
  name: '个人网站',                         // 网站名称
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',    // 网站域名
  author: 'Travis Fischer',                                   // 作者名称

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',      // 网站描述

  // social usernames (optional)                       
  twitter: '',                            // Twitter用户名
  github: '',                       // GitHub用户名
  linkedin: '',                                   // LinkedIn用户名
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,                                 // 
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,                          // 是否启用LQIP预览图像支持

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,                                        // 是否启用Redis缓存

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
