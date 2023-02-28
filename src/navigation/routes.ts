import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  ParamListBase,
  useNavigation as useBottomTabNavigation,
} from '@react-navigation/native';

export enum Routes {
  Main = 'Main',
  Profile = 'Profile',
  Posts = 'Posts',
  Post = 'Post',
}

export const useNavigation = () =>
  useBottomTabNavigation<BottomTabNavigationProp<ParamListBase, Routes>>();
