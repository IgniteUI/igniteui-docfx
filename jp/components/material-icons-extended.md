---
title: 拡張されたマテリアル アイコン
_description: Ignite UI for Angular は、マテリアル アイコン セットを拡張して、デザイナーや開発者に幅広いアイコンを提供しています。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール、ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール, 拡張されたマテリアル アイコン
---

# 拡張されたマテリアル アイコン
<p class="highlight">Ignite UI for Angular は、マテリアル アイコン セットを拡張する素晴らしいアイコン セットを提供します。</p>

<div class="sample-container loading" style="height: 700px">
    <iframe id="material-icons-extended-iframe" seamless="" class="lazyload no-theming" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/material-icons-extended" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div class="divider--half"></div>

## インストール

```sh
npm install @igniteui/material-icons-extended
```

## 使用方法

まず、コンポーネントに単一のアイコンを登録する方法を見てみましょう。

```typescript
import { Component, OnInit } from "@angular/core";
import { IgxIconService } from "igniteui-angular";
import { github } from "@igniteui/material-icons-extended";
// ...
export class SampleComponent implements OnInit {
  constructor(private iconService: IgxIconService) {}

  ngOnInit(): void {
    // Register a single icon
    this.iconService.addSvgIconFromText(github.name, github.value, "imx-icons");
  }
}
```

次に、複数のアイコン/カテゴリを登録する方法を見てみましょう。

```typescript
//...
import { health, programming } from "@igniteui/material-icons-extended";

export class SampleComponent implements OnInit {
  public allIcons = [
    ...health,
    ...programming,
  ];
  //...
  addIcons() {
    for (let icon of this.allIcons) {
      this.iconService.addSvgIconFromText(icon.name, icon.value, "imx-icons");
    }
  }

  ngOnInit(): void {
    this.addIcons();
  }
}
```

コンポーネント テンプレートでアイコンを使用するには:

```html
<igx-icon fontSet="imx-icons" name="github"></igx-icon>
```

詳細とその他の使用方法については、[GitHub リポジトリ](https://github.com/IgniteUI/material-icons-extended)にアクセスしてください。

## その他のリソース
<div class="divider--half"></div>

[`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
