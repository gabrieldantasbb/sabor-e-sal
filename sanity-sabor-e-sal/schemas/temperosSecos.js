export default {
    title: 'Temperos Secos',
    name: 'tempSeco',
    type: 'document',
    fields: [{
        title: 'Secos name',
        name: 'secoName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'secoDesc',
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
          source: 'secoName',
          maxLength: 90,
        }
      },
      {
        title: "Seco Image",
        name: "secoImage",
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
      },
      {
        name: "peso",
        title: "Peso",
        type: "number",
        validation: Rule => Rule.required()
      }
    ]
  }