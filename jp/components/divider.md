---
title: Divider コンポーネント
_description: Ignite UI for Angular Divider コンポーネントは、コンテンツを水平と垂直の両方向に分割できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Divider コンポーネント, Angular Divider コントロール
_language: ja
---

# Divider

<p class="highlight">デバイダ コンポーネントは、コンテンツを水平と垂直の両方向に分割できます。</p>
<div class="divider"></div>

## Angular Divider の例

デフォルトでは、デバイダは水平の実線です。


<code-view style="height:207px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-1" alt="Angular Divider の例">
</code-view>


## 使用方法

```html
<igx-divider></igx-divider>
```

## 垂直デバイダ
`vertical` 属性を追加してその値を `true` に設定することで、デバイダの方向を水平から垂直に変更できます。

```html
<igx-divider [vertical]="true"></igx-divider>
```

<code-view style="height:238px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-2" >
</code-view>


## 破線の仕切り
デバイダのデフォルト スタイルは`実線`ですが、`破線`も使用できます。
デフォルトの外観を変更するには、デバイダの `type` 属性を使用してその値を `dashed` に設定します。

```html
<igx-divider type="dashed"></igx-divider>
```

<code-view style="height:187px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-3" >
</code-view>


## インセット デバイダ
デバイダは両側に設定できます。
デバイダを埋め込むには、デバイダの `middle` 属性を `true` に設定し、`inset` 値を指定することにより、デバイダが両端から縮小し始めます。

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


`middle` 属性の値が誤った値に設定されている場合、または属性がそれ以外で省略されている場合は、デバイダは左側にのみ設定されます。

## API リファレンス
<div class="divider--half"></div>

* [IgxDividerDirective]({environment:angularApiUrl}/classes/igxdividerdirective.html)
* [IgxDividerDirective スタイル]({environment:sassApiUrl}/index.html#function-igx-divider-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

