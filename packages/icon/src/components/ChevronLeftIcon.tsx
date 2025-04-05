import React, { memo } from 'react';

import Icon from '../icon';
import { IconProps } from '../types';

export const ChevronLeftIcon = memo<IconProps>(props => (
  <Icon {...props}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.45 14.375L5.5 9.425C5.41667 9.325 5.35417 9.22917 5.3125 9.1375C5.27083 9.04583 5.25 8.94167 5.25 8.825C5.25 8.70833 5.27083 8.60417 5.3125 8.5125C5.35417 8.42083 5.41667 8.325 5.5 8.225L10.475 3.25C10.6417 3.08333 10.8458 3 11.0875 3C11.3292 3 11.5333 3.08333 11.7 3.25C11.8667 3.41667 11.9458 3.625 11.9375 3.875C11.9292 4.125 11.8417 4.33333 11.675 4.5L7.35 8.825L11.7 13.175C11.8667 13.3417 11.95 13.5417 11.95 13.775C11.95 14.0083 11.8667 14.2083 11.7 14.375C11.5333 14.5417 11.325 14.625 11.075 14.625C10.825 14.625 10.6167 14.5417 10.45 14.375Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));

ChevronLeftIcon.displayName = 'ChevronLeftIcon';
