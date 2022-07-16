import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { SelectOnClickDirective } from './select-on-click.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selection: string ='';
    
  @HostListener('window:keydown',['$event'])
  onKeyPress($event: KeyboardEvent) {
      if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67)
      {
        navigator.clipboard.writeText(this.selection).then(() => {
      })  
      }
  }
 
  hide = true;
}
