import useJsonFetch from './UseJsonFetch';

const Fetch = (props) => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/'+props.type);

  return (
    <div>
      <ul>
        <li><b>{props.type}Fetch</b></li>
        <li>data: {data.data !== null ? String(data.data.status) : 'null'}</li>
        <li>loading: {String(data.loading)}</li>
        <li>error: {error === null ? 'null' : String(data.error)}</li>
      </ul>
    </div>
  );
};

export default Fetch;