---
title: 列のサイズ変更 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 遅延の列のイズ変更を使用すると、ドラッグ操作が実行中に、一時のサイズ変更インジケーターが表示されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 列のサイズ変更, 遅延列サイズ変更, グリッド列のサイズ変更, Angular Grid 列のサイズ変更, Angular 列
_language: ja
---

### グリッドの列サイズ変更

列サイズ変更の遅延では、ドラッグ操作の実行中にサイズ変更インジケーターが一時的に表示されます。ドラッグ操作が完了すると新しい列サイズが適用されます。

#### グリッドの列サイズ変更デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

**列のサイズ変更**も列レベルで有効にできます。つまり、[**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) にサイズ変更可能な列およびサイズ変更不可の列の両方を含むことが可能で [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`resizable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) 入力によって制御されます。

```html
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
```

[`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の [`onColumnResized`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnresized) イベントを処理し、列がサイズ変更されたときにカスタム ロジックを実装できます。以前の列幅、新しい列幅、および [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) オブジェクトがイベント引数で公開されます。

```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

#### 列のサイズ変更の制限

列の最小幅および最大幅の構成も可能です。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) および [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 入力によって制御されます。この場合、サイズ変更インジケーターのドラッグ操作が制限されます。列が [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) および [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) によって定義される範囲以外にサイズ変更できないことをユーザーに通知します。

```html
    <igx-column [field]="Name" [width]="'150px'" [resizable]="true" [minWidth]="'60px'"
        [maxWidth]="'250px'"></igx-column>
```

> [!NOTE]
> [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) がその値より小さい値に設定されても、列を **88px** より小さくサイズ変更することができません。

#### ダブルクリックで列の自動サイズ調整

各列ヘッダーの右側をダブルクリックして列を**自動サイズ調整**することができます。列は、現在表示されているヘッダーを含む一番長いセル値にサイズ設定されます。この動作はデフォルトで有効なため、追加で構成する必要はありません。ただし、[`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) がその列に設定され、新しい幅が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 値より大きい場合、列は自動サイズ調整されません。この場合、列が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 値に設定されます。

また [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`autosize()`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#autosize) メソッドで列を動的に自動サイズ変更できます。

```typescript
@ViewChild('grid') grid: IgxGridComponent;

let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

#### ピン固定列のサイズ変更

ピン固定列もサイズ変更できます。ただし、ピン固定される列のコンテナーがグリッド全体の幅の 80% より大きくできないためサイズ変更が制限されます。ピン固定列の自動サイズ調整で、新しい幅がピン固定列コンテナーがグリッド全体の幅の 80% より大きい場合、自動サイズ調整操作は無視されます。これは、ピン固定されていない列を常にユーザーに表示して利用可能にするためです。

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
