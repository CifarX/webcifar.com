import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import testimonial from './testimonial';
import team from './team';
import project from './project';

export default createSchema({
  name: 'wc-studio',
  types: schemaTypes.concat([testimonial, team, project]),
});
