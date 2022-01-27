export default {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sortPriority',
      title: 'Sort Priority',
      type: 'string',
      description: 'Choose One of them: P1, P2, P3...',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
  },
};
