---
title: Angular Accordion – 完全機能の縮小可能なパネル - インフラジスティックス
_description: Angular Accordion は、アコーディオン メニューで垂直方向に展開可能なパネルを作成するために使用します。Ignite UI for Angular Accordion コンポーネントで実行方法をお試しください。
_keywords: angular accordion, angular accordion コンポーネント, angular アコーディオン, angular アコーディオン コンポーネント, angular アコーディオンの例, ignite ui for angular, angular UI コンポーネント, infragistics, インフラジスティックス
_language: ja
---

# Angular Accordion (アコーディオン) コンポーネントの概要

## Angular Accordion とは? 

Angular Accordion は、単一のコンテナーに表示されるクリック可能なヘッダーと関連するコンテンツ セクションを含む垂直方向に展開可能なパネルを構築するための GUI コンポーネントです。Accordion は、単一のページのコンテンツの複数のセクションでスクロールする必要性を軽減するためによく使用されます。キーボード ナビゲーションと基になるパネルの展開状態を制御する API を提供します。

ユーザーは、サムネイルやラベルなどの項目のリスト間で操作および移動できます。含まれる情報を表示するために、各項目を切り替えることができます (展開または縮小)。構成に応じて、一度に 1 つまたは複数の展開されている項目があります。

## Angular Accordion の例
以下は FAQ セクションの基本的な Angular Accordion の例です。アコーディオンとして動作し、個別に動作します。複数のパネルを同時に展開しながら、各テキスト ブロックをシングルクリックで切り替えることができます。これにより、自動的に展開および縮小パネル間を前後に移動することなく、情報をより簡単に読み取ることができます。このパネルは、以前に開いたセクションを毎回非表示にします。

