import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component( {
  selector: 'app-pagnation',
  templateUrl: './pagnation.component.html',
  styleUrls: [ './pagnation.component.css' ]
} )
export class PagnationComponent implements OnInit
{

  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit()
  {
  }

  onPrev(): void
  {
    this.goPrev.emit( true );
  }

}
