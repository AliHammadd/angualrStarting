import { Directive, OnInit, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlight implements OnInit{
    constructor(private eleRef: ElementRef, private rederer: Renderer2 ){
    }
    ngOnInit(){
        this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
        this.rederer.setStyle(this.eleRef.nativeElement,'color','white');
    }
}