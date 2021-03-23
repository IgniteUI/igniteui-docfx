---
title: 계층 그리드 로드 온디맨드 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Hierarchical Grid provides the necessary tools to load data on demand for each child grid that is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid component, Angular Hierarchical Data Table component, Angular Hierarchical Grid control, Angular Hierarchical Data Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Data Table, Hierarchical Grid, Hierarchical Data Table
_language: kr
---

### 계층 그리드 로드 온디맨드

Ignite UI for Angular [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)는 서버에서 검색할 최소 데이터를 요청하여 신속하게 렌더링할 수 있으므로 사용자가 뷰에서 결과를 볼 수 있고 표시되는 데이터를 대화형으로 조작할 수 있습니다. 초기에는 루트 그리드의 데이터만 검색하고 렌더링되며 사용자가 하위 그리드를 포함한 행을 확장 한 후에야 특정 하위 그리드의 데이터를 얻게 됩니다. 로드 온디맨드라고 하는 이 메커니즘은 모든 원격 데이터와 작동하도록 쉽게 설정할 수 있습니다.


이 항목에서는 이미 사용 가능한 원격 oData v4 서비스와 통신하는 원격 서비스 공급자를 만들어 로드 온디맨드를 설정하는 방법을 설명합니다. 아래는 작업 데모이며 단계별로 작성 순서를 표시합니다.


#### 데모


<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod" >
</code-view>

<div class="divider--half"></div>

### 원격 서비스 공급자

먼저 서비스 공급자를 준비하여 계층 그리드에 필요한 데이터를 얻습니다.

#### 기본 데이터 얻기

