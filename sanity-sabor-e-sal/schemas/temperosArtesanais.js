export default {
    title: 'Temperos Artesanais',
    name: 'tempArts',
    type: 'document',
    fields: [{
        title: 'Artesanal name',
        name: 'artesanalName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'artesanalDesc',
        type: 'text',
        options: {
          maxLength: 200,
        },
        validation: Rule => Rule.required()
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        title: "Artesanal Image",
        name: "artesanalImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "preco",
        title: "Preço",
        type: "number",
        validation: Rule => Rule.required()
      }
    ]
  }