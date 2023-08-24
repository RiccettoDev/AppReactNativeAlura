import {useState, useEffect} from 'react';

import {loadProducers} from '../services/loadData';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const returned = loadProducers();
    setTitle(returned.title);
    setList(returned.list);
  }, []);

  return [title, list];
}
