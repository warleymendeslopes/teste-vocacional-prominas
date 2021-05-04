// pages/api/customers/index.js
var faunadb = require('faunadb'),
q = faunadb.query;
var serverClient = new faunadb.Client({ secret: 'fnAEIYQHSyACBNFxruglLbfNA4xLevXJPeiOL5g-' });

export default async (req, res) => {
  try {
    const customers = await serverClient.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index('buscaleads') // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    // ok
    res.status(200).json(customers.data);
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};