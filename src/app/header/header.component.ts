import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }

  ngOnInit(): void {}
}
