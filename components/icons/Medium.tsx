import { SvgIcon, SvgIconProps } from '@mui/material';

export function Medium(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#a)">
          <path
            fill="currentColor"
            d="M6.8 5.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Zm10.8.8c-.42 0-.836.155-1.225.457-.388.301-.74.743-1.038 1.3a7.682 7.682 0 0 0-.693 1.947A10.72 10.72 0 0 0 14.4 12.4c0 .788.083 1.568.244 2.296.16.728.396 1.39.693 1.947.297.557.65.999 1.038 1.3.389.302.805.457 1.225.457.42 0 .836-.155 1.225-.457.388-.301.74-.743 1.038-1.3a7.681 7.681 0 0 0 .693-1.947c.161-.728.244-1.508.244-2.296 0-.788-.083-1.568-.244-2.296a7.682 7.682 0 0 0-.693-1.947c-.297-.557-.65-.999-1.038-1.3-.389-.302-.805-.457-1.225-.457Zm5.2.8c-.318 0-.623.548-.849 1.523-.225.975-.351 2.298-.351 3.677 0 1.38.126 2.702.351 3.677.226.975.53 1.523.849 1.523.318 0 .623-.548.848-1.523.226-.975.352-2.298.352-3.677 0-1.38-.126-2.702-.352-3.677-.224-.975-.53-1.523-.848-1.523Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}