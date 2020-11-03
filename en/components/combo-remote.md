---
title: Combo Remote Binding
_description: The igx-combo exposes API that allows to bind a combo to a remote service and retrieve data on demand.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Combo Remote Binding
---

# Combo Remote Binding
<p class="highlight">
The Ignite UI for Angular Combo Component exposes an API that allows binding a combo to a remote service and retrieving data on demand.
</p>

## Demo
The sample below demonstrates remote binding using the [onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) property to load new chunk of remote data:

<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-remote-sample" frameborder="0" seamless="" width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-remote" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Usage
To get started with the Combo component, first you need to import the `IgxComboModule` in your **app.module.ts** file. In this demo, a remote service is used for server requests, therefore, we also need to include the `HttpClientModule`:

```typescript
import { IgxComboModule } from 'igniteui-angular';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        ...
        IgxComboModule, 
        HttpClientModule,
        ...
    ]
})
export class AppModule {}
```

### Define Remote Service
When binding a combo to remote data, we need to have an available service that will load data on demand from a server. The combo component exposes the [virtualizationState]({environment:angularApiUrl}/classes/igxcombocomponent.html#virtualizationstate) property which gives the current state of a combo - the first index and the number of items that need to be loaded. In order to show properly the scroll size, the [totalItemCount]({environment:angularApiUrl}/classes/igxcombocomponent.html#totalitemcount) property should have value that corresponds to the total items on the server.

The code below defines a simple service that has a `getData()` method, which receives combo's current state information and returns data as an observable:

```typescript
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

    // Use combo current virtualization state and search text to build URL and request the new data.
    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any { }
}
```

### Binding Combo to Remote Service
When data is returned from a service as an observable, we can set it to the combo component using the [async](https://angular.io/api/common/AsyncPipe) pipe:

```html
<igx-combo [data]="rData | async" 
           [valueKey]="'ProductID'" 
           [displayKey]="'ProductName'" 
           (onDataPreLoad)="dataLoading($event)"
           (onSearchInput)="searchInput($event)"
           (onOpening)="searchInput('')">
</igx-combo>
```

Here are some common cases when the combo component needs to request new data:
    - when the combo is initialized
    - when we scroll combo's list - it will emit `onDataPreLoad` along with the new combo `virtualizationState`, which allows making a new request to the remote service.
    - when searching in a combo - we need to make request to filter remote results.
    - when combo is opened - we need to clear the results from any previous filter operations.

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
> Anytime new data is loaded, we update the `totalItemCount` property, in order to have proper size of the list's scroll bar. In that case, the service returns total size using the property `@odata.count`.

> [!Note]
> A service needs to be included as a provider.

### Handling Selection
When using a combo bound to remote data loaded in chunks and dealing with a more complex data type (e.g. objects), it is necessary to define a `valueKey`. As stated in the [combo topic](combo.md#data-value-and-display-properties), when no `valueKey` is specified, the combo will try to handle selection by `equality (===)`. Since the objects that will be marked as selected will not be the same as the object that are continuously loaded, the selection will fail.

> [!Note]
> When binding a combo to remote data, make sure to specify a `valueKey`, representing a property that is unique to each item.

When the combo is bound to remote data, setting value/selected items through API will only take into account the items that are loaded in the current chunk. If you want to set an initial value, make sure those specific items are loaded before selecting.

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

## Additional Resources
<div class="divider--half"></div>

* [Combo Component](combo.md)
* [Combo Features](combo-features.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)