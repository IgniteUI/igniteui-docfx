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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>	
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
> [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) プロパティと [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) プロパティは、それぞれの `igx-column` に対して`igx-column-layout` に設定する必要があります。`igxColumnLayout` コンポーネントはレイアウトが正しいかどうかを検証しておらず、それについてエラーや警告を投げていません。 開発者は、レイアウトの宣言が正しく完全であることを確認する必要があります。誤った配置、オーバーラップ、ブラウザの不整合などが発生し、レイアウトが壊れる可能性があります。	

 ### 機能の統合	
複数行レイアウトのレンダリング方法は全く異なるため、列固定や列非表示など一部の列機能は `igx-column-layout` コンポーネントでのみ機能します。  その他の機能ソートとグループ化などは、`igx-column` コンポーネントで同じように機能します。	
- フィルタリング - Excel スタイルのフィルタリングのみがサポートされています。`filterMode` を `FilterMode.quickFilter` に明示的に設定しても効果はありません。	
- ページング - 表示行ではなくレコードで機能します。	
- グループ化 - `hideGroupedColumns` オプションは、複数行レイアウトでは効果がありません。グループ化された列は常に表示されます。	

 以下の機能は現在サポート**されません**。	
- 列移動 	
- 複数列ヘッダー	
- Excel へエクスポート	
- 集計	

 ### キーボード ナビゲーション	

複数行レイアウトを持つ IgxGridComponent は、ビルトインのキーボード ナビゲーションを提供します。

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

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) が公開されます。イベントは [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`keydown` イベント `(keydown)="onKeydown($event)"` を使用できます。
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) - 
このメソッドを使用すると、提供された `rowindex` と `visibleColumnIndex` に基づいて位置に移動できます。

以下のデモでは、Excel と同じように、<kbd>Enter</kbd> と <kbd>Shift</kbd> + <kbd>Enter</kbd> キーを使って追加のナビゲーションを使用します。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-mrl-custom-navigation-iframe" data-src='{environment:demosBaseUrl}/grid/grid-mrl-custom-navigation' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-mrl-custom-navigation-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-mrl-custom-navigation-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### レイアウトの構成


列レイアウトを構成するときに、適切な [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart)  および [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colend)、または [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) および [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowend) を計算して設定するのが難しい場合があります。  特に 1 つのレイアウトに多数の列がある場合などですが、適用時のプレビューを簡単に確認するためにコンフィギュレーターを使用できます。以下の操作が可能です。

* 設定全体の行数を設定します。すべてのレイアウトは同じ行数である必要があります。
* `レイアウトの追加` チップをクリックするか、レイアウトチップを左右にドラッグして並べ替えます。
* 各レイアウトに特定の設定を列数と幅に合わせて設定します。設定は現在選択されているレイアウトを参照します。
* レイアウト プレビューで列セルのサイズを変更して、より多くの列/行にまたがるようにしたり、`削除`ボタンを使用して列セルを消去したりできます。
* プレビューで列チップをドラッグして列を設定します。
* `列の追加`チップを使用して新しい列を追加/削除します。
* [`NgForOf`](https://angular.io/api/common/NgForOf) を使用してテンプレート内で使用および解析できる JSON 表現または igxGrid 内に配置できるように構成全体のテンプレート出力を取得します。

デフォルトでは、前のサンプルと同じ列を設定していますが、目的の設定に合わせて消去して設定することもできます。

<div class="sample-container loading" style="height:500px">
    <iframe id="grid-multi-row-layout-configuration-iframe" data-src='{environment:demosBaseUrl}/grid/grid-multi-row-layout-configuration' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### スタイル設定
igxGridを使用すると、[Ignite UI for Angular Theme ライブラリ](../themes/component-themes.md) でスタイルを設定できます。[テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。 

以下は、グリッドの複数行レイアウト スタイルをカスタマイズする手順です。     

 #### グローバル テーマのインポート
複数行レイアウト機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### カスタム テーマの定義
次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じて機能レイアウトをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。   

```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: #ffcd0f,
    $cell-selected-background: #6f6f6f,
    $row-hover-background: #fde069,
    $row-selected-background: #8d8d8d,
    $header-background: #494949,
    $header-text-color: #fff,
    $sorted-header-icon-color: #ffcd0f,
    $sortable-header-icon-hover-color: #e9bd0d
);
```    

#### カスタム カラー パレットの定義
上記で説明したアプローチでは、色の値がハード コーディングされていました。または、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、柔軟性を高めることができます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。 

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```   

カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。

```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: igx-color($custom-palette, "secondary", 500),
    $cell-selected-background: igx-color($custom-palette, "primary", 300),
    $row-hover-background: igx-color($custom-palette, "secondary", 300),
    $row-selected-background: igx-color($custom-palette, "primary", 100),
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-contrast-color($custom-palette, "primary", 500),
    $sorted-header-icon-color: igx-color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: igx-color($custom-palette, "secondary", 600)
);
```

#### カスタム スキーマの定義
さらに進んで、[**スキーマ**](../themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。   
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマの 1 つを拡張します。この場合、`$_light_grid` を使用します。   
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 300)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    sorted-header-icon-color: (igx-color:('secondary', 500)),
    sortable-header-icon-hover-color: (igx-color:('secondary', 600)) 
));
```   

カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。   

```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));
 $custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。  
```scss
@include igx-grid($custom-theme);
```

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが[`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイル設定は `::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。 

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

#### デモ 

<div class="sample-container loading" style="height:755px">
    <iframe id="grid-multi-row-layout-styling" data-src='{environment:demosBaseUrl}/grid/grid-multi-row-layout-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multi-row-layout-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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
