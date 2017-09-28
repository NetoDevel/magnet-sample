const db = require('../repository')

export const route = {
  method: 'put',
  path: '/category',
  type: 'json',
};

export default async (req) => {
  console.log(req.body.id, req.body.name)
  const category = await db.categories().update(req.body.id, req.body.name)
  return category;
};

