import { Component } from '@angular/core';
import {
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  ViewContainerRef,
} from '@angular/core/src/linker';
import { ViewChild } from '@angular/core/src/metadata/di';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('iframe') iframe: ElementRef;
  doc: any;
  compRef: ComponentRef<HelloComponent>;

  // name = 'Set iframe source';
  // url: string = "https://angular.io/api/router/RouterLink";
  // urlSafe: SafeResourceUrl;
  // iContent: string = `<p style='color:blue;' >Hello world!some thing is wonder</p>`;

  // constructor(public sanitizer: DomSanitizer) { }
  constructor(
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(HelloComponent);
    this.compRef = this.vcRef.createComponent(compFactory);

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  onLoad() {
    this.doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow;
  }

  ngAfterViewInit() {
    this.onLoad(); // in Firefox state is uninitialized while
    // in Chrome is complete so i use `load` event for Firefox
  }

  ngOnDestroy() {
    if (this.compRef) {
      this.compRef.destroy();
    }
  }

  // ngOnInit() {
  // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  //}
}
