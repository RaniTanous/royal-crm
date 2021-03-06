import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();

    let fixed = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
    const period = fixed[fixed.length - 1] === '.' ? '' : '.';
    return fixed + period;
  }
}
