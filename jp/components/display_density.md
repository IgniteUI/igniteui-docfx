---
title: 表示密度 |Ignite UI for Angular 
_description: Ignite UI for Angular は、アプリケーションまたはコンポーネント レベルで density プロパティの表示を設定できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular Components, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, density, 表示密度
_language: ja
---

## 表示密度

**@@igxName** デザインは[マテリアル デザイン ガイドライン](https://material.io/guidelines/material-design/introduction.html)に基づきます。現在、cosy、comfortable、compact ビューで表示するための定義済みの[密度](https://material.io/design/layout/density.html#usage)オプションを提供しています。マテリアル UI テーブル/マテリアル UI グリッドに適切な密度を選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。 

### 表示密度のデモ
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="treegrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-display-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:680px">
    <iframe id="hierarchicalgrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[インストール](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順をご確認ください。

### 使用方法

**アプリケーションやコンポーネントのレベルで表示密度を設定**

表示密度の設定は、[DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken) インジェクショントークンを使用して DI プロバイダーを作成します。

```typescript
providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact } }],
```

表示密度のデフォルト値は `useValue` または `useFactory` で設定できます。

必要なスコープに基づいてアプリケーション全体あるいはコンポーネントに作成したプロバイダーを適用できます。

**コントロールの表示密度を明示的に設定**

表示密度を明示的に設定する場合、[`displayDensity`]({environment:angularApiUrl}/classes/displaydensitybase.html#displaydensity) を使用します。

```html
<igx-input-group [displayDensity]="'cosy'"> ... </igx-input-group>
```

### API リファレンス
<div class="divider"></div>

* [DisplayDensity]({environment:angularApiUrl}/enums/displaydensity.html)
* [DisplayDensityBase]({environment:angularApiUrl}/classes/displaydensitybase.html)
* [IDisplayDensity]({environment:angularApiUrl}/interfaces/idisplaydensity.html)
* [DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
