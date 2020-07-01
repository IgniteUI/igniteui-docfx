---
title: Combo Remote Binding
_description: The igx-combo exposes API that allows to bind a combo to a remote service and retrieve data on demand.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Combo Remote Binding
---

## Combo Remote Binding
<p class="highlight">
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) exposes API that allows to bind a combo to a remote service and retrieve data on demand.
</p>
<div class="divider"></div>

### Demo
The sample below demonstrates remote binding using combo API - defining [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey), and using [onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) to load new chunk of remote data:
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-remote-sample" frameborder="0" seamless width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-remote" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

### Usage
To get started with the Ignite UI for Angular Combo import the `IgxComboModule` in the **app.module.ts** file. In this demo a remote service is used for server requests, that is why in addition we need to include the Angular **HttpClientModule**:

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    ...
    imports: [..., IgxComboModule, HttpClientModule],
    ...
})
export class AppModule {}
```

#### Define Remote Service

When binding combo to remote data we need to have available service that will load data on demand from a server. The code below defines a simple service that has a `getData()` method, which receives combo's current state information and returns a data as an observable. What the combo exposes is a `virtualizationState` property that gives current state of the combo - first index and the number of items that needs to be loaded.
The service should inform the combo for the total items that are on the server - a value that needs to be set to the `totalItemCount` [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) property, in order to show properly the scroll size.

```typescript
// remote.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any {
        // Use combo current virtualization state and search text to build URL and request the new data.
    }
```

#### Binding Combo to Remote Service

When the data is returned from the service as an observable, then we can set it to the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) using the [`async`](https://angular.io/api/common/AsyncPipe) pipe:

```html
<igx-combo [data]="rData | async" [valueKey]="'ProductID'" [displayKey]="'ProductName'" 
    (onDataPreLoad)="dataLoading($event)" (onSearchInput)="searchInput($event)" (onOpening)="searchInput('')"></igx-combo>
```
Let's define the cases, when the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) will need to request new data:
    - when combo is initialized
    - when we scroll combo's list. Then combo will emit [onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) along with the new combo `virtualizationState`, which allows to make a new request to the remote service.
    - when we search in the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) then we need to make request to filter remote results.
    - when combo is opened we need to clear results from any previous filter operations.

Below are listed the handlers that listen to the already defined actions and execute requests to the server:

```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { RemoteService } from "../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "app-combo-remote",
    styleUrls: ["./combo-remote.component.scss"],
    templateUrl: "./combo-remote.component.html"
})
export class ComboRemoteComponent implements OnInit {

    public prevRequest: any;
    public rData: any;
    @ViewChild("remoteCombo", { read: IgxComboComponent }) public remoteCombo: IgxComboComponent;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.remoteCombo.virtualizationState, null, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            this.remoteCombo.virtualizationState,
            null,
            (data) => {
              this.remoteCombo.totalItemCount = data["@odata.count"];
              this.cdr.detectChanges();
        });
    }

    public searchInput(searchText) {
        this.remoteService.getData(this.remoteCombo.virtualizationState, searchText, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
        });
    }
}
```
> [!Note]
> Anytime new data is loaded, we update `totalItemCount` [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) property, in order to have proper size of the list's scroll bar. In that case the service returns total size using the property `@odata.count`.

> [!Note]
> Service needs to be included as a provider.

#### Handling Selection
When using a combo bound to remote data, loaded in chunks, dealing with a more complex data type (e.g. objects), it is necessary to define a `valueKey`. As stated in the [selection topic](combo.md#selection), when no `valueKey` is specified, the combo will try to handle selection by **equality (===)**. Since the objects that will be marked as selected will **not be the same** as the object that are continuously loaded, the selection will fail.
When binding the combo to remote data, make sure to specify a `valueKey`, representing a property that is unique to each item.

When the combo is bound to remote data, setting value/selected items through API will only take into account the items that are **loaded in the current chunk**. If you set an initial value, make sure those specific items are loaded before selecting.

## Additional Resources
<div class="divider--half"></div>

* [Combo Usage](combo.md)
* [Combo Features](combo_features.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)