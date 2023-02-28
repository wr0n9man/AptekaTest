import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {colors} from '~/theme';

export const ProfileIcon = ({color = colors.grey}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM4.8 16.776C6.348 19.104 9 20.64 12 20.64C15 20.64 17.652 19.104 19.2 16.776C19.164 14.388 14.388 13.08 12 13.08C9.6 13.08 4.836 14.388 4.8 16.776Z"
      fill={color}
    />
  </Svg>
);
