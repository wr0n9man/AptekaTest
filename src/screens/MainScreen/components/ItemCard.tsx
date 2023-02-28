import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';

import {IPost} from '~/models';
import {Routes, useNavigation} from '~/navigation';
import {Title, Text} from '~/ui';

const Item = styled.TouchableOpacity`
  height: 100px;
  padding: 10px 0;
  border: 0.5px solid black;
  overflow: hidden;
`;

export const ItemCard = memo(({item}: {item: IPost}) => {
  const {navigate} = useNavigation();

  const handlePress = useCallback(() => {
    navigate(Routes.Post, {id: item.id});
  }, [item.id, navigate]);

  return (
    <Item onPress={handlePress}>
      <Title numberOfLines={1}>{item.title}</Title>
      <Text numberOfLines={3}>{item.body}</Text>
    </Item>
  );
});
