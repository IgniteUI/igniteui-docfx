@@if(igxName==='IgxGrid'){
---
title: Angular Data Grid での行編集 - Ignite UI for Angular
_description: Angular Data Grid で行編集を有効にし、CRUD 操作のための強力な API が必要な場合、Ignite UI for Angular Data Grid 行編集コンポーネントをお試しください。
_keywords: row editing, igniteui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}
@@if(igxName!=='IgxGrid'){
---
title: Angular @@igComponent での行編集 - Ignite UI for Angular
_description: Angular @@igComponent で行編集を有効にし、CRUD 操作のための強力な API が必要な場合、Ignite UI for Angular Data Grid 行編集コンポーネントをお試しください。
_keywords: row editing, igniteui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
_canonicalLink: grid/row-editing
---
}

# Angular @@igComponent 行編集

@@igComponent コンポーネントは、Angular CRUD 操作のためのデータ操作と強力な API を提供します。行をクリックして **Enter キー**を押すか、変更する行をダブルクリックします。 

## Angular @@igComponent 行編集の例

以下の手順では、@@igComponent で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も **[完了]** ボタンを使用して確定するまで行値を更新しません。または **[キャンセル]** ボタンを使用して破棄します。

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-editing" alt="Angular @@igComponent 行編集の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:590px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-row-edit" alt="Angular @@igComponent 行編集の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing" alt="Angular @@igComponent 行編集の例">
</code-view>

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

次に @@igComponent をバインドしたデータソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditable) を true に設定してバインドします。
@@if (igxName ==='IgxGrid') {
```html
<igx-grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
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
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [primaryKey]="EmployeID" [foreignKey]="PID"
               [rowEditable]="true" [rowSelection]="'multiple'" [moving]="true">
    <igx-column *ngFor="let c of columns"
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable">
    </igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [rowEditable]="true">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
    <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
    <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
    [hasSummary]="true"></igx-column>
    <igx-column width="10%">
        <ng-template igxCell let-cell="cell">
            <button igxIconButton="flat" (click)="removeRow(cell.cellID.rowIndex)">
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
> 各列の編集を有効にする必要はありません。@@igComponent で [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditable) プロパティを使用するとプライマリ行以外 `field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。

@@if (igxName === 'IgxGrid') {
```typescript
import { Component, ViewChild } from '@angular/core';
import { data } from './data';
import { IgxGridComponent } from 'igniteui-angular';
// import { IgxGridComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: 'grid-row-editing-sample.component.html'
})
export class GridRowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
// import { IgxTreeGridComponent } from '@infragistics/igniteui-angular'; for licensed package
import { FLAT_DATA } from './data';

@Component({
   providers: [],
    selector: 'app-tree-grid-row-editing-sample',
    styleUrls: ['tree-grid-row-editing-sample.component.scss'],
    templateUrl: 'tree-grid-row-editing-sample.component.html'
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild('treeGrid') public treeGrid: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            { field: 'FirstName', label: 'First Name', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'LastName', label: 'Last Name', resizable: false, sortable: false, filterable: false, editable: true, dataType: 'string' },
            { field: 'Title', label: 'Title', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, sortable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from 'igniteui-angular';
// import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from '@infragistics/igniteui-angular'; for licensed package
import { SINGERS } from './data';

@Component({
    selector: 'hierarchical-grid-row-editing',
    styleUrls: ['./hierarchical-grid-row-editing.component.scss'],
    templateUrl: 'hierarchical-grid-row-editing.component.html'
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

以下の例では、これら 2 つのコンポーネントのスタイル設定オプション ([`ボタンのスタイル設定`](../button.md#スタイル設定) & [`バナーのスタイル設定`](../banner.md#スタイル設定)) を使用して、@@igxName の行編集のエクスペリエンスをカスタマイズします。
次に、現在のセルのエディターと背景をより明確にするためにスタイルを設定します。セル スタイリングの詳細については、[こちら](cell-editing.md#スタイル設定)をご覧ください。

### テーマのインポート

行編集バナーのスタイルを設定する最も簡単な方法は、`アプリ`のグローバル スタイル ファイル (通常 `styles.scss`) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、Ignite UI for Angular Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

テーマ ファイルをインポートしたら、カスタム テーマを作成できます。

#### テーマの定義

行編集の背景にカスタムの [`banner テーマ`]({environment:sassApiUrl}/themes#function-banner-theme)を定義して、定義済みのパレットの 1 つである `$purple-palette` を使用することができます。

```scss
$banner-theme: banner-theme(
  $banner-background: #e3e3e3,
  $banner-message-color: color($purple-palette, "secondary", 600)
);
```

ここでは、色を生成するために `my-banner-palette` を [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) (テーマ ライブラリによって公開) と共に使用しています。

### テーマを含む

次に Sass `@include` ステートメントを使用してテーマを適用します。新しく定義された `$banner-theme` を [`css-vars mixin`]({environment:sassApiUrl}/themes#mixin-css-vars) で渡します。

```scss
@include css-vars($banner-theme);
```

### コンポーネント スタイル

行編集オーバーレイは他の多くのコンポーネントのテーマを利用するため、グローバル スタイルでスタイル設定するとアプリケーションの他の部分 (バナー、ボタンなど) に影響を与える可能性があります。それを防ぐ最善の方法は、バナー テーマを適用する特定のコンポーネントのスタイル ファイルにスコープすることです。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッド行編集オーバーレイのスタイルを設定するには、`::ng-deep`を使用してこのカプセル化を解除する必要があります。

```scss
// custom.component.scss

:host {
  ::ng-deep {
    @include css-vars($banner-theme);
  }
}
```

上記の構文で、カスタム バナー テーマはグリッドの行編集オーバーレイに適切に適用されます。

### カスタム テンプレート

行編集オーバーレイをさらにカスタマイズするには、`[完了]` ボタンと `[キャンセル]` ボタンを別々にスタイル設定できるようにカスタム テンプレートを渡します。

```html
<!-- in component.html -->
<@@igSelector>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</@@igSelector>
```

カスタム ボタンを定義した後は、[`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) を使用してスタイルを設定できます。[こちら](../button.md#スタイル設定)で `igx-button` のスタイリングについてさらに学ぶことができます。`[完了]` と `[キャンセル]` のカスタム テーマを作成できます。

```scss
// custom.component.scss
...

$button-theme: button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
  @include css-vars($button-theme);
}
```

`@include` ステートメントを `.custom-buttons` でスコープ設定して、`[完了]` ボタンと `[キャンセル]` ボタンにのみ適用されるようにします。

### デモ

バナーとボタンのスタイルを設定後、[編集モードのセル](cell-editing.md#スタイル設定)のカスタム スタイルも定義します。以下は、すべてのスタイルを組み合わせた結果です。

@@if (igxName === 'IgxGrid'){

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-edit-style" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-edit-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-row-edit-style" >
</code-view>

}

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## 既知の問題と制限

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
    * 行の選択
    * 行の展開/縮小
    * 行の編集
    * 行のピン固定

## API リファレンス

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onRowEditEnter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onRowEdit)
* [rowEditDone]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditDone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onRowEditCancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endEdit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primaryKey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## その他のリソース
<div class="divider--half"></div>

* [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
* [@@igComponent 概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)