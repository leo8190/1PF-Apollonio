import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNameAndSurname',
  standalone: true,
})
export class JoinNameAndSurname implements PipeTransform {

  transform(name: string, surname: string): string {
    return name + " " + surname;
  }

}