ここでは、`igx-accrodion` とその[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を定義する方法を確認できます。このサンプルは、2 種類の展開動作も示します。切り替えボタンは [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) プロパティを設定し、一度に展開する単一ブランチと複数ブランチを切り替えます。

<code-view style="height:460px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-1" alt="Angular Accordion の例">
</code-view>

<div class="divider--half"></div>

### Ignite UI for Angular Accordion を使用した作業の開始

Ignite UI for Angular Accordion コンポーネントを初期化するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxAccordionModule` をインポートします。 

```typescript
// app.module.ts

...
import { IgxAccordionModule } from 'igniteui-angular';
// import { IgxAccordionModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAccordionModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxAccordionComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_ACCORDION_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/accordion/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

...
import { IGX_ACCORDION_DIRECTIVES } from 'igniteui-angular';
// import { IGX_ACCORDION_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-accordion>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Content Panel 1
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACCORDION_DIRECTIVES]
    /* or imports: [IgxAccordionComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Accordion モジュールまたはディレクティブをインポートしたので、`igx-accordion` とそのパネルの基本構成を開始できます。

## Angular Accordion コンポーネントの使用

[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) の各セクションは、[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を使用して定義されます。
パネルには [disabled]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#disabled)、[collapsed]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed)、および [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings) プロパティがあり、要件に応じてパネルの状態を構成できます。 

### Accordion の宣言

Accordion は、その内部で宣言されたすべての [`igx-expansion-panel`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) をラップします。

```html
<igx-accordion #accordion [singleBranchExpand]="true">
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```

[panels]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#panels) アクセサーを使用して、`igx-accordion` のすべての子の[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を含むコレクションへの参照を取得できます。

```typescript
@ViewChild('accordion', { static: true })
public accordion!: IgxAccordionComponent;

this.accordion.panels;
```

上記で示したように、[singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) プロパティを使用すると、一度に 1 つまたは複数のパネルを展開できるかどうかを設定できます。

### Angular Accordion のアニメーション

Angular Accordion は、パネルの展開と縮小の両方のアニメーションをサポートします。アニメーションの動作をカスタマイズできます。通常、アニメーションは各展開パネルに個別に設定できます。ただし、[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) レベルで一度にすべてのパネルに適用することもできます。これにより、ユーザーは [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) の animations プロパティですべてのセクションのアニメーションを一度に無効にできます。

アニメーションに関して、2 つのオプションがあります。最初に、Accordion コンポーネントの `animationSettings` プロパティを設定します。

```typescript
import { useAnimation } from '@angular/animations';
import { slideInLeft, slideOutRight } from 'igniteui-angular';
// import { slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    ...
})
export class AccordionComponent {
    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: '100ms',
                toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: '500ms',
                fromPosition: 'translateX(-15px)',
                startOpacity: 0.1
            }
        })
    };
}
```

[**ビルトイン アニメーション スイート**]({environment:sassApiUrl}/animations)の [`slideInLeft`]({environment:sassApiUrl}/animations#mixin-slide-in-left) アニメーションと [`slideOutRight`]({environment:sassApiUrl}/animations#mixin-slide-out-right) アニメーションを使用して、コンテンツを折りたたむとコンポーネントのコンテンツが左側から表示され、右側に消えるようにします。アニメーションのパラメーターをオーバーライドして、アニメーションをさらにカスタマイズします。

以下のスニペットは、アニメーション設定をコンポーネントに渡す方法を示しています。

```html
<igx-accordion #accordion [animationSettings]="animationSettingsCustom">
    ...
</igx-accordion>
```

>[!NOTE]
>[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) のアニメーションを無効にするには、`animationSettings` を `null` に設定します。

または、各[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)の [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings) 入力を設定することもできます。

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel [animationSettings]="slideLeftRightSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel [animationSettings]="slideTopBottomSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```
[collapseAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#collapseAll) および [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll) メソッドを使用すると、[IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) のすべての [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) をプログラムでそれぞれ縮小および展開できます。

>[!NOTE]
>[singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) プロパティが *true* に設定されている場合、[expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll) メソッドを呼び出すと、最後の[パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)のみが展開されます。

### Angular Accordion テンプレート化の例
Angular [Accordion コンポーネント]({environment:angularApiUrl}/classes/igxaccordioncomponent.html)を使用すると、ヘッダーとコンテンツ パネルの外観をカスタマイズできます。
以下のサンプルは、[IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) の組み込みテンプレート機能を使用して詳細なフィルタリング オプションを実装する方法を示しています。

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-3" alt="Angular Accoridon の例">
</code-view>

<div class="divider--half"></div>

### ネストされた Angular Accoridon のシナリオ
以下の Angular Accordion 例では、この一般的なアプリケーション シナリオを説明するために、複雑な FAQ セクションを作成します。サンプルでネストされた [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) は、[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)の本体内に [Accordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) を追加することによって実現されます。

```html
<igx-accordion #accordion>
     <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            <igx-accordion #childAccordion>
                <igx-expansion-panel>
                    <igx-expansion-panel-header>
                        <igx-expansion-panel-title>Title Nested Panel 1</igx-expansion-panel-title>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        Content Nested Panel 1
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
                ...
            </igx-accordion>
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    ...
</igx-accordion>
```

以下は結果です。

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-2" alt="Angular Accordion の例">
</code-view>

<div class="divider--half"></div>

## キーボード ナビゲーション
Ignite UI for Angular Accordion のキーボード ナビゲーションは、さまざまなキーボード操作をエンドユーザーに提供します。この機能はデフォルトで有効になっており、エンドユーザーは簡単にパネル間を移動できます。[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) ナビゲーションは W3C アクセシビリティ標準に準拠しており、便利に使用できます。

**キーの組み合わせ**

 - <kbd>Tab</kbd> - フォーカスを最初 (フォーカスが Accordion の前にある場合) /次のパネルに移動します
 - <kbd>Shift + Tab</kbd> - フォーカスを最後 (フォーカスが Accordion の後にある場合) /前のパネルに移動します
 - <kbd>下矢印</kbd> - フォーカスを下のパネルに移動します
 - <kbd>上矢印</kbd> - フォーカスを上のパネルに移動します
 - <kbd>Alt + 下矢印</kbd> - Accordion でフォーカスされたパネルを展開します
 - <kbd>Alt + 上矢印</kbd> - Accordion のフォーカスされたパネルを縮小します
 - <kbd>Shift + Alt + 下矢印</kbd> - 有効なすべてのパネルを展開します (singleBranchExpand が true に設定されている場合、最後の有効なパネルを展開します)
 - <kbd>Shift + Alt + 上矢印</kbd> - 有効なすべてのパネルを縮小します
 - <kbd>Home</kbd> - Accordion の最初の有効なパネルに移動します
 - <kbd>END</kbd> - Accordion の最後の有効なパネルに移動します

## スタイル設定

[`Accordion`]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) は、基になる[`パネル`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)のコンテナーとしてのみ機能します。スタイルは、[`IgxExpansionPanel トピックのスタイル設定セクション`](expansion-panel.md#スタイル設定)で説明されているように、パネルのテーマから直接適用できます。

設計上、`igx-accordion` 内に配置される場合、展開されたパネルにマージンが設定されます。変更するために、igx-expansion-panel テーマ内で公開されるプロパティがあります。
テーマ エンジンによって公開される関数を利用するには、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`expansion-panel-theme`]({environment:sassApiUrl}/themes#function-expansion-panel-theme) を拡張し、`$header-background`、`$body-color`、および `$expanded-margin` の各パラメーターを受け取る新しいテーマを作成します。このテーマは、指定された背景色に対してコントラストの高い前景色 (黒または白) を自動的に選択して割り当てます。

```scss
$custom-panel-theme: expansion-panel-theme(
  $header-background: #011627,
  $body-background: #f0ece7,
  $expanded-margin: 10px
);
```

最後にコンポーネントのテーマを含めます。

```scss
@include css-vars($custom-panel-theme);
```

### デモ

<code-view style="height:350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-style" alt="Angular Accordion スタイルの例">
</code-view>

## API リファレンス
* [IgxAccordion API]({environment:angularApiUrl}/classes/igxaccordioncomponent.html)
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/themes#mixin-igx-expansion-panel)


## その他のリソース
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
