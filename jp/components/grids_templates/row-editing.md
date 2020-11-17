---
title: Angular Grid 行編集 | UI Grid | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular を使用して行内データ操作を構成する方法を学びます。直感的なグリッド行編集と CRUD 機能は、UI グリッドで利用できます。
_keywords: row editing, igniteui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---

# @@igComponent 行編集

@@igComponent コンポーネントは、Angular CRUD 操作のためのデータ操作と強力な API を提供します。行をクリックして **Enter キー**を押すか、変更する行をダブルクリックします。 

## Angular @@igComponent 行編集 例

以下の手順では、@@igComponent で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も **[完了]** ボタンを使用して確定するまで行値を更新しません。または **[キャンセル]** ボタンを使用して破棄します。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-editing' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:590px">
    <iframe id="tree-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> 行が編集モードにある場合、他の行のセルをクリックすると [完了] ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

## 行編集の使用

`@@igxNameModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

次に @@igComponent をバインドしたデータソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) を true に設定してバインドします。
@@if (igxName ==='IgxGrid') {
```html
<div class="sample-wrapper">
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [primaryKey]="EmployeID" [foreignKey]="PID" width ="100%"
               height ="500px" [rowEditable]="true" [rowSelectable]="true" [columnHiding]="true">
    <igx-column *ngFor="let c of columns"
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [movable]="c.movable"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable">
    </igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
        <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'">
            <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
            </igx-column>
            <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
            <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
            [hasSummary]="true"></igx-column>
            <igx-column width="10%">
                <ng-template igxCell let-cell="cell">
                    <button igxButton="icon" (click)="removeRow(cell.cellID.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```
}

> [!NOTE]
> プライマリキーは行編集操作で必須です。

> [!NOTE]
> 各列の編集を有効にする必要はありません。@@igComponent で [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) プロパティを使用するとプライマリ行以外 `field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。

@@if (igxName === 'IgxGrid') {
```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";
import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
   providers: [],
    selector: "app-tree-grid-row-editing-sample",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.scss"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
}

