---
title: Angular ページレイアウトの管理 | タイル マネージャー | Ignite UI | インフラジスティックス | MITライセンス
_description: Ignite UI for Angular Tile Manager コンポーネントを使用すると、コンテンツを個々のタイルに表示できます。
_keywords: Angular ページ レイアウトの管理, Ignite UI for Angular, UI コントロール, Angular ウィジェット, Web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular タイル マネージャー, インフラジスティックス, タイル, Angular タイル マネージャー コンポーネント, Angular タイル マネージャー コントロール
_license: MIT
_language: ja
---
# Angular Tile Manager (タイル マネージャー) の概要

Tile Manager コンポーネントを使用すると、コンテンツを個々のタイルに表示できます。ユーザーはタイルを並べ替えたりサイズを変更したりして操作できるため、好みに応じてコンテンツのレイアウトや外観を自由にカスタマイズできます。この柔軟性により、パーソナライズされた効率的なコンテンツの表示と管理が可能になり、ユーザー エクスペリエンスが向上します。

## Angular Tile Manager の例

次の Ignite UI for Angular Tile Manager の例では、コンポーネントの動作を示しています。 

<code-view style="height:752px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tile-manager-sample" alt="Angular Tile Manager の例">
</code-view>
<div class="divider--half"></div>

> [!WARNING]
> iframe の権限ポリシーにより、この例のフルスクリーン ボタンは、右上隅の Expand to fullscreen (フルスクリーンに展開) ボタンをクリックしてスタンドアロン モードで例を開いた場合にのみ機能します。

## Ignite UI for Angular Tile Manager を使用した作業の開始

Ignite UI Tile Manager は標準の [Web コンポーネント](https://developer.mozilla.org/ja/docs/Web/Web_Components)であるため、Angular アプリケーションで使用できます。

Tile Manager コンポーネントの使用を開始するには、最初に次のコマンドを実行して Web Components パッケージをインストールする必要があります。

```cmd
npm install igniteui-webcomponents --save
```

次に、`main.ts` ファイルまたは `IgcTileManager` を使用しているコンポーネントの `.ts` ファイルで `IgcTileManagerComponent` 引数を指定して `defineCustomElements()` 関数を呼び出す必要があります。

```ts
import { defineComponents, IgcTileManagerComponent } from 'igniteui-webcomponents';

defineComponents(IgcTileManagerComponent);
```
また、コンポーネントの構成に `CUSTOM_ELEMENTS_SCHEMA` スキーマを含める必要があります。

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
```

これで、Angular Tile Manager の基本構成から始めることができます。

## 使用方法

タイル マネージャーは、最大化状態または通常状態でのタイルの配置を管理する基本的なタイル レイアウト動作を提供します。タイルはそれぞれ独立してサイズを設定でき、複雑なレイアウトを構築できます。エンドユーザーはドラッグ アンド ドロップによる直感的な操作で柔軟にタイルを並べ替えることが可能です。 

タイル マネージャーでは、使用できる 2 つのコンポーネントが提供されます。
- `IgcTileComponent` - このコンポーネントは、タイル マネージャー内に表示される個々のタイルを表します。
- `IgcTileManagerComponent` - これはすべてのタイル コンポーネントを含むメイン コンポーネントであり、タイル レイアウト全体のコンテナーとして機能します。

```html
<igc-tile-manager>
  <igc-tile>
    <p>Tile 1</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 2</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 3</p>
  </igc-tile>
</igc-tile-manager>
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックををご覧ください。

Tile Manager コンポーネントの使用方法の詳細については、[このトピック]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/layouts/tile-manager.html)を参照してください。
