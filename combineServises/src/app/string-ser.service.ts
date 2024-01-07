import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringSerService {
  public count: number = 0;
  public CountCapital(nameString: string) {

    for (let i = 0; i < nameString.length; i++) {
      if (nameString[i] >= 'A' && nameString[i] <= 'Z') {
        this.count += 1;
        console.log(this.count);
      }
    } return this.count
  }
}
