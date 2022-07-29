import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {

  constructor(private modalService: NgbModal) {}
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
