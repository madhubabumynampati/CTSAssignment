import {
  Directive,
  ElementRef,
  PipeTransform,
  Pipe,
} from "@angular/core";

@Directive({
  selector: "[changeColor]",
})
export class ChangeColorDirective {
  //   @HostListener("keypress", ["$event"])

  constructor(private elRef: ElementRef) {
    
    
  }
  ngAfterViewInit(){
    if(this.elRef.nativeElement.innerHTML.length>10){
        this.elRef.nativeElement.style.borderBottom = "1px solid red";
    }
  }
}

@Pipe({ name: "phoneToUs" })
export class PhoneToUs implements PipeTransform {
  transform(value) {
    //  Math.floor(value);

    if (value) {
      value = value.toString();
      let formattedNumber = "+1 ";
      var i = 0;
      for (; i < Math.floor(value.length / 3) - 1; i++) {
        formattedNumber = formattedNumber + value.substr(i * 3, 3) + "-";
      }
      return formattedNumber + value.substr(i * 3);
    } else {
      return value;
    }
  }
}
