import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

    transform(value: string, length: number): string {
        return value.slice(0, length) + (value.length < length ? '' : '...')
    }

}
