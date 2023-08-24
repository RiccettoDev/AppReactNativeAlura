import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Star from './Star';

export default function Stars({qtd: qtdBefore, editable = false, big = false}) {
  const [qtd, setQtd] = useState(qtdBefore);

  const RenderStars = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <Star
          key={i}
          onPress={() => setQtd(i + 1)}
          disabled={!editable}
          completed={i < qtd}
          big={big}
        />,
      );
    }

    return listStars;
  };

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});
