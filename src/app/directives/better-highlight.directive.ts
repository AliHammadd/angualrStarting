import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlight implements OnInit{
    @Input() defaultColor :string = 'black';
    @Input() highlightColor: string = 'blue';
   
    @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;
    @HostListener('mouseenter') mouseover(eventData: Event){
       // this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
       this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
       // this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','red');
        this.backgroundColor = this.defaultColor;
    }
    

    constructor(private eleRef: ElementRef, private rederer: Renderer2 ){
    }
    ngOnInit(){
       //  this.rederer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
       // this.rederer.setStyle(this.eleRef.nativeElement,'color','white');
    }
}