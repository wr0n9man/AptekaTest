import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, ActivityIndicator} from 'react-native';
import {debounce} from 'lodash';

import {useAppDispatch, useAppSelector} from '~/hooks';
import {fetchPosts, postSlice} from '~/store';
import {ItemCard} from './components';
import {Input, LoaderWrapper, Wrapper} from '~/ui';

export const MainScreen = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const {
    filter,
    posts: {data, isListEmpty, isLoading, error},
  } = useAppSelector(state => state.postReducer);
  const {changeFilter} = postSlice.actions;

  const debouncer = useMemo(
    () =>
      debounce(({page, filter}) => dispatch(fetchPosts({page, filter})), 1000, {
        leading: true,
        trailing: false,
      }),
    [dispatch],
  );

  useEffect(() => {
    debouncer({page, filter});
  }, [debouncer, filter, page]);

  const handlePagination = useCallback(() => {
    !isListEmpty && setPage(prev => prev + 1);
  }, [isListEmpty]);

  return (
    <Wrapper>
      <Input
        value={filter}
        onChangeText={value => {
          setPage(1);
          dispatch(changeFilter(value.trim()));
        }}
        autoCapitalize="none"
        clearButtonMode="always"
      />

      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          removeClippedSubviews={true}
          style={{flex: 1}}
          data={data}
          renderItem={({item}) => <ItemCard item={item} />}
          keyExtractor={item => String(item.id)}
          onEndReached={handlePagination}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={isLoading ? null : <Text>list empty</Text>}
          ListFooterComponent={
            isLoading ? (
              <LoaderWrapper>
                <ActivityIndicator size={'large'} />
              </LoaderWrapper>
            ) : null
          }
        />
      )}
    </Wrapper>
  );
};
