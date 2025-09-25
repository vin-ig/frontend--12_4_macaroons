import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phoneFormatter'
})
export class PhoneFormatterPipe implements PipeTransform {

    transform(value: string): string {
        // 375293689868 -> +375 (29) 368-98-68
        return value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
    }

}
