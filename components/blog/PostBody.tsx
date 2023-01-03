import { Paper, Typography } from '@mui/material';
import parse, { Element, domToReact } from 'html-react-parser';

import { Color } from '../../lib/colors';
import { ExternalLink } from '../common/ExternalLink';
import { PostImage } from './PostImage';

export const PostBody: React.FC<{ body: string }> = ({ body }) => {
  return (
    <>
      {parse(body, {
        replace: (domNode) => {
          if (domNode instanceof Element && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(domNode.name)) {
            return (
              <Typography variant={domNode.name as any} color={Color.PurpleLight}>
                {domToReact(domNode.children)}
              </Typography>
            );
          }

          if (domNode instanceof Element && domNode.name === 'a') {
            return (
              <ExternalLink color="secondary" href={domNode.attribs['href']}>
                {domToReact(domNode.children)}
              </ExternalLink>
            );
          }

          if (domNode instanceof Element && domNode.name === 'img') {
            return <PostImage src={domNode.attribs['src']} alt={domNode.attribs['alt']} />;
          }

          if (domNode instanceof Element && domNode.name === 'pre') {
            return (
              <Paper component="pre" {...domNode.attribs} sx={{ p: 2, overflow: 'hidden' }}>
                {domToReact(domNode.children)}
              </Paper>
            );
          }
        },
      })}
    </>
  );
};
