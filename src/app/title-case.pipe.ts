// File: tile-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    
    
    if (!value) return null; // Validation emptry or null value

    let words = value.split(' '); // generate words array from value

    words.forEach((element, index, words) => {

      if(this.isPreposition(element.toLowerCase()) && index != 0) {
        words[index] = element.toLowerCase();
      }
      else {
        words[index] = this.toTitleCase(element);
      }

    });

    return words.join(' ');
  }

  private isPreposition(word: string) : boolean {
    const prepositions = [
      'aboard',       'about',      'above',      'across',      'after',
      'against',      'along',      'amid',       'among',       'anti',
      'around',       'as',         'at',         'before',      'behind',
      'below',        'beneath',    'beside',     'besides',     'between',
      'beyond',       'but',        'by',         'concerning',  'considering',
      'despite',      'down',       'during',     'except',      'excepting',
      'excluding',    'following',  'for',        'from',        'in',
      'inside',       'into',       'like',       'minus',       'near',
      'of',           'off',        'on',         'onto',        'opposite',
      'outside',      'over',       'past',       'per',         'plus',
      'regarding',    'round',      'save',       'since',       'than',
      'through',      'to',         'toward',     'towards',     'under',
      'underneath',   'unlike',     'until',      'up',          'upon',
      'versus',       'via',        'with',       'within',      'without', 'the'
    ];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase (word: string) : string {
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
  }
}

