import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlight implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor:string = 'black';
    @HostListener('mouseenter') mouseover(eventData: Event){
       // this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
       this.backgroundColor ='blue';
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
       // this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','red');
        this.backgroundColor = 'red';
    }
    

    constructor(private eleRef: ElementRef, private rederer: Renderer2 ){
    }
    ngOnInit(){
       //  this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
       // this.rederer.setStyle(this.eleRef.nativeElement,'color','white');
    }
}