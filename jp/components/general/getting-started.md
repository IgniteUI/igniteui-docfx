---
title: 作業の開始 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular はネイティブ Angular UI コンポーネントのセットです。機能豊かなマテリアル デザイン アプリケーションをすばやくビルドできます。 
_keywords: ignite ui for angular, 作業の開始, angular コンポーネント
_language: ja
---

# Ignite UI を使用した作業の開始

[`Ignite UI for Angular`](https://github.com/IgniteUI/igniteui-angular) は、マテリアルベース UI ウィジェット、コンポーネント & Figma UI キットでインフラジスティックス Angular のディレクティブをサポートします。デスクトップ ブラウザー向けアプリ、高パフォーマンスな HTML5 や JavaScript アプリ、Google の Angular フレームワークを対象にしたプログレッシブ ウェブアプリ (PWA) を作成できます。

Ignite UI for Angular はデュアルライセンス モデルで提供され、使用するコンポーネント、モジュール、ディレクティブ、サービスに応じて商用ライセンスまたはオープンソース ライセンスが適用されます。詳細については、[Ignite UI のライセンス](./ignite-ui-licensing.md)と[オープン ソースとプレミアム](./open-source-vs-premium.md)のトピックを参照してください。

## 前提条件

1. NodeJS をインストールします。
2. Visual Studio Code をインストールします。

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>
<div class="divider--half"></div>

## Ignite UI for Angular のインストール

Ignite UI for Angular は、Angular CLI または Ignite UI CLI を使用してインストールできます。

### Angular CLI のクイック スタート

Angular CLI は、`ng add` コマンドでプロジェクトに外部ライブラリのサポートを提供します。このコマンドは、ライブラリの `npm` パッケージをワークスペースにインストールし、そのライブラリを使用するように現在の作業ディレクトリにプロジェクトを設定します。

Angular CLI を使用して Angular アプリケーションを作成するには、ターミナルを開き、次のコマンドを入力します。

```cmd
ng new <project name> --style=scss
```

`--style` オプションでアプリケーションのスタイルフ ァイルに使用するファイル拡張子またはプリプロセッサを指定できます。コンポーネントのスタイルは [Ignite UI for Angular テーマ ライブラリ](../themes.md) に基づいているため、SCSS を使用することをお勧めします。後で、Ignite UI for Angular パッケージをインストールすると、アプリケーションはデフォルトのスタイリング テーマを使用するように構成され、すべてのコンポーネント インスタンスまたは特定のコンポーネント インスタンスに対して簡単にカスタマイズできます。

その後、次のコマンドを実行して、Ignite UI for Angular パッケージを、その依存関係、フォントのインポートおよびプロジェクトへのスタイル参照とともにインストールできます。

```cmd
ng add igniteui-angular
```

>[!NOTE]
> `igniteui-theming` パッケージは Ignite UI for Angular に付属しているため、明示的にインストールする必要はありません。

>[!NOTE]
> 上記コマンドでインストールされるのは、商用ライセンスの Ignite UI for Angular コンポーネント (例: `igxGrid`) のトライアル版です。

#### 追加パッケージ

プロジェクトに追加したい Ignite UI コンポーネントとして、以下が考えられます。

- Grid Lite - オープンソース

[Grid Lite コンポーネント](../grid-lite/overview.md)は、MIT ライセンスで利用できる最小限の機能セットを提供し、軽量で高速なデータ表示を必要とする幅広いプロジェクトに適しています。これは、エンタープライズ グリッドの複雑さを避けつつ、高速で軽量なデータ表示を必要とする開発者向けに設計されています。商用版 `IgxGrid` と似た API を持つため、アップグレードも容易です。

```cmd
ng add igniteui-grid-lite
```

- Dock Manager - プレミアム

Ignite UI Dock Manager コンポーネントは、ペインでアプリケーションのレイアウトを管理する方法を提供します。エンド ユーザーはペインをピン固定、サイズ変更、移動、非表示にすることでカスタマイズできます。

```cmd
ng add igniteui-dockmanager
```

<!-- TODO: Add specific grid-lite -> igx-grid upgrade info here once available -->

### トライアル版からライセンス版へのアップグレード

**ライセンス版の Ignite UI for Angular パッケージ**の使用を開始する場合、[Schematics および Ignite UI CLI を使用したパッケージのアップグレードガイド](ignite-ui-licensing.md#angular-schematics-または-ignite-ui-cli-を使用したパッケージのアップグレード)に従うことをお勧めします。

以下は、**ライセンス版の Ignite UI for Angular** の使用を開始するために実行する必要がある手順の概要です。プロジェクトのセットアップに応じて、プロジェクトで以下の schematic を実行します。

```bash
ng g @igniteui/angular-schematics:upgrade-packages
```

または `igniteui-cli` を使用する場合:

```bash
ig upgrade-packages
```

Schematic はプロジェクトのパッケージの依存関係を切り替え、ソース参照を更新します。[まだセットアップされていない場合、NPM レジストリへのログインが要求されます](ignite-ui-licensing.md#プライベート-npm-フィードを使用するための環境設定方法)。

#### 新しいセットアップで npm レジストリにログイン

上記の方法は、Ignite UI for Angular トライアル版パッケージが既にインストールされているシナリオのみを対象としています。プロジェクトの新しいセットアップを実行する場合、または Ignite UI for Angular を使用する場合は、以下のガイダンスに従ってください。

次の方法で[プライベート npm フィード環境の正しいセットアップを実行する](ignite-ui-licensing.md#プライベート-npm-フィードを使用するための環境設定方法)ことが重要です:
- プライベート レジストリの有効なセットアップを確認します。
- トライアル版以外のユーザー アカウントとパスワードを指定して npm を使用してプライベート フィードにログインします。

プロセス全体の詳細は[こちらにあります](ignite-ui-licensing.md#プライベート-npm-フィードを使用するための環境設定方法)。

### Angular Schematics & Ignite UI CLI のクイック スタート

アプリケーションをゼロから作成し、Ignite UI for Angular コンポーネントを使用するように構成するには、Ignite UI for Angular Schematics または Ignite UI CLI を使用できます。最初の手順には、以下のように各パッケージをグローバルにインストールします。

```cmd
npm i -g @igniteui/angular-schematics
```

または

```cmd
npm install -g igniteui-cli 
```

[Ignite UI CLI を使用したガイド付きエクスペリエンス](cli/step-by-step-guide-using-cli.md)または [Ignite UI for Angular Schematics](cli/step-by-step-guide-using-angular-schematics.md) は、構成したアプリケーションをブートストラップする最も簡単な方法です。

Ignite UI for Angular Schematics を使用してガイドをアクティブにするには、次のコマンドを実行します。

```cmd
ng new --collection="@igniteui/angular-schematics"
```

CLI ツール を使用する場合は、以下のコマンドを実行します。

```cmd
ig
```

>[!NOTE]
> [まだセットアップされていない場合、手順の実行中のある時点で NPM レジストリへのログインが要求されます](ignite-ui-licensing.md#プライベート-npm-フィードを使用するための環境設定方法)。[商用ライセンス](./open-source-vs-premium.md#全コンポーネントの比較表)対象コンポーネントを使用する場合、トライアルからライセンス版へのアカウント設定が必要です。

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">はじめての Ignite UI CLI アプリ開発</p>
</div>

[Angular Schematics & Ignite UI CLI](cli-overview.md) についての詳細。

## Ignite UI for Angular の使用

ここまでで Ignite UI for Angular コンポーネントを使用する準備ができました。

### コンポーネントの自動追加

#### モジュールのインポートとコンポーネントの使用

`component` スケマティックまたは `add` コマンドを使用して、アプリケーションに新しいコンポーネントを追加できます。

```cmd
ng g @igniteui/angular-schematics:component
```

```cmd
ig add
```

> [!NOTE]
> アプリケーションを Ignite UI CLI を使用して作成した場合、または **ng add igniteui-angular** コマンドで Ignite UI for Angular を追加した Angular CLI を使用して作成した場合は、[`ig add`](https://github.com/IgniteUI/igniteui-cli/wiki/add) コマンドを使用できます。

メニューのオプションでアプリケーションに追加するコンポーネントを選択、次に新しいコンポーネントをプロジェクトに追加するとページのどこでも使用できます。

#### アプリケーションの実行

アプリケーションを実行してページを確認します。

```cmd
npm start
```

### コンポーネントの自動追加

Angular 19 以降では、スタンドアロン コンポーネントが Angular アプリを構築するためのデフォルトの方法となり、`NgModules` が不要になりました。これにより、コンポーネントの追加プロセスが大幅に簡略化されます。ここでは、この仕組みを利用してアプリに [**igxGrid**](../grid/grid.md) コンポーネントを追加してみましょう。

開始する前にご注意ください。一部のコンポーネントにはアニメーションがあり、それらを利用するには `bootstrapApplication` 呼び出しの一部としてプロバイダーが必要です。

```typescript
// main.ts

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

```typescript
// app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

const providers: Provider = [
  importProvidersFrom(BrowserModule),
  provideAnimations()
];

export const appConfig: ApplicationConfig = { providers };
```

#### コンポーネントの使用

igxGrid をマークアップで使用する準備ができました。**app.component.html** ファイルを定義しましょう。

```html
<!-- app.component.html -->

<div style="text-align:center; margin-bottom: 20px;">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>

<div style="text-align: center;">
  <igx-grid [data]="localData" width="600px" height="400px" style="margin: auto" [allowFiltering]="true">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
  </igx-grid>
</div>
```

**app.component.ts** から参照されるグリッド データとアプリケーションのタイトルを定義します。スタンドアロン コンポーネントを使用している場合、テンプレート内で使用するコンポーネントを含め、`IgxGridComponent` クラスをアプリの imports に追加するだけで済みます。例では列を定義しているため、`IgxColumnComponent` も import 配列に追加する必要があります。

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular/grids/grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [IgxGridComponent, IgxColumnComponent]
})
export class AppComponent {
  localData = [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];

  title = 'My Ignite UI project';
}
```

#### アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

- Ignite UI CLI を使用してアプリケーションを作成する場合:

```cmd
ig start
```

- Angular CLI を使用してアプリケーションを作成する場合:

```cmd
ng serve
```

最終的な結果は以下のようになります。

<img class="responsive-img"  src="../../images/general/igniteui-project.png" />

## API リファレンス

このトピックでは、Ignite UI CLI. で Ignite UI for Angular プロジェクトを作成するプロセスを使用して Ignite UI for Angular アプリケーションを作成する方法について説明しました。また Ignite UI for Angular を Angular CLI を使用して既存のアプリケーションに追加する方法についてもふれました。[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) を含むことにより、カスタムなページをデザインしてナビゲーション メニューを参照して表示できる機能が提供されます。

- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli)
- [Ignite UI CLI コマンド](https://github.com/IgniteUI/igniteui-cli/wiki#available-commands)
- [Grid の概要](../grid/grid.md)
- [Grid Lite の概要](../grid-lite/overview.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
