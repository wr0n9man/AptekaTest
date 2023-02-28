import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '~/hooks';
import {fetchPost} from '~/store';
import {LoaderWrapper, Title, Text, Wrapper} from '~/ui';

interface IPostScreen {
  route: {
    params: {
      id: number;
    };
  };
}

export const PostScreen = ({
  route: {
    params: {id},
  },
}: IPostScreen) => {
  const dispatch = useAppDispatch();
  const {
    currentPost: {data, isLoading, error},
  } = useAppSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <ActivityIndicator size={'large'} />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      {error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <View>
          <Title>{data?.title}</Title>
          <Text>{data?.body}</Text>
        </View>
      )}
    </Wrapper>
  );
};
