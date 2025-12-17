---
title: コード分割とマルチ エントリのポイント | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular のマルチエントリ ポイントを使用して、ツリー シェイキングとコード分割を改善し、Angular アプリケーション の バンドル サイズを最適化する方法を説明します。
_keywords: ignite ui for angular, コード分割, エントリ ポイント、ツリー シェイキング, 遅延読み込み, バンドル最適化
_language: ja
---

# コード分割とマルチ エントリのポイント

バージョン 21.0.0 以降、Ignite UI for Angular はマルチ エントリ ポイントをサポートし、コンポーネントのより優れたツリー シェイキング、コード分割、および遅延読み込みを可能にします。このアーキテクチャの改善により、必要なコンポーネントとユーティリティのみをインポートでき、アプリケーションのバンドル サイズを大幅に削減できます。

## 概要

以前は、すべての Ignite UI for Angular コンポーネントは単一のエントリ ポイント (`igniteui-angular`) からエクスポートされていました。便利ではありましたが、このアプローチではすべてのコンポーネントが一緒にバンドルされるため、ビルド ツールが未使用のコードを効果的に除去することが困難でした。

新しいマルチ エントリ ポイント アーキテクチャでは、各コンポーネントまたは関連するコンポーネントのグループが独自の専用エントリ ポイントを持ちます。これにより、最新のバンドラーは次のことが可能になります。

- **コード分割を有効にする** - 各コンポーネントをオンデマンドで個別に遅延読み込みできます
- **初期バンドル サイズを削減する** - アプリケーションが初期読み込みで実際に必要とするもののみをインポートします
- **ビルド パフォーマンスを向上させる** - より小さな依存関係グラフにより、ビルドが高速化されます

## メリット

✅ **コード分割** - 各コンポーネントは遅延読み込み可能
✅ **より小さな初期バンドル** - 必要なもののみをインポート
✅ **より優れたパフォーマンス** - 個々のバンドル サイズの削減により、読み込み時間が短縮されます
✅ **クリーンなアーキテクチャ** - 循環依存関係なし
✅ **完全な下位互換性** - メイン エントリ ポイントは引き続き機能します
✅ **きめ細かい Grid インポート** - 必要な特定の Grid タイプのみを読み込みます

## エントリ ポイントの構造

### コア エントリ ポイント

- `igniteui-angular/core` - コア ユーティリティ、サービス、および基本タイプ (例: `IgxOverlayService`)
- `igniteui-angular/directives` - 共通ディレクティブ

### コンポーネント エントリ ポイント

各コンポーネントは、`igniteui-angular/<component-name>` というパターンに従う独自のエントリ ポイントを持ちます。

- `igniteui-angular/accordion`
- `igniteui-angular/action-strip`
- `igniteui-angular/avatar`
- `igniteui-angular/badge`
- `igniteui-angular/banner`
- `igniteui-angular/bottom-nav`
- `igniteui-angular/button`
- `igniteui-angular/button-group`
- `igniteui-angular/calendar`
- `igniteui-angular/card`
- `igniteui-angular/carousel`
- `igniteui-angular/chat`
- `igniteui-angular/checkbox`
- `igniteui-angular/chips`
- `igniteui-angular/combo`
- `igniteui-angular/date-picker`
- `igniteui-angular/date-range-picker`
- `igniteui-angular/dialog`
- `igniteui-angular/drop-down`
- `igniteui-angular/expansion-panel`
- `igniteui-angular/icon`
- `igniteui-angular/input-group`
- `igniteui-angular/list`
- `igniteui-angular/navbar`
- `igniteui-angular/navigation-drawer`
- `igniteui-angular/paginator`
- `igniteui-angular/progressbar`
- `igniteui-angular/query-builder`
- `igniteui-angular/radio`
- `igniteui-angular/select`
- `igniteui-angular/simple-combo`
- `igniteui-angular/slider`
- `igniteui-angular/snackbar`
- `igniteui-angular/splitter`
- `igniteui-angular/stepper`
- `igniteui-angular/switch`
- `igniteui-angular/tabs`
- `igniteui-angular/time-picker`
- `igniteui-angular/toast`
- `igniteui-angular/tree`

