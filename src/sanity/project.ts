// sanity/schema
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'description'
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true 
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              },
            ]
          }
    ]
}