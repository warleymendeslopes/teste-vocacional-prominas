// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//conectando ao banco faunadb
var faunadb = require('faunadb'),
q = faunadb.query;
var client = new faunadb.Client({ secret: 'fnAEIYQHSyACBNFxruglLbfNA4xLevXJPeiOL5g-' });

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
