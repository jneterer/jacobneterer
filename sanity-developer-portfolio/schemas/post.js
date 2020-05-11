export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['https']
        })
      },
      {
        name: 'datePosted',
        title: 'Date Posted',
        type: 'date',
        options: {
          dateFormat: 'MM-DD-YYYY',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'active',
        title: 'Active',
        type: 'boolean',
        options: {
          layout: 'checkbox'
        }
      },
      {
        name: 'featuredPost',
        title: 'Featured Post',
        type: 'boolean',
        options: {
          layout: 'checkbox'
        }
      }
    ]
  }
  