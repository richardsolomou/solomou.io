import { SvgIcon, SvgIconProps } from '@mui/material';

export function X(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m2.842 2.88 7.037 10.26-6.888 7.98h1.526l6.036-6.998 4.8 6.998h5.767l-7.353-10.718 6.489-7.522h-1.522l-5.642 6.536L8.608 2.88H2.842Zm1.822.96h3.439l11.194 16.32H15.86L4.664 3.84Z"
        />
      </svg>
    </SvgIcon>
  );
}
