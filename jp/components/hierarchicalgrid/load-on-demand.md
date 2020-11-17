---
title: Hierarchical Grid ロードオンデマンド - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Hierarchical Grid は、展開された各子グリッドでロードオンデマンドに必要なツールを提供します。データ量が大幅に軽減されてユーザがデータを必要な場合のみ取得されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネントs Library, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Data Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Data Table コントロール, Angular 高パフォーマンスe Hierarchical Grid, Angular 高パフォーマンス Hierarchical Data Table, Hierarchical Grid, Hierarchical Data Table
_language: ja
---

# 階層グリッド ロードオンデマンド

[`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) は、要求するサーバーからのデータを最低限にすることによりすばやく描画できます。このため、ユーザーがビューで結果を確認でき、表示データをインタラクティブに操作できます。初期時にグリッドのデータのみが取得されて描画され、ユーザーが子グリッドを含む行を拡張した後のみ、特定の子グリッドのデータを取得します。このメカニズムはロードオンデマンドであらゆるリモートデータとの設定が簡単にできます。


このトピックは、既に利用可能なリモート oData v4 サービスと通信してリモート サービス プロバイダーを作成し、ロードオンデマンドを設定する方法を説明します。以下は、デモと作成手順を示します。


## Angular 階層グリッド ロードオンデマンドの例

<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchical-grid-lod-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### リモート サービス プロバイダー

はじめにサービス プロバイダーを準備して階層グリッドに必要なデータを取得します。

#### 基本データの取得

ブラウザーが提供する XMLHttpRequest インターフェイス を使用した HTTP プロトコルでバックエンドサービスと通信します。簡易的なクライアント HTTP API を提供する Angular の [`HttpClient`](https://angular.io/api/common/http/HttpClient) モジュールを使用してより簡単に行うことができます。データを取得にはサービスのシンプルなメソッドが必要となります。


```typescript
public getData(dataState): Observable<any[]> {
    return this.http.get(this.buildUrl(dataState)).pipe(
        map(response => response['value']),
    );
}
```

`this.http` は、`HttpCLient` モジュールの参照となり、`buildUrl()` は取得したデータに基づいて url を生成するメソッドになります。実行された非同期のため、返信をマップして結果値のみ取得し、Observable を返します。それにより後でサブスクライブし、アプリケーションで処理を進めてグリッドへ渡すことができます。

#### 要求 URL をビルドします。

次に GET 要求の URL をビルドする方法を定義します。メイン グリッドのデータを取得できますが含まれる子グリッドのデータも取得できます。ルート レベルに `https://services.odata.org/V4/Northwind/Northwind.svc/` の `Customers` データを使用し、それ以外のレベルには `Order` と `Order_Details` を使用します。このモデルはアプリケーションごとに異なりますが、ここでは以下を使用します。

![Dragging](../../images/hgrid-database.jpg)

 はじめに必要となるのはグリッドのデータ、親業のプライマリキーとその一意の ID をどこから取得するかを決定するテーブルの `key` が必要です。インターフェイス `IDataState` でこれらすべてを定義します。例:

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

#### 結果

最後に `remote-lod.service.ts` は以下のようになります。


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

### 階層グリッド設定

次に階層グリッドを設定してリモート サービス プロバイダーに接続します。

#### テンプレートの地祇

最初に階層グリッド テンプレートを必要な階層レベルで定義します。customers のルート グリッド [`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey) は最初のレベルの orders の `CustomerID` です。`OrderID` と各 order 詳細の `ProductID` です。各データベース テーブルとキーで初期テンプレートを定義します。

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

ルート レベル階層グリッドと最終的にはその子のデータがテンプレートに必要となります。`#hGrid` 参照が使用できるため、コードでサービスからデータ取得後にルート グリッドのデータを簡単に設定できます。展開されている子にデータを設定する方法は異なります。

行がはじめて展開されたときに新し子 `IgxHierarchicalGrid` が描画がされるため、データを設定するために新しく作成されたグリッドの参照を取得する必要があります。各 [`IgxRowIsland`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html) コンポーネントに [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) イベントがあり、特定の子アイランドに新しい子グリッドが作成されたときに発生します。新しいグリッドの参照を取得するために使用でき、サービスからデータを要求して適用します。

サービスをビルドしているためルートレベルの場合に情報のみが必要なため、すべてのアイランドに 1 メソッドを使用できます。このすべての情報には、イベント引数から直接またはイベントをトリガーする行アイランドからアクセスできます。 

`gridCreated` を使用するメソッドに名前を付けます。イベント [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) は [`parentID`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#parentid) プロパティ、[`owner`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#owner) として行アイランドへの参照、新しい子 [`grid`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#grid) プロパティを提供するため、最初の引数として渡されます。
親行の `primaryKey` についての情報はありませんが、バインドした行アイランドに基づいて 2 つ目の引数として簡単に渡すことができます。 

変更を加えたテンプレート ファイル `hierarchical-grid-lod.component.html` は以下のようになります。

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

#### サービスへ接続

最後の手順の 1 つとして、以前作成したサービスに階層グリッドを接続することです。`Injectable` として定義するため、プロバイダーとしてアプリケーションへ渡すことができます。`ViewChild` クエリをデータに設定してルートグリッドへの参照も取得します。

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

グリッドがサービスのデータを要求して割り当てる前に描画されることを確認するために、`AfterViewInit` ライフサイクル フックを使用します。親がないため、`rootLevel` は `true` でそのキーのみをサービスの `getData` へ渡すことができます。サブスクライブする必要のある observable を返します。

````TypeScript
public ngAfterViewInit() {
    this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
        this.hGrid.data = data;
        this.hGrid.cdr.detectChanges();
    });
}
````

次に作成した新しい子グリッドのデータを要求する `gridCreated` メソッドを作成する必要があります。ルート レベル グリッド データの取得と同様に、ここでは`parentID` や `parentKey` などの情報を渡す必要があります。`rootLevel` はいずれの子も `false` です。

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

これにより、アプリケーションの設定はほぼ完了です。最後の手順は、空グリッドを表示する代わりにユーザーにデータがまだ読み込み中であることを通知してユーザー エクスペリエンスを向上します。 [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) は、グリッドが空のときに表示できるインジケーターの読み込みサポートします。新しいデータが取得されると読み込みインジケーターが非表示となりデータが描画されます。 

#### 読み込み通知の設定

[`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) は、[`isLoading`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#isloading) プロパティを `true` に設定して読み込みインジケーターを表示できます。データが読み込まれるまでルートグリッドにあらかじめ設定しますが、新しい子グリッドを作成する際にも必要です。テンプレートで常に `true` に設定できますが、`false` に設定してサービスが空配列を返した場合は非表示にしてデータのないグリッドを表示できます。 

以下は `hierarchical-grid-lod.component.ts` の最終バージョンです。

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

### API リファレンス

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)

### その他のリソース

<div class="divider--half"></div>

* [Hierarchical Grid コンポーネント](hierarchical-grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