> [!NOTE]
> @@igComponent は、保留中のセル変更を保持するプロバイダー [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を行ステートをサブミットまたはキャンセルするまで内部使用します。

## 配置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。

- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。

- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

## 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- [完了] ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- [キャンセル] ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット ([完了] ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、@@igComponent は編集モードのままです。@@igComponent をスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。@@igComponent 以外をクリックしたときにセルも編集モードに残ります。

- **ソート**、**フィルタリング**、**検索**、および**非表示**操作を実行すると、現在の行のすべての変更が元に戻され、行の編集モードを終了します。

- **ページング**、**サイズ変更**、**ピン固定**、**移動**操作を実行すると、編集モードを終了して最新の値を送信します。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。@@igComponent がトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- `Enter` と `F2` で行編集モードに入ります。

- `Esc` で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません。

- `Tab` で行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから [キャンセル] と [完了] ボタンへ移動します。[完了] ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。ソート、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様にソートやフィルタリングなどの他の機能が有効になります。

@@if (igxName === 'IgxGrid') {
- グループ行の展開と縮小は現在の行の編集を終了しません。
}

## 行編集オーバーレイのカスタマイズ

### テキストのカスタマイズ

`igxRowEditTextDirective` を使用した行編集オーバーレイのテキストのカスタマイズが可能です。
`rowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

### ボタンのカスタマイズ
`igxRowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。
キーボード ナビゲーションにボタンを含める場合、各ボタンに `igxRowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## スタイル設定

[Ignite UI for Angular テーマ ライブラリ](../themes/index.md)を使用して、行編集オーバーレイを大幅に変更できます。 
行編集オーバーレイは複合要素です。UI は、他の 2 つのコンポーネントで構成されています。
    - コンテンツをレンダリングするための [`igx-banner`](../banner.md)
    - [`igx-button`](../button.md) はデフォルトのテンプレートでレンダリングされます (`[完了]` ボタンと `[キャンセル]` ボタンの場合)。

以下の例では、これら 2 つのコンポーネントのスタイル設定オプション ([ボタン スタイル](../button.md#スタイル設定) & [バナー スタイル](../banner.md#スタイル設定)) を使用して、@@igxName の行編集のエクスペリエンスをカスタマイズします。
次に、現在のセルのエディターと背景をより明確にするためにスタイルを設定します。セル スタイリングの詳細については、[こちら](editing.md#スタイル設定)をご覧ください。

### テーマのインポート

行編集バナーのスタイルを設定する最も簡単な方法は、`アプリ`のグローバル スタイル ファイル (通常 `styles.scss`) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、Ignite UI for Angular Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

テーマ ファイルをインポートしたら、カスタム テーマを作成できます。

#### テーマの定義

行編集の背景にカスタムの [`banner テーマ`]({environment:sassApiUrl}/index.html#function-igx-banner-theme)を定義して、定義済みのパレットの 1 つである `$purple-palette` を使用することができます。

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: igx-banner-theme( 
        $banner-background: $my-light-gray,
        $banner-message-color: igx-color($my-banner-palette, "secondary", 600)
    );
```

ここでは、色を生成するために `my-banner-palette` を [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) (テーマ ライブラリによって公開) と共に使用しています。

### テーマを含む

次に Sass `@include` ステートメントを使用してテーマを適用します。新しく定義された `$banner-theme` を [`igx-banner mixin`]({environment:sassApiUrl}/index.html#mixin-igx-banner) で渡します。

```scss
@include igx-banner($banner-theme); 
```

これにより、カスタム バナー テーマが行編集オーバーレイに適用されます。ただし、グローバル スタイル ファイルで定義したため、これらのスタイルはアプリケーションの**すべて**のバナーにも適用されます。

### コンポーネント スタイル

行編集オーバーレイは他の多くのコンポーネントのテーマを利用するため、グローバル スタイルでスタイル設定するとアプリケーションの他の部分 (バナー、ボタンなど) に影響を与える可能性があります。回避策としては、バナー テーマのスコープがあります。@@igSelector を含むコンポーネントでスタイル ([`theme/index`インポート](#テーマのインポート)を含む) を定義できます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
>ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
// custom.component.scss

:host {
    ::ng-deep {
        @include igx-banner($banner-theme);
    }
}
```

上記の構文で、カスタム バナー テーマはグリッドの行編集オーバーレイに適切に適用されます。

### カスタム テンプレート

行編集オーバーレイをさらにカスタマイズするには、`[完了]` ボタンと `[キャンセル]` ボタンを別々にスタイル設定できるようにカスタム テンプレートを渡します。

```html
<!-- in component.html -->
<@@igSelector>
    ...
    <ng-template igxRowEditActions let-endRowEdit>
            <div class="custom-buttons">
                <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                    <igx-icon>clear</igx-icon>
                </button>
                <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                    <igx-icon>check</igx-icon>
                </button>
            </div>
        </ng-template>
    ...
</@@igSelector>
```

カスタム ボタンを定義した後は、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) を使用してスタイルを設定できます。[こちら](../button.md#スタイル設定)で `igx-button` のスタイリングについてさらに学ぶことができます。`完了`と`キャンセル`のカスタム テーマを作成できます。

```scss
// custom.component.scss
...

$button-theme: igx-button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
    @include igx-button($button-theme);
  }
```

`@include` ステートメントを` .custom-buttons` でスコープ設定して、`[完了]` ボタンと`[キャンセル]` ボタンにのみ適用されるようにします。

### デモ

バナーとボタンのスタイルを設定後、[編集モードのセル](editing.md#スタイル設定)のカスタム スタイルも定義します。以下は、すべてのスタイルを組み合わせた結果です。

@@if (igxName === 'IgxGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="grid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="treegrid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="treegrid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="treegrid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>
}

## API リファレンス

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [rowEditDone]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)