---
title: 계층 그리드 컴포넌트
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich hierarchical grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid component, Angular Hierarchical Grid control, Angular High Performance Hierarchical Grid, Hierarchical Grid
_language: kr
---
## 계층 그리드
<p class="highlight">Ignite UI for Angular Hierarchical Grid는 계층으로 구조화된 데이터를 표시하고 편집합니다. 필터링, 정렬, 페이징, 템플릿, 열 고정, 열 이동 및 열 숨기기, 시각화된 데이터 업데이트 등의 기능이 있습니다. 계층 그리드는 데이터 그리드 컴포넌트를 기반으로 구축되며 사용자가 상위 그리드의 행을 확장하거나 축소하여 더 자세한 정보가 필요할 때 하위 그리드를 표시함으로써 기능을 확장합니다.</p>

### 데모


<code-view style="height:520px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing" >
</code-view>

<div class="divider--half"></div>

### 의존성
계층 그리드는 `NgModule`로 내보내기 되므로 애플리케이션에서 `AppModule` 안에 IgxHierarchicalGridModule을 가져와야 합니다.

```typescript
// app.module.ts

import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxHierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

다음 방법으로 TypeScript의 계층 그리드에 대한 참조를 얻을 수 있습니다:

```typescript
@ViewChild('hgrid1', { read: IgxHierarchicalGridComponent })
public hgrid1: IgxHierarchicalGridComponent;
```

### 데이터 바인딩

**igx-hierarchical-grid**는 **igx-grid**에서 파생되며 대부분의 기능을 공유합니다. 주된 차이점은 여러 수준의 계층을 정의할 수 있다는 것입니다. **igx-row-island**라고 하는 **igx-hierarchical-grid**의 정의 내에서 별도의 태그를 통해 구성됩니다. **igx-row-island** 컴포넌트는 특정 수준의 각 하위 그리드에 대한 구성을 정의합니다. 수준별로 여러 행 아일랜드도 지원합니다.
계층 그리드는 2가지 방법으로 데이터에 바인딩할 수 있습니다. 

#### 1. 계층 데이터 사용

애플리케이션이 계층 데이터 전체를 객체의 하위 배열을 참조하는 객체 배열로 로딩하는 경우, 계층 그리드를 설정하여 읽고 이를 자동으로 바인딩하도록 구성할 수 있습니다. 다음은 적절히 구조화된 계층 데이터 소스의 예입니다:

```javascript
export const singers = [{
    "Artist": "Naomí Yepes",
    "Photo": "assets/images/hgrid/naomi.png",
    "Debut": "2011",
    "Grammy Nominations": 6,
    "Grammy Awards": 0,
    "Tours": [{
        "Tour": "Faithful Tour",
        "Started on": "Sep-12",
        "Location": "Worldwide",
        "Headliner": "NO",
        "Toured by": "Naomí Yepes"
    }],
    "Albums": [{
        "Album": "Dream Driven",
        "Launch Date": new Date("August 25, 2014"),
        "Billboard Review": "81",
        "US Billboard 200": "1",
        "Artist": "Naomí Yepes",
        "Songs": [{
            "No.": "1",
            "Title": "Intro",
            "Released": "*",
            "Genre": "*",
            "Album": "Dream Driven"
        }]
    }]
}];
```
각 **igx-row-island**는 하위 데이터를 보유하는 속성의 키를 지정해야 합니다.

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="singers" [autoGenerate]="true">
    <igx-row-island [key]="'Albums'" [autoGenerate]="true">
        <igx-row-island [key]="'Songs'" [autoGenerate]="true">
        </igx-row-island>
    </igx-row-island>
    <igx-row-island [key]="'Tours'" [autoGenerate]="true">
    </igx-row-island>
</igx-hierarchical-grid>
```
> [!NOTE]
> `Data` 대신에 사용자는 데이터를 자동으로 설정하기 위해 **igx-hierarchical-grid**가 로딩해야 하는 `key`만 구성합니다.

#### 2. 로드 온디맨드 사용

대부분의 애플리케이션은 초기에 가능한 적은 데이터를 로딩하도록 설계되어 있어 로딩 시간이 빨라집니다. 이러한 경우, **igx-hierarchical-grid**는 사용자가 생성한 서비스가 데이터 온디맨드를 제공할 수 있도록 구성할 수 있습니다. 다음 구성은 특별한 `@Output` 및 새로운 loading-in-progress 템플릿을 사용하여 로딩 온디맨드의 모든 기능을 제공합니다.

```html
<!-- hierarchicalGridSample.component.html -->

    <igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="true" [height]="'600px'" [width]="'100%'">
        <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="true"  (onGridCreated)="gridCreated($event, 'CustomerID')">
            <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="true" (onGridCreated)="gridCreated($event, 'OrderID')">
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

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
```

