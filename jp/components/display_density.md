@@if (igxName === 'IgxGrid') {
---
title:  Angular Grid Display Density | Ignite UI for Angular | infragistics 
_description: Learn how to apply material density capabilities to the Material UI table component by using a set of compact view options in the Ignite UI Grid angular component.
_keywords: material density, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title:  Angular Tree Grid Display Density | Ignite UI for Angular | infragistics 
_description: Learn how to apply material density capabilities to the Material UI table component by using a set of compact view options in the Ignite UI Grid angular component.
_keywords: material density, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title:  Angular Hierarchical Grid Display Density | Ignite UI for Angular | infragistics 
_description: Learn how to apply material density capabilities to the Material UI table component by using a set of compact view options in the Ignite UI Grid angular component.
_keywords: material density, igniteui for angular, infragistics
---
}

## 密度の表示

**@@igxName** design is based on [Material Design Guidelines](https://material.io/guidelines/material-design/introduction.html). We currently provide an option to choose between predefined set of display [density](https://material.io/design/layout/density.html#usage) options that will bring a cosy, comfortable or compact view respectively. By selecting the right density for your Material UI table / Material UI grid you can significantly improve the user experience when interacting with large amounts of content. 

### 密度表示のデモ
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="treegrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-display-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:680px">
    <iframe id="hierarchicalgrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
