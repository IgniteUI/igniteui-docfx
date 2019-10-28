---
title: 作業の開始
_description: Ignite UI for Angular はネイティブ Angular UI コンポーネントのセットです。機能豊かなマテリアル デザイン アプリケーションをすばやくビルドできます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

## Ignite UI で作業を開始

[`Ignite UI for Angular`](https://github.com/IgniteUI/igniteui-angular) は、マテリアルベース UI ウィジェット、コンポーネント & Sketch UI キットでインフラジスティックス Angular のディレクティブをサポートします。デスクトップ ブラウザー向けアプリ、高パフォーマンスな HTML5 や JavaScript アプリ、Google の Angular フレームワークを対象にしたプログレッシブ ウェブアプリ (PWA) を作成できます。

### 前提条件

1. NodeJS をインストールします。
2. Visual Studio Code をインストールします。

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>
<div class="divider--half"></div>

### Ignite UI for Angular のインストール

Ignite UI for Angular は、Angular CLI または Ignite UI CLI を使用してインストールできます。

#### Angular CLI のクイック スタート

Angular CLI は、`ng add` コマンドでプロジェクトに外部ライブラリのサポートを提供します。このコマンドは、ライブラリの `npm` パッケージをワークスペースにインストールし、そのライブラリを使用するように現在の作業ディレクトリにプロジェクトを設定します。

Angular CLI を使用して Angular アプリケーションを作成するには、ターミナルを開き、次のコマンドを入力します。

```cmd
ng new <project name> --style=scss
```
`--style` オプションでアプリケーションのスタイルフ ァイルに使用するファイル拡張子またはプリプロセッサを指定できます。コンポーネントのスタイルは [Ignite UI for Angular テーマ ライブラリ](../themes.md) に基づいているため、Scss を使用することをお勧めします。後で、Ignite UI for Angular パッケージをインストールすると、アプリケーションはデフォルトのスタイリング テーマを使用するように構成され、すべてのコンポーネント インスタンスまたは特定のコンポーネント インスタンスに対して簡単にカスタマイズできます。

その後、次のコマンドを実行して、Ignite UI for Angular パッケージを、その依存関係、フォントのインポートおよびプロジェクトへのスタイル参照とともにインストールできます。 

```cmd
ng add igniteui-angular
```

インストール時に IE、Edge、および Safari のポリフィルを有効にするかどうかのプロンプトが表示されます。 これにより、プロジェクトに `web-animations-js` パッケージがインストールされます。これは、アプリケーションとこれらのブラウザーのいずれかで `AnimationBuilder` を使用する場合に必要です。ブラウザーで HTML 要素のスタイルをリセットする CSS ライブラリを追加することもできます。`minireset.css` がアプリケーションにインストールされます。

#### Ignite UI CLI を使用してアプリケーションを作成

ターミナルを開き、[`Ignite UI CLI`](cli-overview.md) をインストールします。

```cmd
npm install -g igniteui-cli 
```

アプリケーションを最短でブートストラップする最も簡単な方法は、Ignite UI CLI [`ガイド エクスペリエンス`](cli/step-by-step-guide.md) を使用する方法です。アプリをビルドしたあとは 1 コマンドで開始できます。

```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

または、Ignite UI CLI [`コマンド`](cli-overview.md#コマンド) を使用し、Ignite UI プロジェクトを生成、新しいコンポーネントの追加、プロジェクトのビルドもできます。

## Ignite UI for Angular の使用

ここまでで Ignite UI for Angular コンポーネントを使用する準備ができました。

### コンポーネントの自動追加

#### モジュールのインポートとコンポーネントの使用
 Ignite UI CLI を使用して簡単に新しいコンポーネントをアプリケーションに追加することができます。

```cmd
ig add
```

> [!NOTE]
> アプリケーションを Ignite UI CLI を使用して作成した場合、または **ng add igniteui-angular** コマンドで Ignite UI for Angular を追加した Angular CLI を使用して作成した場合は、[`ig add`](https://github.com/IgniteUI/igniteui-cli/wiki/add) コマンドを使用できます。

メニューのオプションでアプリケーションに追加するコンポーネントを選択、次に新しいコンポーネントをプロジェクトに追加するとページのどこでも使用できます。

#### アプリケーションの実行

次に [`ig start`](https://github.com/IgniteUI/igniteui-cli/wiki/start) コマンドでアプリケーションを実行してページを確認します。

```cmd
ig start
```

### コンポーネントの自動追加

#### モジュールのインポート

はじめに **app.module.ts** ファイルで使用するコンポーネントの各モジュールをインポートする必要があります。[**igxGrid**](../grid/grid.md) で実行します。BrowserAnimationsModule によってはアニメーションのあるコンポーネントがあることに注意してください。さっそくインポートしてみましょう。

```typescript
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Here we import the IgxGridModule, so we can use the igxGrid!
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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

**app.component.ts** から参照されるグリッド データとアプリケーションのタイトルを定義します。

```typescript
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

<img src="../../images/general/igniteui-project.png" />

## API リファレンス

このトピックでは、Ignite UI CLI. で Ignite UI for Angular プロジェクトを作成するプロセスを使用して Ignite UI for Angular アプリケーションを作成する方法について説明しました。また Ignite UI for Angular を Angular CLI を使用して既存のアプリケーションに追加する方法についてもふれました。[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) を含むことにより、カスタムなページをデザインしてナビゲーション メニューを参照して表示できる機能が提供されます。

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli)
* [Ignite UI CLI コマンド](https://github.com/IgniteUI/igniteui-cli/wiki#available-commands)
* [Grid の概要](../grid/grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
