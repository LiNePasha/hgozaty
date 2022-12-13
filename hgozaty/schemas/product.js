
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pro',
      title: 'Pro',
      type: 'array',
      of: [
          {
            name: 'pro',
            title: 'Pro',
            type: 'string',
          },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
          options: {
            hotspot: true,
          },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'categoryTitle',
      title: 'CategoryTitle',
      type: 'string',
    },
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name:'unitsSpace',
      title: 'UnitsSpace',
      type: 'string',
    },
    {
      name:'typesUnits',
      title: 'TypesUnits',
      type: 'string',
    },
    {
      name:'payment',
      title: 'Payment',
      type: 'string',
    }
  ]
}
