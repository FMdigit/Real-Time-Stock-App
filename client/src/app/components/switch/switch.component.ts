import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent implements OnInit {
  @Input() isActive?: boolean;
  @Output() switchClick: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.isActive = !this.isActive;
    this.switchClick.emit(this.isActive);
  }
}
