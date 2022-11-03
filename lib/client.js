import SanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"

const client = SanityClient({
    projectId: yl8r52b8,
    dataset: production,
    apiVersion: '2022-10-31',
    token: process.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
})

export default client;

export const imageUrlBuilder = imageUrlBuilder(client);