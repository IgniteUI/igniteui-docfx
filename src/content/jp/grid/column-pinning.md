---
title: Angular Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
_language: ja
---





# Angular Grid 列ピン固定

単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、Grid で水平スクロール時にロックされた列が常に表示されます。Material UI Grid には組み込みの列ピン固定 UI があり、Grid のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning API を介して列のピン固定状態を変更できます。

## Angular Grid 列ピン固定の例



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-toolbar-pinning/" alt="Angular Grid 列ピン固定の例">
</code-view>





## 列固定 API

列ピン固定は、[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に Grid の左側に描画され、Grid 本体のピン固定されていない列の水平スクロールで固定されます。



```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```






[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の Grid の [`pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinColumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#unpinColumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。



```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```





両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`columnPin`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnPin) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) プロパティを適切な位置インデックスに変更します。



```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```





## ピン固定の位置

[`pinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinning) 設定オプションを使用して、列のピン固定の位置を変更できます。列の位置を Start または End のいずれかに設定できます。End に設定すると、列がピン固定されていない列の後に、グリッドの最後にレンダリングされます。
ピン固定されていない列は水平にスクロールできますが、ピン固定された列は右側に固定されます。



```html
<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>
```







```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

### デモ



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-right-pinning/" >
</code-view>







### 両側の列ピン固定

各列のピン固定位置を個別に指定できるため、グリッドの両側に列をピン固定して利便性を高め、データ セットの最適化を容易にすることができます。詳細については、以下のデモを参照してください。列をピン固定するには、ヘッダーをクリックして列を選択し、ツールバーに追加されたピン固定ボタンを使用するか、列を別のピン固定された列にドラッグします。



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-pinning-both-sides/" >
</code-view>







## カスタム列ピン固定 UI

カスタム UI を定義し、関連する API を介して列のピン状態を変更できます。

ツールバーの代わりに、エンドユーザーが特定の列のピンの状態を変更するためにクリックできる列ヘッダーにピンアイコンを定義するとします。
これは、カスタムアイコンを使用して列のヘッダーテンプレートを作成することで実行できます。



```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```







カスタムアイコンをクリックすると、関連する列のピン状態は、列の API メソッドを使用して変更できます。

```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### デモ



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-pinning/" >
</code-view>






## ピン固定の制限

- 列幅をパーセンテージ (%) で設定した場合にピン固定列があると Grid 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、Grid によって自動的に割り当てる必要があります。

<div class="divider--half"></div>



## スタイル設定

igxGridを使用すると、[Ignite UI for Angular テーマ ライブラリ](../themes/sass/component-themes.md) でスタイルを設定できます。グリッドの[テーマ]({environment:sassApiUrl}/themes#function-grid-theme)は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下の手順では、グリッドのピン固定スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート

グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カスタム テーマの定義

次に、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、必要に応じて Group By をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

### カスタム テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
:host {
  @include tokens($custom-theme);
}
```

### デモ


<code-view style="height:506px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-pinning-styling/" >
</code-view>

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。



## API リファレンス

- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [Grid 概要](grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)