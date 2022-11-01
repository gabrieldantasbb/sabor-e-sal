import SanityClient from '@sanity/client'

const client = SanityClient({
    projectId: yl8r52b8,
    dataset: production,
    apiVersion: '2022-10-31',
    token: process.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
})

export default client;