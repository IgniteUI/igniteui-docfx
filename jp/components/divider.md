---
title: Divider コンポーネント
_description: Ignite UI for Angular Divider コンポーネントは、コンテンツを水平と垂直の両方向に分割できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Divider コンポーネント, Angular Divider ディレクティブ, Angular Divider コントロール
_language: ja
---

# Angular Divider (デバイダー) コンポーネントの概要

<p class="highlight">デバイダー コンポーネントは、コンテンツを水平と垂直の両方向に分割できます。</p>
<div class="divider"></div>

## Angular Divider の例

デフォルトでは、デバイダーは水平の実線です。


<code-view style="height:207px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-1" alt="Angular Divider の例">
</code-view>

## Ignite UI for Angular Divider を使用した作業の開始

Ignite UI for Angular Divider コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxDividerModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxDividerModule } from 'igniteui-angular';
// import { IgxDividerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDividerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxDividerDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxDividerDirective } from 'igniteui-angular';
// import { IgxDividerDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-divider></igx-divider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxDividerDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Divider モジュールまたはディレクティブをインポートしたので、`igx-divider` コンポーネントの使用を開始できます。

## Angular Divider の使用

### 垂直デバイダー
`vertical` 属性を追加してその値を `true` に設定することで、デバイダーの方向を水平から垂直に変更できます。

```html
<igx-divider [vertical]="true"></igx-divider>
```

<code-view style="height:238px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-2" >
</code-view>


### 破線の仕切り
デバイダーのデフォルト スタイルは `solid` ですが、`dashed` も使用できます。
デフォルトの外観を変更するには、デバイダーの `type` 属性を使用してその値を `dashed` に設定します。

```html
<igx-divider type="dashed"></igx-divider>
```

<code-view style="height:187px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-3" >
</code-view>


### インセット デバイダー
デバイダーは両側に設定できます。
デバイダーを埋め込むには、デバイダーの `middle` 属性を `true` に設定し、`inset` 値を指定することにより、デバイダーが両端から縮小し始めます。

**値の最後に単位 (px,rem,%...) を追加する必要があることに注意してください。単位がない場合は機能しません。**

```html
// Both side
<igx-divider [middle]="true" inset="80px"></igx-divider>

// Left side only 
<igx-divider inset="40px"></igx-divider>

```

<code-view style="height:311px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-4" >
</code-view>


`middle` 属性の値が誤った値に設定されている場合、または属性がそれ以外で省略されている場合は、デバイダーは左側にのみ設定されます。

## API リファレンス
<div class="divider--half"></div>

* [IgxDividerDirective]({environment:angularApiUrl}/classes/igxdividerdirective.html)
* [IgxDividerDirective スタイル]({environment:sassApiUrl}/index.html#function-divider-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

