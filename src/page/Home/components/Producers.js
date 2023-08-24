import React, {useEffect, useState} from 'react'; // useEffect and useState
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Producer from './Producer';

//import {loadProducers} from '../../../services/loadData';
import useProducers from '../../../hooks/useProducers';

export default function Producers({header: Header}) {
  //const [title, setTitle] = useState('');
  //const [list, setList] = useState([]);

  //useEffect(() => {                  //comented because created Hooks
  //const returned = loadProducers();
  //setTitle(returned.title);
  //setList(returned.list);
  //}, []);
  const [title, list] = useProducers();

  const HeaderList = () => {
    return (
      <>
        <Header />
        <Text style={styles.titleList}>{title}</Text>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item}) => <Producer {...item} />}
        keyExtractor={({id}) => id}
        ListHeaderComponent={HeaderList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleList: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
