import { Component,  ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private modalService: NgbModal) {}


  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }


}
