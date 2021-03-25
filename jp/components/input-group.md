---
title: Input Groups コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Input Groups は、データ入力のための使いやすいフォーム、さらに検証およびエラー処理などの機能も提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Label コンポーネント, Angular Label コントロール, Angular Input Group コンポーネント, Angular Input Group コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular リアクティブ フォーム, Angular フォームの検証
_language: ja
---

# Input Group
<p class="highlight">Ignite UI for Angular コントロールは、フォーム入力を処理するためのモデル駆動型のアプローチを提供するリアクティブ フォームで簡単に使用できます。</p>
<div class="divider--half"></div>

## Angular Input Group の例

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Input Group の例">
</code-view>

<div class="divider--half"></div>

## 使用方法
Input Group コンポーネントを初期化にするには、まず `IgxInputGroupModule` を `igniteui-angular` ツールキットにインポートします。

`IgxInputGroup` はテンプレート駆動フォームを使用するために **FormsModule** にも依存します。

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

> [!NOTE]
> `igxInput`、`igxLabel`、`igx-preix`、`igx-suffix` または `igx-hint` ディレクティブを使用するには、`<igx-input-group>` コンテナーでラップする必要があります。

## 例

### Label および Input
[`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html)、[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) ディレクティブとその検証、データ バインディング、API については、[このトピック](label-input.md)を参照してください。

### Prefix および Suffix
`igx-prefix` / `igxPrefix` および `igx-suffix` / `igxSuffix` ディレクティブは、HTML 要素、文字列、アイコン、またはその他のコンポーネントを含むことができます。以下のサンプルでは、文字列 **prefix** とアイコン **suffix** を持つ新しい入力フィールドを作成します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
<iframe class="lazyload" id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Hint
[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブは、入力の下に配置されるヘルパー テキストを提供します。[`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) プロパティの値に応じて、入力の開始または終了の位置に配置できます。以下は、phone 入力にヒントを追加します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

ヒントを追加した phone フィールドは以下のようになります。
<div class="sample-container loading" style="height:110px">
<iframe class="lazyload" id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Input タイプと Input グループ タイプ トークン
入力グループのスタイルは、[`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントの [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) プロパティを使用して変更できます。サポートされている入力グループ コンポーネントは、`line` (タイプが指定されていない場合のデフォルト)、`border`、`box` および `search` です。`line`、`border` および `box` タイプは、マテリアル デザイン テーマ専用に作成されています。これらのタイプを他のテーマで設定しても、入力グループの外観には影響しません。

特定の型を宣言的に設定する例:
```html
<igx-input-group type="border">
```

[IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) インジェクション トークンを使用すると、すべての入力グループ インスタンスのタイプをアプリケーション レベルで指定できます。すべての関連コンポーネントを一度に簡単にスタイル設定できます。
タイプを設定するには、[IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) インジェクション トークンを使用して DI プロバイダーを作成します。

```typescript
providers: [{provide: IGX_input-group_TYPE, useValue: 'box' }]
```

>[!NOTE]
>[`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) プロパティは [IGX_INPUT_GROUP_TYPE]({environment:angularApiUrl}/index.html#igx_input_group_type) よりも優先されるため、type プロパティが明示的に設定されている場合トークン値をコンポーネントレベルでオーバーライドできます。  
>`igniteui-angular` フォーム コントロールのほとんどは、内部で input-group コンポーネントを使用するか、カスタム テンプレートを使用します。グローバル トークンの設定は、これらのコンポーネントにも影響します。

Ignite UI for Angular は、`type="file"` の入力スタイルも提供し、すべての入力グループ タイプとテーマをサポートします。以下をテンプレートに追加するだけです:

```html
<igx-input-group>
    <input igxInput type="file" multiple />
</igx-input-group>
```



<code-view style="height:520px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5" >
</code-view>



### Input Group テーマ

入力グループ コンポーネントは、`material`、`fluent`、`bootstrap`、`indigo-design` などの複数のテーマをサポートします。[`theme`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#theme) は、コンポーネントの初期化中に自動的に設定され、現在使用されているスタイルシートから推測されます。

```html
<igx-input-group theme="fluent">...</igx-input-group>
```

## スタイル設定

入力グループのスタイル設定を開始するには、`index` ファイルをスタイルファイルに含めます。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

次に、[`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) を拡張する新しいテーマを作成し、変更するパラメーターを渡します。

```scss
$custom-input-group: igx-input-group-theme(
  $filled-text-color: #288a54,
  $focused-text-color: #174f30,
  $idle-text-color: #288a54,
  $idle-bottom-line-color: #288a54,
  $interim-bottom-line-color: #288a54,
  $hover-bottom-line-color: #288a54,
  $focused-secondary-color: #174f30,
  $box-background: #eeeeee
);
```

### CSS 変数の使用

最後に、新しく作成したテーマを含めます。

```scss
@include igx-css-vars($custom-input-group);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、[input group mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group) を用いる必要があります。

ただし、先の手順に示すように、インクルード ステートメントをそのままにすると、スタイルは適切に適用されません。テキストの色が適切に変更された場合も、下の境界線と背景は同じままです。これは、コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用しているためです。`input` 要素と `label` 要素はビューの一部であるため、スタイルが正しく適用されます。下の境界線は `igx-input-group` コンポーネントによって生成され、コンポーネントのスタイルの**影響を受けません**。

境界線のスタイルを設定するには、`:: ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターでスタイルのスコープを設定する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-input-group($custom-input-group);
    }
}
```

### デモ


<code-view style="height:120px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputGroup タイプ]({environment:angularApiUrl}/enums/igxinputgrouptype.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

## その他のリソース
<div class="divider--half"></div>

関連トピック:

* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
