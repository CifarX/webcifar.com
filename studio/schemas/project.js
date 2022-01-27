export default {
  name: 'projects',
  title: 'projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Project Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Details Link',
    },
    {
      name: 'sortPriority',
      title: 'Sort Priority',
      type: 'string',
      description: 'Choose One of them: P1, P2, P3...',
    },
  ],
  orderings: [
    {
      title: 'priority',
      name: 'priorityAsc',
      by: [{ field: 'sortPriority', direction: 'asc' }],
    },
    {
      title: 'cratedAt',
      name: 'createdAtAsc',
      by: [
        {
          field: '_createdAt',
          direction: 'Asc',
        },
      ],
    },
  ],
};
