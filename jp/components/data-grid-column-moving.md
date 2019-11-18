---
title: React データ グリッド | Table コントロール | Ignite UI for Angular | 列タイプ | Infragistics
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: react table, Ignite UI for Angular, infragistics
_language: ja
---

## 列移動

$ProductName $ Data Gridは列を移動する機能をサポートしているので、表示されている列の順序に関して列の表示方法を柔軟に選択できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-moving' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

Ignite UI for Angular データグリッド内の列の移動はデフォルトでオンになっており、グリッドの [`ColumnMovingMode`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html) プロパティを設定して制御できます。このプロパティには、Deferred または None の 2 つのオプションがあります。[`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#deferred) は列の移動を許可しますが、[`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#none) はグリッド全体の列の移動を無効にします。

列の移動が [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#deferred) に設定されていると、列を移動している間、セパレーターが表示されます。列を移動しているときにマウス ポインタを離すと、移動した列は区切り記号の右側にある列の位置に移動します。このセパレータは、それぞれ ColumnMovingSeparatorWidth プロパティと ColumnMovingSeparatorBackground プロパティを使用して幅と色をカスタマイズすることもできます。

必要に応じて、列の動きをアニメートすることもできます。これは、グリッドの ColumnMovingAnimationMode プロパティを設定することによって実行できます。アニメーションはデフォルトで編集できません。

### コード スニペット

以下は、遅延列の移動、アニメーションの有効化、5 ピクセル幅のセパレーターを使用して $ ProductName$ Dataグリッドに列移動を実装する方法を示しています。

```ts
import { ColumnMovingAnimationMode } from 'igniteui-react-grids/ES5/ColumnMovingAnimationMode';
import { ColumnMovingMode } from 'igniteui-react-grids/ES5/ColumnMovingMode';
```
