import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery'
import { FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import {NgbModule, NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import { AbsolutePipe } from './absolute.pipe';
import { AppStartComponent } from './app-start/app-start.component';
import { FundrasierComponent } from './fundrasier/fundrasier.component';
import { FundrasierDetailsComponent } from './fundrasier-details/fundrasier-details.component';

const appRoutes:Routes = [
  {path:'',component:AppStartComponent, children:[
    {path:"collections",component:WorkspaceComponent},
    {path:"fundrasier",component:FundrasierComponent}
  ]
}

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WorkspaceComponent,
    SelectBoxComponent,
    EventModalComponent,
    AbsolutePipe,
    AppStartComponent,
    FundrasierComponent,
    FundrasierDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[EventModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
