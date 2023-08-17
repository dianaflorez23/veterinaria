import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService} from './local-storage.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService
  ]
})
export class StorageModule {
  constructor( @Optional() @SkipSelf() parent : StorageModule){
    if(parent){
      throw new Error("core module cargado")
    }
  }
 }
