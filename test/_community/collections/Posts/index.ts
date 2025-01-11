import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    beforeChange: [
      ({ data, req: { locale, t } }) => {
        data.reqLocale = locale
        data.tFunctionLocale = t('locale')
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'reqLocale',
      type: 'text',
    },
    {
      name: 'tFunctionLocale',
      type: 'text',
    },
  ],
  versions: {
    drafts: true,
  },
}
