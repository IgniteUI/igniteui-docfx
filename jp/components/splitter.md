---
title: Angular スプリッター | 分割されたペイン |  Ignite UI for Angular | インフラジスティックス
_description: Angular Splitter コンポーネントを使用して、ビューを水平または垂直に複数の縮小可能なスプリット ペインに分割する単純な分割レイアウトを作成します。
_keywords: angular splitter, angular splitterコンポーネント, angular 分割ビュー コンポーネント, angular ui コンポーネント, igniteui for angular, インフラジスティックス
---

# Angular Splitter (スプリッター) コンポーネントの概要

Ignite UI for Angular Splitter コンポーネントはレイアウトを作成し、サイズ変更、展開、縮小が可能な複数の垂直方向または水平方向に配置されたペインに分割できます。これらの操作は、ペイン間のスプリッター バーで公開される UI によって実行されます。以下のデモでシンプルなスプリッター レイアウトを示します。

## Angular Splitter の例

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-horizontal-sample" alt="Angular スプリッターの例">
</code-view>


<div class="divider--half"></div>

## Ignite UI for Angular Splitter を使用した作業の開始

Ignite UI for Angular Splitter コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSplitterModule` をインポートします。

```typescript
// app.module.ts
...
import { IgxSplitterModule } from 'igniteui-angular';
// import { IgxSplitterModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSplitterModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSplitterComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_SPLITTER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/splitter/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_SPLITTER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SPLITTER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-splitter>
        <igx-splitter-pane>
            Pane 1
        </igx-splitter-pane>
        <igx-splitter-pane>
            Pane 2
        </igx-splitter-pane>
    </igx-splitter>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SPLITTER_DIRECTIVES]
    /* or imports: [IgxSplitterComponent, IgxSplitterPaneComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Splitter モジュールまたはディレクティブをインポートしたので、`igx-splitter` コンポーネントの使用を開始できます。

## Angular Splitter の使用

**igxSplitter** は **igx-splitter** タグで初期化されます。単一の **igx-splitter** コンポーネントの下に複数のスプリッター ペインを定義できます。ペインのコンテンツはテンプレート化可能で、サイズ変更可能なコンテナーに描画されます。

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

### 縮小可能なスプリッター

[`nonCollapsible`]({environment:angularApiUrl}/classes/igxsplittercomponent.html#nonCollapsible) 入力を使用して、スプリッターのハンドルとエキスパンダーを表示または非表示にすることで、スプリッターを折りたたみ可能 (縮小可能) または非折りたたむことができます。デフォルト値は false で、スプリッターは縮小することができます。

```html
<igx-splitter [nonCollapsible]="true">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-collapsible-sample" >
</code-view>

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
- `Ctrl + 上矢印` - 垂直スプリッターでペインを展開/縮小
- `Ctrl + 下矢印` - 垂直スプリッターでペインを展開/縮小
- `Ctrl + 左矢印` - 水平スプリッターでペインを展開/縮小
- `Ctrl + 右矢印` - 水平スプリッターでペインを展開/縮小

## スタイル設定
**igxSplitter** コンポーネントのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

スプリッターのデフォルトのスタイルを変更するには、[`splitter-theme`]({environment:sassApiUrl}/themes#function-splitter-theme) を拡張して新しいテーマを作成します。基本的なパラメーターを提供するだけで、インタラクション状態に必要なすべてのスタイルが自動生成されます。

```scss
// In splitter-styling-sample.component.scss

$splitter-theme: splitter-theme(
  $bar-color: #011627,
  $handle-color: #ecaa53,
  $expander-color: #ecaa53,
  $size: 4px
);
```

### CSS 変数の使用 

次に Splitter のカスタム テーマを渡します。

```scss
@include css-vars($custom-splitter-theme);
```

### デモ
これは、新しいテーマを適用した結果です。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-styling-sample" >
</code-view>

### カスタム サイズ変更

`igx-splitter` を直接ターゲットとして `--size` 変数を使用することができます。

```scss
igx-splitter {
  --size: 10px;
}
```

または、ユニバーサル変数 `--igx-splitter-size` を使用して、すべてのインスタンスをターゲットにすることもできます。

```html
<div class="my-app">
  <igx-splitter></igx-splitter>
</div>
```
```scss
.my-app {
  --igx-splitter-size: 10px;
}
```


## API リファレンス
<div class="divider--half"></div>

* [IgxSplitterComponent]({environment:angularApiUrl}/classes/igxsplittercomponent.html)
* [IgxSplitterPaneComponent]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html)
* [SplitterType]({environment:angularApiUrl}/enums/splittertype.html)
* [IgxSplitterComponent スタイル]({environment:sassApiUrl}/themes#function-splitter-theme)

<div class="divider--half"></div>

## テーマの依存関係
* [IgxDropDown テーマ]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxIcon スタイル]({environment:sassApiUrl}/themes#function-icon-theme)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

