import React, { memo } from 'react';

import Icon from '../icon';
import { IconProps } from '../types';

export const ChevronRightIcon = memo<IconProps>(props => (
  <Icon {...props}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.55 14.375L12.5 9.425C12.5833 9.325 12.6458 9.22917 12.6875 9.1375C12.7292 9.04583 12.75 8.94167 12.75 8.825C12.75 8.70833 12.7292 8.60417 12.6875 8.5125C12.6458 8.42083 12.5833 8.325 12.5 8.225L7.525 3.25C7.35833 3.08333 7.15417 3 6.9125 3C6.67083 3 6.46667 3.08333 6.3 3.25C6.13333 3.41667 6.05417 3.625 6.0625 3.875C6.07083 4.125 6.15833 4.33333 6.325 4.5L10.65 8.825L6.3 13.175C6.13333 13.3417 6.05 13.5417 6.05 13.775C6.05 14.0083 6.13333 14.2083 6.3 14.375C6.46667 14.5417 6.675 14.625 6.925 14.625C7.175 14.625 7.38333 14.5417 7.55 14.375Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));

ChevronRightIcon.displayName = 'ChevronRightIcon';