```typescript
// remote-load-on-demand.service.ts

@Injectable()
export class RemoteLoDService {
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: any): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response["value"])
        );
    }

    public buildUrl(dataState) {
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
### 기능

그리드 기능은 **igx-row-island** 마크업을 통해 활성화 및 구성할 수 있으며 이 마크업은 생성된 모든 그리드에 적용됩니다. 행 아일랜드 인스턴스를 통해 런타임에 옵션을 변경하면 생성된 각 그리드의 옵션이 변경됩니다. 

```html
<igx-hierarchical-grid [data]="localData" [displayDensity]="density" [autoGenerate]="false"
    [allowFiltering]='true' [paging]="true" [height]="'600px'" [width]="'800px'" #hGrid>
    <igx-column field="ID" [pinned]="true" [filterable]='true'></igx-column>
    <igx-column-group header="Information">
        <igx-column field="ChildLevels"></igx-column>
        <igx-column field="ProductName" hasSummary='true'></igx-column>
    </igx-column-group>
    <igx-row-island [key]="'childData'" [autoGenerate]="false" [rowSelectable]='true' #layout1>
        <igx-column field="ID" [hasSummary]='true' [dataType]="'number'"></igx-column>
        <igx-column-group header="Information2">
            <igx-column field="ChildLevels"></igx-column>
            <igx-column field="ProductName"></igx-column>
        </igx-column-group>
    </igx-row-island>
