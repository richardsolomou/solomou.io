export class TagUtils {
  /**
   * Get the contrasting text color for a given background color
   * @param bgColor - background color
   * @returns color
   */
  static getContrastingTextColor(bgColor: string): string {
    // Convert the background color to RGB values
    const bgColorR = parseInt(bgColor.substring(1, 3), 16);
    const bgColorG = parseInt(bgColor.substring(3, 5), 16);
    const bgColorB = parseInt(bgColor.substring(5, 7), 16);

    // Calculate the luminance of the background color
    const bgLuminance = 0.2126 * bgColorR + 0.7152 * bgColorG + 0.0722 * bgColorB;

    // Return white or black, whichever provides better contrast
    return bgLuminance > 128 ? '#000000' : '#FFFFFF';
  }
}
