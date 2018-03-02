import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

@HostBinding('class.open') get opened(){
  return this.isOpen;
}

@HostListener('click') open(){
 this.isOpen=true;
 console.log('KLIK');
}

@HostListener('mouseleave') close(){
  this.isOpen=false;
  console.log('MouseLeave');
}
private isOpen=false;

}
