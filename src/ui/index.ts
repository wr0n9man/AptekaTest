import styled from 'styled-components/native';
import {colors} from '~/theme';

export const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.black};
  text-align: center;
`;

export const Title = styled(Text)`
  font-size: 24px;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  padding: 10px;
  background-color: ${colors.white};
`;
