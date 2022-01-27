import React from 'react';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Client Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'org',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 10,
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
      org: 'org',
    },
    prepare(selection) {
      const { name, title, org } = selection;
      return {
        title: name,
        subtitle: `${title} @ ${org}`,
        media: <>📝</>,
      };
    },
  },
};
