/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { Box, Dialog, FormHelperText } from '@mui/material';
import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

export const PostImage: React.FC<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (
  props,
) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ py: 2 }}>
      <img
        {...props}
        style={{ display: 'flex', margin: '0 auto', maxWidth: '100%', cursor: 'zoom-in', borderRadius: 10 }}
        onClick={() => setOpen(true)}
      />
      {props.alt && <FormHelperText sx={{ textAlign: 'center' }}>{props.alt}</FormHelperText>}

      <Dialog maxWidth="xl" open={open} onClose={() => setOpen(false)}>
        <img {...props} onClick={() => setOpen(false)} style={{ cursor: 'zoom-out' }} />
      </Dialog>
    </Box>
  );
};
