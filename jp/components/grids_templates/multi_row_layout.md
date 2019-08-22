---	
title: Grid - 複数行レイアウト - ネイティブ Angular | Ignite UI for Angular	
_description: 複数行レイアウトでは、列をより柔軟な方法で配置およびサイズ変更できます。各列のレイアウトは、列フィールドで構成されるすべてのグリッド レイアウトを表しています。	
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, Multi Row Layout, Angular Multi Row Layout, Angular Data Table Multi Row Layout, Grid Layout, Angular Grid Layout, Column Layout, ColumnLayout, igxColumnLayout	
_language: ja	
---	
 ### 複数行レイアウト	
 複数行レイアウトは、`igxGridComponent` のレンダリング機能を拡張します。この機能により、単一のデータレコードを複数の表示行に分割することができます。	
 #### デモ	

 <div class="sample-container loading" style="height:755px">	
    <iframe id="grid-multi-row-layout-iframe" src='{environment:demosBaseUrl}/grid/grid-multi-row-layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>	
</div>	
<br/>	
<div>	
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>	
</div>	


 複数行レイアウトの宣言は、[`igx-column-layout`]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html) コンポーネントによって実現されます。各 `igx-column-layout` コンポーネントは、単一または複数の `igx-column` コンポーネントを含むブロックと見なします。一部のグリッド機能はブロック レベルで機能します (下記の「機能の統合」セクション参照)。たとえば、仮想化ではブロックを使用して仮想チャンクを決定します。そのため、レイアウトで許容される場合は、パフォーマンスを向上させるために列を更に `igx-column-layout` ブロックに分割します。複数行のレイアウトを設定するときは、これらのブロックの外側に列がなく、`IgxColumnGroupComponent` を使用しないでください。複数行レイアウトは、[グリッド レイアウト](https://www.w3.org/TR/css-grid-1/)仕様上に実装されており、その要件に準拠する必要があります。	
 `IgxColumnComponent` は各セルの位置と範囲を決めるために 4 つの `@Input` プロパティを公開しています。	
* [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) - フィールドの開始位置となる列インデックス。このプロパティは**必須**です。	
* [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) - フィールドの開始位置となる行インデックス。このプロパティは**必須**です。
* [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colend) - 現在のフィールドが終了する位置の列インデックス。colStart と colEnd の間の列数によって、そのフィールドまでの列の幅が決まります。このプロパティは**オプション**です。設定されていない場合は、デフォルトで 1 に設定されます。	
* [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowend) - 現在のフィールドが終了する行インデックス。rowStart と rowEnd の間の行数によって、そのフィールドにまたがる行数が決まります。このプロパティは**オプション**です。設定されていない場合は、デフォルトで `rowStart + 1` に設定されます。	


 ```html	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>	
	<igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>	
	<igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
		<igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>	
		<igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>	
</igx-column-layout>	
```	

 上記の設定の結果は、以下のスクリーンショットで確認できます。	

 <img src="../../images/multi-row-layout-1.png" style="width: 100%"/>	


> [!Note]	
> [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) プロパティは、それぞれの `igx-column` に対して`igx-column-layout` に設定する必要があります。`igxColumnLayout` コンポーネントはレイアウトが正しいかどうかを検証しておらず、それについてエラーや警告を投げていません。 開発者は、自分のレイアウトの宣言が正しく完全であることを確認する必要があります。そうしないと、誤った配置、オーバーラップ、ブラウザの不整合などが発生し、壊れたレイアウトになる可能性があります。	

 ### 機能の統合	
複数行レイアウトのレンダリング方法は全く異なるため、列固定や列非表示など一部の列機能は `igx-column-layout` コンポーネントでのみ機能します。  その他の機能ソートとグループ化などは、`igx-column` コンポーネントで同じように機能します。	
- フィルタリング - Excel スタイルのフィルタリングのみがサポートされています。`filterMode` を `FilterMode.quickFilter` に明示的に設定しても効果はありません。	
- ページング - 表示行ではなくレコードで機能します。	
- Group By - `hideGroupedColumns` オプションは、複数行レイアウトでは効果がありません。グループ化された列は常に表示されます。	

 以下の機能は現在サポート**されません**。	
- 列移動 	
- 複数列ヘッダー	
- Excel へエクスポート	
- 集計	

 ### キーボード ナビゲーション	

複数行レイアウトを持つ IgxGridComponent は、ビルトインのキーボード ナビゲーションを提供します。

#### タブ ナビゲーション
* <kbd>TAB</kbd> と <kbd>Shift</kbd> + <kbd>TAB</kbd> - 定義されている列レイアウトの影響を受けずに、行内の次のセルまたは前のセルに移動します。  ナビゲーションはすべてのセルを介して行ごとに 1 回のみフォーカスすることで行われます。つまり、現在選択されているセルと同じ `rowStart` がない場合はセルをスキップする必要があります。行が編集モードのときは、ナビゲーションはその行のセルと [キャンセル] ボタンおよび [完了] ボタンに制限されます。

#### 水平ナビゲーション
* <Kbd>左矢印</kbd>または<kbd>右矢印</kbd>は、現在行内の左右に隣接するセルに移動します。定義されている列レイアウトの影響を受けません。現在のセルが複数の行にまたがる場合は、他の隣接するセルへ移動した場合を除き、<kbd>左矢印</kbd>と<kbd>右矢印</kbd>は、同じ `rowStart` で左右の最初のセルに移動します。ナビゲーションはナビゲーション開始セルを格納し、可能であれば同じ `rowStart` を持つセルに移動します。
* <kbd>Ctrl</kbd> + <kbd>左矢印</kbd> (<kbd>HOME</kbd>) または <kbd>Ctrl</kbd> + <kbd>右矢印</kbd> (<kbd>END</kbd>) - 行の先頭または末尾に移動し、ナビゲーション開始セルに従ってセルを選択します。


#### 垂直ナビゲーション
* <kbd>上矢印</kbd> または <kbd>下矢印</kbd> - 開始位置に対して上下のセルに移動し、行の影響は受けません。現在のセルが複数の列にまたがる場合は、次のアクティブ セルがナビゲーション開始セルに従って選択されます。
* <kbd>Ctrl</kbd> + 上矢印</kbd>または<kbd>Ctrl</kbd> + <kbd>Down</kbd> - 最初の行または最後の行の同じ列に移動してフォーカスを適用します。 
* <kbd>Ctrl</kbd> + <kbd>Home</kbd> or <kbd>Ctrl</kbd> + <kbd>End</kbd> - 最初の行に移動して最初のセルに移動するか、最後のセルに移動します。最後のセルに移動してフォーカスを合わせます。
	
	
> [!Note]
> 複数の行または列にわたるセルを介したナビゲーションは、ナビゲーション開始セルに従って行われ、反対方向のキーを使用して開始セルに戻ることができます。グループ行を移動するときにも同じ方法が使用されます。

> [!Note]
> 選択と複数セル選択はレイアウトで使用できます。つまり、セルがアクティブになると、そのレイアウトが選択されます。ドラッグ選択などの複数選択のすべての機能も適用可能であり、セルごとではなくレイアウトごとに機能します。

#### カスタム キーボード ナビゲーション

グリッドでは、特定のキーが押されたときのデフォルトのナビゲーション動作をカスタマイズできます。`隣りのセル`または`下のセル`へ移動するような操作は、キーボード ナビゲーション API を使用して簡単に処理できます。

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#ongridkeydown) が公開されます。イベントは [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`keydown` event（keydown）= "onKeydown（$ event）"を使用できます。
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#navigateto) - 
このメソッドを使用すると、提供された `rowindex` と `visibleColumnIndex` に基づいて位置に移動できます。

以下のデモでは、Excel と同じように、<kbd>Enter</kbd> と <kbd>Shift</kbd> + <kbd>Enter</kbd> キーを使って追加のナビゲーションを使用します。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-mrl-custom-navigation-iframe" data-src='{environment:demosBaseUrl}/grid/grid-mrl-custom-navigation' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-mrl-custom-navigation-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### レイアウトの構成


列レイアウトを構成するときに、適切な [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart)  および [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colend)、または [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) および [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowend) を計算して設定するのが難しい場合があります。  特に 1 つのレイアウトに多数の列がある場合などですが、適用時のプレビューを簡単に確認するためにコンフィギュレーターを使用できます。以下の操作が可能です。

* 設定全体の行数を設定します。すべてのレイアウトは同じ行数である必要があります。
* `レイアウトの追加` チップをクリックするか、レイアウトチップを左右にドラッグして並べ替えます。
* 各レイアウトに特定の設定を列数と幅に合わせて設定します。設定は現在選択されているレイアウトを参照します。
* レイアウト プレビューで列セルのサイズを変更して、より多くの列/行にまたがるようにしたり、`削除`ボタンを使用して列セルを消去したりできます。
* プレビューで列チップをドラッグして列を設定します。
* `列の追加`チップを使用して新しい列を追加/削除します。
* [`NgForOf`](https://angular.io/api/common/NgForOf) を使用してテンプレート内で使用および解析できるJSON表現または igxGrid 内に配置できるように構成全体のテンプレート出力を取得します。

デフォルトでは、前のサンプルと同じ列を設定していますが、目的の設定に合わせて消去して設定することもできます。

<div class="sample-container loading" style="height:500px">
    <iframe id="grid-multi-row-layout-configuration-iframe" data-src='{environment:demosBaseUrl}/grid/grid-multi-row-layout-configuration' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Styling
To begin the customization of the predefined layout, one needs to import the `index` file, where all styling functions and mixins are located.   

 ```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

One can easily create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required for the customization.   


```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: #ff0000,
	$cell-selected-background: #6f6f6f,
	$row-hover-background: #979696,
	$row-selected-background: #8d8d8d,
	$header-background: #494949,
	$header-text-color: #ffffff
);
```

After providing the function with the required parameters, one has to **include** the component mixins.  
```scss
@include igx-grid($custom-theme);
```

 >[!NOTE]
  > If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. Note that the Emulated value of the ViewEncapsulation is the default one.  

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```   
#### Defining a color palette
In the approach, that was described above, the color values were hardcoded. Instead, one could achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #292826;
$red-color: #c72121;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $red-color
);
```
After that, using `igx-color`, a color from the newly generated color palette is easy to be obtained.   
```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: igx-color($custom-palette, "secondary", 100),
    $cell-selected-background: igx-color($custom-palette, "primary", 400),
    $row-hover-background: igx-color($custom-palette, "primary", 600),
    $row-selected-background: igx-color($custom-palette, "primary", 600),
    $header-background: igx-color($custom-palette, "secondary", 700),
    $header-text-color: igx-color($custom-palette, "primary", 600)
);
```
#### Using schemas
One could go further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `_light_grid`.   
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 100)),
    cell-selected-background: (igx-color:('primary', 400)),
    cell-selected-text-color: (igx-color:('primary', 100)),
    row-hover-background: (igx-color:('secondary', 600)),
    row-selected-background: (igx-color:('primary', 600)),
    header-background: (igx-color:('secondary', 700)),
    header-text-color: (igx-color:('primary', 600))
));

```
In order for the custom schema to be applied, either `light`, or `dark` global has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respctive component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```   
<div class="sample-container loading" style="height:605px">
    <iframe id="grid-multi-row-layout-styling" src='{environment:demosBaseUrl}/grid/grid-multi-row-layout-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

 ### API リファレンス	
<div class="divider--half"></div>	

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnLayoutComponent]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
<div class="divider--half"></div>	

 ### その他のリソース	
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)	
* [仮想化とパフォーマンス](virtualization.md)	
* [ページング](paging.md)	
* [並べ替え](sorting.md)	
* [列のサイズ変更](column_resizing.md)	
* [選択](selection.md)	

 <div class="divider--half"></div>	
コミュニティに参加して新しいアイデアをご提案ください。
	
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)	
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)