</igx-hierarchical-grid>
```

다음의 그리드 기능은 그리드 수준별로 작동하며 각 그리드 인스턴스는 나머지 그리드와 독립적으로 관리됩니다.

- 정렬
- 필터링
- 페이징
- 복수 열 헤더
- 숨기기
- 핀 고정
- 이동
- 요약
- 검색

선택 및 탐색 기능은 **igx-hierarchical-grid** 전체에서 글로벌하게 작동함 

- 선택 
    선택한 셀이 2개의 다른 하위 그리드로 동시에 표시할 수 없습니다.
- 탐색
    up/down으로 탐색할 때 next/prev 요소가 하위 그리드인 경우, 관련된 하위 그리드에서 탐색이 계속 진행되어 관련 셀이 선택되고 포커스된 것으로 표시됩니다. 하위 셀이 현재 표시된 뷰 포트 이외에 있는 경우, 뷰로 스크롤되어 선택한 셀이 항상 표시됩니다.

### 키보드 탐색
키보드 탐색은 기본적으로 계층 그리드에서 지원됩니다. 셀에 초점을 맞추고 다음 키 조합 중 하나를 누른 경우 설명된 동작이 실행됩니다:

 - `위 화살표` - 한 셀 위로 이동, 필요에 따라 그리드 위 계층으로 이동(줄 바꿈 없음);
 - `아래 화살표` - 한 셀 아래로 이동, 필요에 따라 그리드 아래 계층으로 이동(줄 바꿈 없음);
 - `왼쪽 화살표` - 한 셀 왼쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `오른쪽 화살표` - 한 셀 오른쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `Ctrl + 위 화살표` - 현재 열의 첫 번째 셀로 이동;
 - `Ctrl + 아래 화살표` - 현재 열의 마지막 셀로 이동;
 - `Ctrl + 왼쪽 화살표` -  행의 가장 왼쪽 셀로 이동;
 - `Home` - 행의 가장 왼쪽 셀로 이동;
 - `Ctrl + Home` - 그리드의 왼쪽 상단 셀로 이동;
 - `Ctrl + 오른쪽 화살표` -  행의 가장 오른쪽 셀로 이동;
 - `End` - 행의 가장 오른쪽 셀로 이동;
 - `Ctrl + End` - 그리드의 오른쪽 하단 셀로 이동;
 - `Page Up` - 한 페이지(뷰 포트) 위로 스크롤;
 - `Page Down` -  한 페이지(뷰 포트) 아래로 스크롤;
 - `Enter` - 편집 모드로 들어감;
 - `F2` - 편집 모드로 들어감;
 - `Esc` - 편집 모드를 종료함;
 - `Tab` - 행의 다음 셀로 포커스를 순차적으로 이동하고 마지막 셀에 도달하면 다음 행으로 이동. 확장한 행의 마지막 셀에 포커스가 있는 경우에는 첫 번째 하위로 포커스를 이동하며, 셀이 편집 모드인 경우에는 행에서 다음 편집 가능한 셀로 포커스가 이동하며, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다;
 - `Shift + Tab` - 순차적으로 행의 이전 셀로 포커스를 이동하고, 첫 번째 셀에 도달하면 포커스를 이전 행으로 이동합니다. 확장한 하위 그리드의 첫 번째 셀에 포커스가 있는 경우에는 상위로 포커스를 이동하며, 셀이 편집 모드인 경우에는 행에서 다음 편집 가능한 셀로 포커스가 이동하며, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다;
 - `Space` -  행을 선택할 수 있는 경우에는 스페이스 키를 누르면 행 선택을 트리거합니다;
 - 상위 그리드 행에서 `Alt + Arrow Left` - 행이 아직 축소되지 않은 경우에는 상위 행 콘텐츠를 축소합니다;
 - 상위 그리드 행에서 `Alt + 위 화살표` - 행이 아직 축소되지 않은 경우에는 상위 행 콘텐츠를 축소합니다;
 - 상위 그리드 행에서 `Alt + 오른쪽 화살표` - 행이 아직 확장되지 않은 경우에는 상위 행 콘텐츠를 확장합니다;
 - 상위 그리드 행에서 `Alt + 아래 화살표` - 행이 아직 확장되지 않은 경우에는 상위 행 콘텐츠를 확장합니다;
 - 마우스 `휠` -  포커스 요소를 흐리게 합니다;


#### "모두 축소" 버튼

계층 그리드는 사용자가 왼쪽 상단 모서리에서 "모두 축소" 버튼을 눌러 현재 확장된 모든 행을 편리하게 축소할 수 있습니다. 또한, 다른 그리드를 포함하는 모든 하위 그리드와 계층 그리드에는 이러한 버튼이 있으며, 계층의 특정 그리드만 축소할 수 있습니다. 

<img class="responsive-img" src="../../images/unfold_less_icon_screenshot.jpg" srcset="../../images/unfold_less_icon_screenshoto@2x.jpg 2x" />

### Sizing

See the [Grid Sizing](sizing.md) topic.

### CRUD 조작

> [!NOTE]
> 플랫 데이터 그리드와 특정 행 아일랜드의 각 인스턴스과의 중요한 차이점은 동일한 트랜잭션 서비스 인스턴스를 가지며 동일한 트랜잭션 로그를 누적한다는 것입니다. CRUD 기능을 활성화하려면 `IgxHierarchicalTransactionServiceFactory`를 인젝트해야 합니다.

CRUD API 메소드 호출은 각 개별 그리드 인스턴스를 통해 실행해야 합니다.

### 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|Group By|Group By 기능은 계층 적 그리드에서 지원되지 않습니다.|
|Export to Excel|Export to Excel 는 현재 계층 적 그리드에서 지원되지 않지만 Ignite UI for Angular의 차후 버전에서 사용할 수 있습니다.|

> [!NOTE]
> `igxHierarchicalGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxHierarchicalGrid`. For more details see [igxForOf Known Issues](../for-of.html#known-limitations) section.

### Styling
The igxHierarchicalGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/sass/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid. 

In the below steps, we are going through the steps of customizing the igxHierarchicalGrid styling.     

#### Importing global theme   
To begin the customization of the hierarchical grid, you need to import the `index` file, where all styling functions and mixins are located. 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### Defining custom theme
Next, create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the hierarchical grid as desired.

 >[!NOTE]
 >There is no specific `sass` hierarchical grid function.


```scss
$custom-theme: igx-grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #f8e495,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: #e0b710,
  $resize-line-color: #ffcd0f,
  $row-highlight: #ffcd0f
);
```   

#### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;
 
$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.   
```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: (igx-color($custom-palette, "secondary", 500)),
    $cell-selected-background: (igx-color($custom-palette, "primary", 300)),
    $row-hover-background: (igx-color($custom-palette, "secondary", 100)),
    $row-selected-background: (igx-color($custom-palette, "primary", 100)),
    $header-background: (igx-color($custom-palette, "primary", 500)),
    $header-text-color: (igx-contrast-color($custom-palette, "primary", 500)),
    $expand-icon-color: (igx-color($custom-palette, "secondary", 500)),
    $expand-icon-hover-color: (igx-color($custom-palette, "secondary", 600)),
    $resize-line-color: (igx-color($custom-palette, "secondary", 500)),
    $row-highlight: (igx-color($custom-palette, "secondary", 500))
);
```   

#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we will use `$_light_grid`.
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 100)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    expand-icon-color: (igx-color:('secondary', 500)),
    expand-icon-hover-color: (igx-color:('secondary', 600)),
    resize-line-color: (igx-color:('secondary', 500)),
    row-highlight: (igx-color:('secondary', 500))
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```   

#### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file: 

```scss
@include igx-grid($custom-theme);
```

#### Scoped component theme

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```   

#### Demo

<code-view style="height:505px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-styling" >
</code-view>


## API 참조

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxHierarchicalGridRow]({environment:angularApiUrl}/classes/igxhierarchicalgridrow.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
