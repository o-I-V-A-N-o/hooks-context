import { useState, useEffect } from 'react';
import Details from './Details';

function List() {
  const [list, setList] = useState([]);
  const [listId, setListId] = useState(0);
  const [status, setStatus] = useState();
  const [detail, setDetail] = useState();

  useEffect(() => {
    
    list.forEach(item => {
      if (item.id == listId) {
        setStatus('');
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + listId + '.json')
        .then(response => response.json())
        .then(data => setDetail(data))
        .catch(error => console.error(error));
      }
    });
  }, [listId]);

  useEffect(() => {
    updateList();
  }, [status]);

  const updateList = () => {
    
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <div className="lists">
        <h1>Lists</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => setListId(item.id)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lists">
        {detail != null && <Details id={listId} detail={detail}/>
        }
      </div>
    </div>
  );
}

export default List;
