export default {
    title: 'Temperos Secos',
    name: 'tempSeco',
    type: 'document',
    fields: [{
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'description',
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
          source: 'title',
          maxLength: 90,
        }
      },
      {
        title: "Image",
        name: "image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "Preço",
        name: "preco",
        type: "number",
        validation: Rule => Rule.required()
      },
      {
        title: "Peso",
        name: "peso",
        type: "number",
        validation: Rule => Rule.required()
      }
    ]
  }