브라우저가 제공하는 XMLHttpRequest 인터페이스를 사용하여 HTTP 프로토콜을 통해 백엔드 서비스와 통신합니다. 이 작업을 보다 쉽게 실행하기 위해 단순화된 클라이언트 HTTP API를 제공하는 Angular의 [`HttpClient`](https://angular.io/api/common/http/HttpClient) 모듈을 사용합니다. 이러한 방식으로 데이터를 얻기 위해서는 서비스의 간단한 메소드가 필요합니다.


```typescript
public getData(dataState): Observable<any[]> {
    return this.http.get(this.buildUrl(dataState)).pipe(
        map(response => response['value']),
    );
}
```

`this.http`는 `HttpCLient`모듈에 대한 참조가 되며, `buildUrl()`은 얻은 데이터를 기반으로 url을 생성하는 메소드가 됩니다. 비동기적으로 실행되기 때문에 응답을 매핑하여 결과 값만 얻고 Observable을 반환합니다. 그렇게 하면 나중에 서브스크라이브하고 애플리케이션으로 더 많은 처리를 하여 그리드에 전달할 수 있습니다.

#### 요청 url 작성하기

다음으로 GET 요청에 대한 URL을 작성하는 방법을 정의합니다. 메인 그리드 뿐만 아니라 그 안에 있는 모든 하위 그리드의 데이터도 얻을 수 있습니다. 루트 수준에 대해서는 `https://services.odata.org/V4/Northwind/Northwind.svc/`의 `Customers` 데이터를 사용하고 하위 수준에 대해서는 `Order` 및 `Order_Details`를 사용합니다. 모델은 애플리케이션마다 다르며 여기에서는 다음의 모델을 사용합니다:

![Dragging](../../images/hgrid-database.jpg)

 가장 먼저 필요한 것은 원하는 그리드 데이터, 상위 행의 기본 키 및 고유 ID를 어디서 얻을 수 있는지 결정하는 테이블의 `key`입니다. `IDataState`라는 인터페이스에서 이 모든 것을 정의합니다. 예:

```typescript
export interface IDataState {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
}

//...
public buildUrl(dataState: IDataState): string {
    let qS = "";
    if (dataState) {
        qS += `${dataState.key}?`;

        if (!dataState.rootLevel) {
            if (typeof dataState.parentID === "string") {
                qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
            } else {
                qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
            }
        }
    }
    return `${this.url}${qS}`;
}
//...
```

#### 결과

마지막으로 `remote-lod.service.ts`는 다음과 같이 됩니다:


```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IDataState {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
}

@Injectable()
export class RemoteLoDService {
    url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState: IDataState): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response['value'])
        );
    }

    public buildUrl(dataState: IDataState): string {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}
```

### 계층 그리드 설정

다음으로 계층 그리드를 설정하고 원격 서비스 공급자에 연결합니다.

#### 템플릿 정의

먼저 계층 그리드 템플릿을 필요한 계층 수준으로 정의합니다. Customers의 루트 그리드 [`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey)는 최초 수준의 orders의 `CustomerID`이며, `OrderID` 와 각 order세부 정보의 `ProductID`입니다. 각 데이터베이스 테이블과 키를 가지고 초기 템플릿을 정의할 수 있습니다.

```html
<igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="false" [height]="'600px'" [width]="'100%'">
    <igx-column field="CustomerID" [hidden]="true"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false" >
        <igx-column field="OrderID" [hidden]="true"></igx-column>
        <igx-column field="ShipCountry"></igx-column>
        <igx-column field="ShipCity"></igx-column>
        <igx-column field="ShipAddress"></igx-column>
        <igx-column field="OrderDate"></igx-column>
        <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false" >
            <igx-column field="ProductID" [hidden]="true"></igx-column>
            <igx-column field="Quantity"></igx-column>
            <igx-column field="UnitPrice"></igx-column>
            <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

템플릿에는 한 가지 부족한 것이 있는데 루트 수준의 계층 그리드와 최종적으로 하위 데이터가 필요합니다. `#hGrid` 참조를 사용할 수 있으므로 나중에 코드에서 서비스로부터 데이터를 얻은 후에 루트 그리드의 데이터를 간단하게 설정할 수 있습니다. 확장된 하위에 대한 데이터 설정 방법은 약간 다릅니다.

처음으로 행이 확장되면 새로운 하위 `IgxHierarchicalGrid`가 렌더링되며 새롭게 생성된 그리드에 대한 참조를 가져와 데이터를 설정해야 합니다. 그래서 각 [`IgxRowIsland`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html) 컴포넌트는 특정 행 아일랜드에 대해 새로운 하위 그리드가 생성될 때 발생하는 [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated)  이벤트를 제공합니다. 이를 사용하여 새로운 그리드에 필요한 참조를 얻고 서비스에서 데이터를 요청하고 적용할 수 있습니다.

루트 수준, 행 아일랜드의 키, 상위 행의 기본 키 및 고유 식별자인 경우에만 정보가 필요하도록 서비스를 구축했기 때문에 모든 행 아일랜드에 대해 하나의 메소드를 사용할 수 있습니다. 이 모든 정보는 이벤트 인수에서 직접 액세스하거나 이벤트를 트리거하는 행 아일랜드에서 액세스할 수 있습니다. 

`gridCreated`를 사용하는 메소드의 이름을 지정합니다. [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) 이벤트는 [`owner`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#owner) 및 새로운 하위 [`grid`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#grid)성으로 행 아일랜드에 대해 참조하는 [`parentID`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#parentid) 속성을 제공하므로 첫 번째 인수로 전달됩니다. 상위 행의 `primaryKey`에 대한 정보는 없지만 바인딩한 행 아일랜드에 따라 두 번째 인수로 간단하게 전달할 수 있습니다. 

`hierarchical-grid-lod.component.html`템플릿 파일은 다음과 같이 변경됩니다:

```html
<igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="false" [height]="'600px'" [width]="'100%'">
    <igx-column field="CustomerID" [hidden]="true"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false" (onGridCreated)="gridCreated($event, 'CustomerID')">
        <igx-column field="OrderID" [hidden]="true"></igx-column>
        <igx-column field="ShipCountry"></igx-column>
        <igx-column field="ShipCity"></igx-column>
        <igx-column field="ShipAddress"></igx-column>
        <igx-column field="OrderDate"></igx-column>
        <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false" (onGridCreated)="gridCreated($event, 'OrderID')">
            <igx-column field="ProductID" [hidden]="true"></igx-column>
            <igx-column field="Quantity"></igx-column>
            <igx-column field="UnitPrice"></igx-column>
            <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

#### 서비스 연결

마지막 단계 중 하나는 이전에 생성된 서비스를 계층 그리드에 연결하는 것입니다. `Injectable`로 정의했기 때문에 애플리케이션에 공급자로 전달할 수 있습니다. `ViewChild` 쿼리를 사용하여 데이터를 설정함으로써 루트 그리드에 대한 참조도 얻을 수 있습니다:

````TypeScript
@Component({
    providers: [RemoteLoDService],
    selector: "app-hierarchical-grid-lod",
    styleUrls: ["./hierarchical-grid-lod.component.scss"],
    templateUrl: "./hierarchical-grid-lod.component.html"
})
export class HierarchicalGridLoDSampleComponent {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }
}
````

서비스에서 데이터를 요청하고 할당하기 전에 그리드가 렌더링되는지 확인하기 위해 `AfterViewInit` 라이프 사이클 후크를 사용합니다. 상위가 없으므로 `rootLevel`은 `true`이며 그 키가 서비스의 `getData`에만 전달될 수 있습니다. 서브스크라이브할 필요가 있는 observable을 반환합니다:

````TypeScript
public ngAfterViewInit() {
    this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
        this.hGrid.data = data;
        this.hGrid.cdr.detectChanges();
    });
}
````

다음으로 생성된 새로운 하위 그리드의 데이터를 요청하는 `gridCreated` 메소드를 작성해야 합니다. 루트 수준 그리드 데이터를 얻는 것과 동일하며 여기에서는 `parentID` 및 `parentKey` 등의 더 많은 정보를 전달해야 합니다. `rootLevel`은 모든 하위에 대해 `false`가 됩니다:

````TypeScript
public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
    const dataState = {
        key: event.owner.key,
        parentID: event.parentID,
        parentKey: _parentKey,
        rootLevel: false
    };
    this.remoteService.getData(dataState).subscribe(
        (data) => {
            event.grid.data = data;
            event.grid.cdr.detectChanges();
        }
    );
}
````

이것으로 어플리케이션의 설정이 거의 완료되었습니다. 마지막 단계는 사용자가 빈 그리드를 표시하는 대신에 사용자에게 데이터가 아직 로드 중임을 알려 사용자 환경을 개선하는 것을 목표로 합니다. [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)는 그리드가 비어 있는 동안 표시할 수 있는 로딩 인디케이터를 지원합니다. 새로운 데이터를 가져오면 로딩 인디케이터가 비표시되고 데이터가 렌더링됩니다. 

#### 로딩 인디케이터 설정

[`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)는 데이터가 없는 동안 [`isLoading`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#isloading) 속성을 `true`로 설정하여 로딩 인디케이터를 표시할 수 있습니다. 데이터가 로딩될 때까지 루트 그리드에 미리 설정해야 하며 새로운 하위 그리드를 만들 때도 설정해야 합니다. 템플릿에서 항상 `true`로 설정할 수 있지만, `false`로 설정하여 서비스가 빈 배열을 반환하면 비표시로 하여 데이터가 없는 그리드를 표시할 수 있습니다.

이 경우, `hierarchical-grid-lod.component.ts` 의 최종 버전은 다음과 같습니다:

````TypeScript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import {
    IGridCreatedEventArgs,
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent
} from "igniteui-angular";
import { RemoteLoDService } from "../services/remote-lod.service";

@Component({
    providers: [RemoteLoDService],
    selector: "app-hierarchical-grid-lod",
    styleUrls: ["./hierarchical-grid-lod.component.scss"],
    templateUrl: "./hierarchical-grid-lod.component.html"
})
export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        this.hGrid.isLoading = true;
        this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
            this.hGrid.isLoading = false;
            this.hGrid.data = data;
            this.hGrid.cdr.detectChanges();
        });
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
````

### API 참조

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)

### 추가 리소스

<div class="divider--half"></div>

* [계층 그리드 컴포넌트](hierarchical-grid.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
