import useSWR from 'swr';
import Layout from '../components/layout';
import DataRow from '../components/data-row';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Home = () => {
  const { data, error } = useSWR('/api/customers', fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      <h1>Exibir todos os dados do banco</h1>

      <div className="table">

        {data ? (
          data.map((d) => (
            <DataRow
              //key={d.ref['@ref'].id}
              //id={d.ref['@ref'].id}
              firstName={d.data.nome}
              lastName={d.data.email}
              telephone={d.data.telefone}
            />
          ))
        ) : (
          <>
            <DataRow loading />
            <DataRow loading />
            <DataRow loading />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;