### Grid エントリ ポイント

Grid コンポーネントは、最適なコード分割のためにきめ細かいエントリ ポイントに分割されます。

- `igniteui-angular/grids/core` - 共有 Grid インフラストラクチャ (列、ツールバー、フィルタリング、ソート、パイプ、およびユーティリティ)
- `igniteui-angular/grids/grid` - Data Grid コンポーネント (`IgxGridComponent`)
- `igniteui-angular/grids/tree-grid` - Tree Grid コンポーネント (`IgxTreeGridComponent`)
- `igniteui-angular/grids/hierarchical-grid` - Hierarchical Grid コンポーネント (`IgxHierarchicalGridComponent`、`IgxRowIslandComponent`)
- `igniteui-angular/grids/pivot-grid` - Pivot Grid コンポーネント (`IgxPivotGridComponent`、`IgxPivotDataSelectorComponent`)

## 移行

### 自動移行

推奨される方法は、`ng update` プロセス中にインポートを自動的に移行することです。バージョン 21.0.0 に更新する際、インポートを移行するように求められます。

```cmd
ng update igniteui-angular
```

プロンプトが表示されたら、最適なバンドル サイズのために新しいエントリ ポイントにインポートを移行するには **「Yes」** を選択します。

または、移行を個別に実行することもできます。

```cmd
ng update igniteui-angular --migrate-only --from=20.1.0 --to=21.0.0
```

### 手動移行

手動で移行する場合、または特定のインポートを更新する必要がある場合は、次のパターンに従ってください。

#### 以前 (バージョン 20.x 以前)

```typescript
import { 
  IgxGridComponent,
  IgxTreeGridComponent,
  IgxInputDirective,
  IgxBottomNavComponent,
  Direction, 
  GridBaseAPIService,
  IgxOverlayService,
  IFilteringExpression
} from 'igniteui-angular';
```

#### 以降 (バージョン 21.0.0)

```typescript
import { IgxOverlayService } from 'igniteui-angular/core';
import { IFilteringExpression, GridBaseAPIService } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxInputDirective } from 'igniteui-angular/input-group';
import { IgxBottomNavComponent } from 'igniteui-angular/bottom-nav';
import { CarouselAnimationDirection } from 'igniteui-angular/carousel';
```

### タイプ名の変更

新しいアーキテクチャとの命名の競合を回避するために、一部のタイプ名が変更されました。

- `Direction` → `CarouselAnimationDirection` (carousel エントリ ポイント内)

```typescript
// 以前
import { Direction } from 'igniteui-angular';

// 以降
import { CarouselAnimationDirection } from 'igniteui-angular/carousel';
```

## 下位互換性

メイン エントリ ポイント (`igniteui-angular`) は、すべてのきめ細かいエントリ ポイントを再エクスポートすることにより、**完全な下位互換性**を維持します。変更なしでメイン エントリ ポイントからのインポートを引き続き使用できます。

```typescript
// これは引き続き機能します
import { IgxGridComponent, IgxButtonDirective } from 'igniteui-angular';
```

ただし、より優れたツリー シェイキングとより小さなバンドル サイズを活用するために、**新しいエントリ ポイントに移行することを強くお勧めします**。

## 使用例

### 例 1: シンプルなコンポーネントの使用

