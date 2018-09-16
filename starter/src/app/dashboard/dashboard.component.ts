import {AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewChecked{
  constructor() {
  }
  @ViewChildren("flipcard") flipcard;
  imgID: any = ["id936315116","id680917092","id173501312", "id936315116"];
  ngAfterViewChecked() {
    this.flipTheCard();
  }
  flipTheCard() {
    var flipcard = document.getElementsByClassName("flipcard");
    var i;
    // console.log("flipcard", flipcard);
    // for (i = 0; i < flipcard.length; i++) {
    //   flipcard[i].addEventListener("click", function() {
    //     console.log("this.classList", this.classList);
    //     this.classList.toggle("is-flipped");
    //   });
    // }
  }
  flip(i){
    // console.log(this.flipcard.toArray()[i].nativeElement.classList.toggle('is-flipped'));
    (this.flipcard.toArray()[i].nativeElement.classList.toggle('is-flipped'));
  }
}
