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
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit()
  {
  }

  onPrev(): void
  {
    this.goPrev.emit( true );
  }

  onNext(): void
  {
    this.goNext.emit( true );
  }

  onPage( n: number ): void
  {
    this.goPage.emit( n );
  }

  totalPages(): number
  {
    return Math.ceil( this.count / this.perPage ) || 0;
  }

  isLastPage(): boolean
  {
    return this.perPage * this.perPage >= this.count;
  }

}
