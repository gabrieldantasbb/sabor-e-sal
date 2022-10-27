export default {
    title: 'Receitas',
    name: 'receitas',
    type: 'document',
    fields: [{
        title: 'Titutlo da receita',
        name: 'receitaName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'receitaDesc',
        type: 'text',
        options: {
          maxLength: 1000,
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
        title: "Receita Image",
        name: "receitaImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ]
  }