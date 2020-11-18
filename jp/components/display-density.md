---
title: 表示密度 | Ignite UI for Angular 
_description: Ignite UI for Angular は、アプリケーションまたはコンポーネント レベルで density プロパティの表示を設定できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular Components, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, density, 表示密度
_language: ja
---

# 表示密度

密度設定の表示は、大規模データセットのビジュアル表示を大きく改善します。Ignite UI for Angular では、事前に定義された一連のオプション (comfortable、compact、 cosy) を提供します。

[DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken) インジェクション トークンを使用し、アプリケーションやコンポーネントの表示密度を設定できます。 

## Angular 表示密度の例
<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="density-sample" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/theming/density" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="density-sample" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="density-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[インストール](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順をご確認ください。

## 使用方法

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

## API リファレンス
<div class="divider"></div>

* [DisplayDensity]({environment:angularApiUrl}/enums/displaydensity.html)
* [DisplayDensityBase]({environment:angularApiUrl}/classes/displaydensitybase.html)
* [IDisplayDensityOptions]({environment:angularApiUrl}/interfaces/idisplaydensityoptions.html)
* [DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
