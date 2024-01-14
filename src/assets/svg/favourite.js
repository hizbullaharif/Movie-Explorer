import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({fill}) {
  return (
    <Svg
      width={25}
      height={23}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.125 0C15.95 0 13.863 1.015 12.5 2.62 11.137 1.015 9.05 0 6.875 0 3.025 0 0 3.033 0 6.894c0 4.738 4.25 8.598 10.688 14.464L12.5 23l1.813-1.654C20.75 15.492 25 11.632 25 6.894 25 3.034 21.975 0 18.125 0zm-5.5 19.49l-.125.126-.125-.125C6.425 14.088 2.5 10.516 2.5 6.894c0-2.507 1.875-4.387 4.375-4.387 1.925 0 3.8 1.24 4.463 2.958h2.337c.65-1.717 2.525-2.958 4.45-2.958 2.5 0 4.375 1.88 4.375 4.387 0 3.622-3.925 7.194-9.875 12.597z"
        fill={fill}
      />
    </Svg>
  );
}

export default SvgComponent;
