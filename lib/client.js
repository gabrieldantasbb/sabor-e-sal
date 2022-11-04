import SanityClient from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url"

const sanity = SanityClient({
    projectId: 'yl8r52b8',
    dataset: 'production',
    apiVersion: '2022-10-31',
    token: process.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
})

export default sanity;

export const imageUrlBuilder = ImageUrlBuilder(sanity);