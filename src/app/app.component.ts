import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-dev';
 
  async ngOnInit(): Promise<void> {
    console.log('HELLO MF !!');
  }

  switchJobBtnActive(id: string) {
    const allJobBtn = Array.from(document.getElementsByClassName('btnJob'));
    allJobBtn.forEach((element) => {
      let allBtnJobElem = element as HTMLSelectElement;
      allBtnJobElem.classList.remove('dHdZWh');
      allBtnJobElem.classList.add('gHbkvF');
    });

    const allJobSection = Array.from(document.getElementsByClassName('QgHxr'));
    allJobSection.forEach((element) => {
      let allBtnJobSec = element as HTMLSelectElement;
      allBtnJobSec.classList.add('hide-elem');
    });

    (
      document.getElementById(`panel-${id}`) as HTMLSelectElement
    ).classList.remove('hide-elem');
    (document.getElementById(`tab-${id}`) as HTMLSelectElement).classList.add(
      'dHdZWh'
    );
    (
      document.getElementById(`tab-${id}`) as HTMLSelectElement
    ).classList.remove('gHbkvF');

    const leftLine = document.getElementsByClassName(
      'left-line'
    )[0] as HTMLSelectElement;
    leftLine.classList.remove('fLsUSJ');
    leftLine.classList.remove('fLsUxN');
    leftLine.classList.remove('fLsVGd');
    switch (id) {
      case '0':
        leftLine.classList.add('fLsUSJ');
        break;
      case '1':
        leftLine.classList.add('fLsUxN');
        break;
      case '2':
        leftLine.classList.add('fLsVGd');
        break;
      default:
        leftLine.classList.add('fLsUSJ');
        break;
    }
  }
}
