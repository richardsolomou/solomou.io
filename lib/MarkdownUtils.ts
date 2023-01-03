import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import rehypeGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkUnwrapImages from 'remark-unwrap-images';
import { unified } from 'unified';

export class MarkdownUtils {
  /**
   * Convert body markdown to HTML
   * @param markdown - body markdown
   * @returns body HTML
   */
  static async bodyToHTML(markdown: string) {
    // Remove title from body
    const titleExp = /^# (.*$)/gim;
    const bodyWithoutTitle = markdown.replace(titleExp, '').trim();

    // Remove cover image from body
    const coverImageExp = /!\[cover\]\((.*)\)/gim;
    const bodyWithoutCoverImage = bodyWithoutTitle.replace(coverImageExp, '').trim();

    const vfile = await unified()
      .use(remarkParse)
      .use(remarkBreaks)
      .use(remarkUnwrapImages)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeGfm)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'append' })
      .use(rehypeStringify)
      .use(rehypeCodeTitles)
      .use(rehypeHighlight)
      .process(bodyWithoutCoverImage);

    return vfile.value.toString();
  }

  /**
   * Extract title from markdown
   * @param markdown - body markdown
   * @returns title
   */
  static async titleToHTML(markdown: string) {
    const vfile = await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(markdown);

    // Only keep first heading
    const titleExp = /^<h1>(.*)<\/h1>/gim;
    const titleMatches = titleExp.exec(vfile.value.toString());

    return titleMatches?.[1].trim() || '';
  }

  /**
   * Extract cover image from post body
   * @param body - body markdown
   * @returns cover image URL
   */
  static extractCoverImage(body: string) {
    // Find image with alt text "cover"
    const coverImageExp = /!\[cover\]\((.*)\)/gim;
    const matches = coverImageExp.exec(body);

    return matches?.[1].trim() || '';
  }

  /**
   * Extract title from post body
   * @param body - body markdown
   * @returns title
   */
  static extractTitle(body: string) {
    const titleExp = /^# (.*$)/gim;
    const matches = titleExp.exec(body);

    return matches?.[1].trim() || '';
  }
}
