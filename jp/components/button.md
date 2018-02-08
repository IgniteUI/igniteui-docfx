---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button

<p class="highlight">Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。</p>
<div class="divider"></div>

### Button デモ

`igxButton` を使用して span 要素を Ignite UI for Angular のスタイル設定済みボタンにします。

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000">クリック<span>
```

<div class="sample-container loading" style="height: 1192px">
    <iframe id="buttons-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<target-element igxButton [..options]>クリック</target-element>
```

<div class="divider--half"></div>

### Button タイプ

| 名前       |                                                  説明                                                  |
| :--------- | :----------------------------------------------------------------------------------------------------: |
| `flat`     |               デフォルトのボタン タイプ。透明な背景およびプライマリ テーマ色のテキスト。               |
| `raised`   | 名前どおり、このボタン タイプは box-shadow を使用します。プライマリ テーマ色の背景および白いテキスト。 |
| `gradient` |             raised ボタン タイプと同じです。それに、背景色にグラデーションを指定できます。             |
| `fab`      |      フローティング アクションのボタン タイプ。丸形で、プライマリ テーマ色の背景色と白い前景色。       |
| `icon`     |        これは最もシンプルなボタン タイプです。アイコンをボタンとして使用する場合に使用します。         |
| `navbar`   |     icon ボタン タイプと同じですが、igx-navbar コンポーネントで使用するために最適化されています。      |

<div class="divider--half"></div>

### API

| 名前                  |   型   | 説明                                                                  |
| :-------------------- | :----: | :-------------------------------------------------------------------- |
| `igxButton`           | string | 使用される igxButton のタイプを設定します。デフォルト値は flat です。 |
| `igxButtonColor`      | string | ボタンのテキスト色を設定します。任意の有効な CSS 色値を使用できます。 |
| `igxButtonBackground` | string | ボタンの背景色を設定します。任意の有効な CSS 色値を使用できます。     |

<div class="divider--half"></div>
