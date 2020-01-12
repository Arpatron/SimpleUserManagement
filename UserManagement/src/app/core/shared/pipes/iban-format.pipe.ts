import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ibanFormat' })
export class IbanFormatPipe implements PipeTransform{
    transform(value: string): string {
         // remove existing spaces
         let result: string = value.replace(" ", "");
         // place a "-"" after every 4th character
         result = result.replace(/(.{4})/g, "$1-").slice(0, -1);
        return result;
    }
}