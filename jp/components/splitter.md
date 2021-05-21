---
title: Angular スプリッター | 分割されたペイン |  Ignite UI for Angular | インフラジスティックス
_description: Angular Splitter コンポーネントを使用して、ビューを水平または垂直に複数の縮小可能なスプリット ペインに分割する単純な分割レイアウトを作成します。
_keywords: angular splitter, igniteui for angular, infragistics, インフラジスティックス
---

# スプリッター

Ignite UI for Angular Splitter コンポーネントはレイアウトを作成し、サイズ変更、展開、縮小が可能な複数の垂直方向または水平方向に配置されたペインに分割できます。これらの操作は、ペイン間のスプリッター バーで公開される UI によって実行されます。以下のデモでシンプルなスプリッター レイアウトを示します。

## Angular スプリッターの例

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-horizontal-sample" alt="Angular スプリッターの例">
</code-view>


<div class="divider--half"></div>

## 使用方法

**igxSplitter** コンポーネントを初期化にするには、まず **IgxSplitterModule** を **app.module** にインポートします。
```typescript
// app.module.ts
...
import { IgxSplitterModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSplitterModule],
    ...
})
export class AppModule {}
```

次に、コンポーネントのマークアップを追加します。
```html
<!-- splitter.component.html -->
<igx-splitter>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```
**igxSplitter** は **igx-splitter** タグで初期化されます。単一の **igx-splitter** コンポーネントの下に複数のスプリッター ペインを定義できます。ペインのコンテンツはテンプレート化可能で、サイズ変更可能なコンテナーに描画されます。


### 方向

スプリッターは、[`type`]({environment:angularApiUrl}/classes/igxsplittercomponent.html#type) 入力によって定義される垂直または水平にすることができます。デフォルト値は Vertical です。
```typescript
public type = SplitterType.Horizontal;
```
```html
<igx-splitter [type]="type">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### ペインの構成

**igxSplitterPane** コンポーネントには、いくつかのプロパティが含まれています。[`size`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#size) プロパティを使用してペインの初期サイズを設定できます。[`minSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#minSize) および [`maxSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#maxSize) プロパティを使用して、ペインの最小または最大サイズを設定できます。`minSize` および `maxSize` を超えるサイズ変更は許可されません。
```html
<igx-splitter>
    <igx-splitter-pane size='300px' minSize='100px'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane size='300px' maxSize='500px'>
        ...
    </igx-splitter-pane>
</igx-splitter>
```
[`resizable`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#resizable) プロパティを **false** に設定してペインのサイズ変更を禁止することもできます。
```html
<igx-splitter>
    <igx-splitter-pane [resizable]='false'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### ネストされたペイン

スプリッター コンポーネントをネストして、スプリッター ペイン内により複雑なレイアウトを作成できます。
```typescript
public typeHorizontal = SplitterType.Horizontal;
public typeVertical = SplitterType.Vertical;
```
```html
<igx-splitter style='height: 30vh;' [type]='typeHorizontal' >
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane1.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane1.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane2.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane2.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
</igx-splitter>
```

### デモ

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-nested-sample" >
</code-view>


## キーボード ナビゲーション

スプリッター コンポーネントではキーボード ナビゲーションがデフォルトで有効です。以下は、スプリッター バーをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

### キーの組み合わせ
- `上矢印` - 垂直スプリッターでスプリッター バーを上へ移動
- `下矢印` - 垂直スプリッターでスプリッター バーを下へ移動
- `左矢印` - 水平スプリッターでスプリッター バーを左へ移動
- `右矢印` - 水平スプリッターでスプリッター バーを右へ移動
- `Ctrl +上矢印` - 垂直スプリッターでペインを展開/縮小
- `Ctrl +下矢印` - 垂直スプリッターでペインを展開/縮小
- `Ctrl +左矢印` - 水平スプリッターでペインを展開/縮小
- `Ctrl +右矢印` - 水平スプリッターでペインを展開/縮小

## スタイル設定
**igxSplitter** コンポーネントのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

スプリッターのデフォルトのスタイルを変更するには、[`igx-splitter-theme`]({environment:sassApiUrl}/index.html#function-igx-splitter-theme) を拡張して新しいテーマを作成します。

```scss
// In splitter-styling-sample.component.scss

$splitter-theme: igx-splitter-theme(
    $bar-color: #011627,
    $handle-color: #ECAA53,
    $expander-color: #ECAA53,
    $border-radius: 0,
    $focus-color: #ECAA53,
    $size: 4px
);
```

### CSS 変数の使用 

次に Splitter のカスタム テーマを渡します。

```scss
@include igx-css-vars($custom-splitter-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。 

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。一方、カスタム テーマが他のコンポーネントのに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom splitter theme to the `igx-splitter` mixin
        @include igx-splitter($custom-splitter-theme);
    }
}
```

### デモ
これは、新しいテーマを適用した結果です。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-styling-sample" >
</code-view>


## API リファレンス
<div class="divider--half"></div>

* [IgxSplitterComponent]({environment:angularApiUrl}/classes/igxsplittercomponent.html)
* [IgxSplitterPaneComponent]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html)
* [SplitterType]({environment:angularApiUrl}/enums/splittertype.html)
* [IgxSplitterComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-splitter-theme)

<div class="divider--half"></div>

## テーマの依存関係
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)
* [IgxIcon スタイル]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

