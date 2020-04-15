import inquirer from 'inquirer';
import { HandleTemplates } from '../../../handleTemplates';
import * as templates from '../templates';
import { functionParams } from './models';
import { getPaths } from './paths';
import { addStucco } from './stucco';
import { getCollection } from './collection';
import { AutocompleteInputPrompt } from '../../../../utils';

export const sourced = async ({ resolverParentName, resolverField, rootTypes }: functionParams) => {
  const { resolverPath, collectionsPath, basePath, resolverLibPath } = getPaths(resolverParentName, resolverField);
  const collection = await getCollection(collectionsPath, resolverField, rootTypes);
  const resolverType = await AutocompleteInputPrompt(['sourced'], {
    name: 'resolverType',
    message: `Specify resolver type`,
  });
  const source = await AutocompleteInputPrompt(
    rootTypes.map((rt) => rt.name),
    {
      message: 'specify source Type',
      name: 'source',
    },
  );
  if (resolverType === 'sourced') {
    HandleTemplates.action({
      content: templates.sourcedResolver({
        field: resolverField,
        resolverParent: resolverParentName,
        collection,
        source: rootTypes.find((rt) => rt.name === source)!,
      }),
      path: resolverPath,
      type: 'add',
    });
  }
  addStucco({ basePath, stuccoResolverName: `${resolverParentName}.${resolverField.name}`, resolverLibPath });
};
