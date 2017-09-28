const db = require('../repository')

export const route = {
  method: 'post',
  path: '/category',
  type: 'json',
};

export default async (req) => {
  console.log(req.body.name)
  const category = await db.categories().save(req.body.name)
  return category;
};