ボタンと入力のみが必要な場合は、それらのエントリ ポイントのみをインポートします。

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/button';
import { 
  IgxInputGroupComponent, 
  IgxInputDirective, 
  IgxLabelDirective 
} from 'igniteui-angular/input-group';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    IgxButtonDirective,
    IgxInputGroupComponent,
    IgxInputDirective,
    IgxLabelDirective
  ],
  template: `
    <igx-input-group>
      <label igxLabel>Name</label>
      <input igxInput type="text" />
    </igx-input-group>
    <button igxButton="contained">Submit</button>
  `
})
export class FormComponent {}
```

### 例 2: 特定の機能を持つ Grid

必要な Grid タイプのみをコア Grid ユーティリティと一緒にインポートします。

```typescript
import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxGridToolbarComponent } from 'igniteui-angular/grids/core';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [IgxGridComponent, IgxGridToolbarComponent],
  template: `
    <igx-grid [data]="data" [autoGenerate]="true">
      <igx-grid-toolbar></igx-grid-toolbar>
    </igx-grid>
  `
})
export class DataGridComponent {
  public data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
}
```

### 例 3: コンポーネントの遅延読み込み

新しいエントリ ポイントを使用すると、コンポーネントを簡単に遅延読み込みできます。

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'grid',
    loadComponent: () => 
      import('./features/grid/grid.component')
        .then(m => m.GridComponent)
  },
  {
    path: 'tree-grid',
    loadComponent: () => 
      import('./features/tree-grid/tree-grid.component')
        .then(m => m.TreeGridComponent)
  }
];
```

```typescript
// features/grid/grid.component.ts
import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [IgxGridComponent],
  template: `<igx-grid [data]="data" [autoGenerate]="true"></igx-grid>`
})
export class GridComponent {
  public data = [];
}
```

## 移行オプションの概要

バージョン 21.0.0 に更新する際には 3 つのオプションがあります。

### オプション 1: 更新中に移行する (推奨)

```cmd
ng update igniteui-angular
```

プロンプトが表示されたら、インポートを移行するには **「Yes」** を選択します。

### オプション 2: メイン エントリ ポイントを引き続き使用する

```cmd
ng update igniteui-angular
```

プロンプトが表示されたら、メイン エントリ ポイントを引き続き使用するには **「No」** を選択します。ライブラリは完全な下位互換性を維持しますが、最適なバンドル サイズのメリットは得られません。

### オプション 3: 後で移行する

移行せずに更新します (プロンプトが表示されたら 「No」 を選択)。

```cmd
ng update igniteui-angular
```

後で手動で移行します。

```cmd
ng update igniteui-angular --migrate-only --from=20.1.0 --to=21.0.0
```

## ベスト プラクティス

1. **特定のエントリ ポイントを使用する** - 可能な限り最も特定的なエントリ ポイントからインポートします (例: `igniteui-angular` ではなく `igniteui-angular/grids/grid`)
2. **遅延読み込みを活用する** - さらに優れたパフォーマンスのために、エントリ ポイントを Angular の遅延読み込みと組み合わせます
3. **必要なもののみをインポートする** - 1 つのサービスのみが必要な場合は、`core` エントリ ポイント全体をインポートしないでください
4. **バンドル アナライザーを確認する** - [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) などのツールを使用して、バンドル サイズの改善を確認します
5. **定期的に更新する** - 最新の最適化の恩恵を受けるために、Ignite UI for Angular バージョンを最新の状態に保ちます

## その他のリソース

- [Angular パッケージ形式 - エントリ ポイントとコード分割](https://angular.io/guide/angular-package-format#entrypoints-and-code-splitting)
- [Ignite UI for Angular アップデート ガイド](update-guide.md)
- [Ignite UI for Angular CHANGELOG (英語)](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md)
- [Ignite UI for Angular GitHub リポジトリ](https://github.com/IgniteUI/igniteui-angular)

## API リファレンス

特定のコンポーネントとその API の詳細については、コンポーネント ドキュメントを参照してください。

- [Grid](../grid/grid.md)
- [Tree Grid](../treegrid/tree-grid.md)
- [Hierarchical Grid](../hierarchicalgrid/hierarchical-grid.md)
- [Pivot Grid](../pivotGrid/pivot-grid.md)