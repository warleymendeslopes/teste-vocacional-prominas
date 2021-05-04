
    var faunadb = require('faunadb'),
    q = faunadb.query;
    var client = new faunadb.Client({ secret: 'fnAEIYQHSyACBNFxruglLbfNA4xLevXJPeiOL5g-' });

  //envia os dados para p banco de dados 
    var createP = client.query(
        q.Create(
          q.Collection('leads'),
          { data: { nome: 'warley mendes',
                    email: 'teste',
                    telefone:'(33)9 9999-9999'} }
        )
      )
      
    //verifica se os dados foram enviados com sucesso
      createP.then(function(response) {
        console.log(response.ref); // Logs the ref to the console.
      })

