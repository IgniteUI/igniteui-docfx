---
title: Label & Input ディレクティブ
_description: Ignite UI for Angular Label および Input ディレクティブを使用すると、単一行または複数行の入力要素を装飾およびスタイル設定し、CSS スタイルを追加し、その他のコントロールと統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Label コンポーネント, Angular Label コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular Reactive Forms, Angular フォームの検証
_language: ja
---

# Angular Label & Input (ラベル & 入力) ディレクティブの概要
Ignite UI for Angular Input および Label ディレクティブを使用すると、`igx-input-group` コンポーネント内の単一行または複数行の入力要素を装飾およびスタイル設定できます。

<div class="divider--half"></div>

## Angular Label および Input の例

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Label および Input の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Label & Input を使用した作業の開始

Ignite UI for Angular Label & Input ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxInputGroupModule` をインポートします。

```typescript
// app.module.ts

import { FormsModule } from '@angular/forms';
import { IgxInputGroupModule } from 'igniteui-angular';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package


@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxLabelDirective`、`IgxInputDirective`、および `IgxInputGroupComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/input-group/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
// import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input igxInput name="fullName" type="text" [(ngModel)]="fullName" />
        <label igxLabel for="fullName">Full Name</label>
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_INPUT_GROUP_DIRECTIVES, FormsModule]
    /* or imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, FormsModule] */
})
export class HomeComponent {
    public fullName = 'John Doe';
}
```

Ignite UI for Angular Input Group モジュールまたはディレクティブをインポートしたので、`igxLabel` & `igxInput` ディレクティブおよび `igx-input-group` コンポーネントの使用を開始できます。

## Angular Label & Input の使用
Label および Input ディレクティブのデフォルト スタイル設定はマテリアル デザイン [**ガイドライン**](https://material.io/guidelines/components/text-fields.html)のテキスト フィールド仕様を実装します。

[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) および [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html) を使用するには、`<igx-input-group>` コンテナーにラップします。

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

`igxInput` ディレクティブは `<input>` および `<textarea>` 単一行および複数行テキスト フィールドの HTML 要素に適用できます。

### 検証
[`required`]({environment:angularApiUrl}/classes/igxinputdirective.html#required) 属性を使用して `input` を検証できます。ラベルの隣にアスタリスクが追加され、このフィールドは必須入力であることを示します。入力は検証が成功/失敗したかどうかによって緑/赤に変わります。

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-2" >
</code-view>

<div class="divider--half"></div>

### データ バインディング
Ignite UI for Angular Input ディレクティブは、一方向および双方向のデータ バインディングをサポートします。以下のコードは `NgModel` を使用して双方向のデータ バインディングを追加する方法を示します。

```typescript
public user = {
    fullName: ""
};

```

マークアップのコード:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

### フォーカスとテキストの選択

[`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) ディレクティブを使用して、input 要素に `focus` を強制するロジックを追加できます。

```html
<igx-input-group>
    <input igxInput [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```
>[!NOTE]
>[`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) ディレクティブを使用するには、[`IgxFocusModule`]({environment:angularApiUrl}/classes/igxfocusmodule.html) をインポートする必要があります。

`igxInput` でマークされた input 要素内のテキストをフォーカス際に選択したい場合、[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) ディレクティブを有効にする必要があります。

```html
<igx-input-group>
    <input igxInput [igxTextSelection]="true" [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>

<igx-input-group>
    <input igxInput [igxTextSelection]="true" name="email" type="text" />
    <label igxLabel for="email">Email</label>
</igx-input-group>
```
>[!NOTE]
>[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html)  ディレクティブを使用するには、[`IgxTextSelectionModule`]({environment:angularApiUrl}/classes/igxtextselectionmodule.html) をインポートする必要があります。


<code-view style="height: 130px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-text-selection" >
</code-view>

<div class="divider--half"></div>

## Input Group
Ignite UI for Angular Input Group コンポーネントは、開発者が使いやすく美しフォームを作成するのに役立ちます。詳細については、別のトピック[こちら](input-group.md) を参照してください。

## API リファレンス
<div class="divider--half"></div>

* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## その他のリソース
<div class="divider--half"></div>

関連トピック:
* [Input Group](input-group.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)