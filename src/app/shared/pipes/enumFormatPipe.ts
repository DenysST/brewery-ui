import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumFormat'
})
export class EnumFormatPipe implements PipeTransform {
  transform(value?: string): string {
    if (value) {
      const words = value.split('_');
      const formattedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      });
      return formattedWords.join(' ');
    }
    return '';
  }
}
