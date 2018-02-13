---
title: Toggle ディレクティブ
_description: Ignite UI for Angular Toggle ディレクティブは、ネイティブ Angular フレームワークで Toggle ディレクティブを実装する要素に含まれるコンテンツを直感的に開いたり、閉じたりできるボックスとして使用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toggle ディレクティブ, Angular Toggle コントロール
---

## Toggle

<p class="highlight">Ignite UI for Angular Toggle ディレクティブは、コードまたは操作によって開いたり、閉じたりできるボックスにコンテンツをラップします。</p>
<div class="divider"></div>

## Toggle デモ

<div>Demo</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular に [**HammerJS**](https://hammerjs.github.io/) の[ピア依存関係](https://nodejs.org/en/blog/npm/peer-dependencies/)があります。
> それを Angular プロジェクトに追加してください。
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

## 使用方法
Toggle は、簡単に開いたり、閉じたりできるボックスにコンテンツをラップします。
Ignite UI for Angular Toggle を初期化する前に、**IgxToggleModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、トグル可能になる要素にディレクティブを適用します。

```html
<!--template.component.html-->
<button (onClick)="toggle()">Open/Close</button>
<div igxToggle>
    <p>Content</p>
</div>
```

このコンテンツを表示/非表示にするには、open または close メソッドを呼び出します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular/main'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggle() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

以下は結果です:

<div class="sample-container" style="height: 200px">
Demo
</div>

#### トグル自動操作

このメソッドの呼び出しを回避するための `onClick` ハンドラーを含む、参照トグルの状態を変更できるディレクティブがあります。はじめに **IgxToggleActionModule** を **app.module.ts** にインポートします。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxToggleActionModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxToggleActionModule]
    ...
})
export class AppModule {}
```

次にテンプレートで **IgxToggleDirective** を割り当てて **IgxToggleActionDirective** を宣言します。トリガー (トグル) として使用する要素で **IgxToggleActionDirective** を宣言します。

```html
<!--template.component.html-->
<button [igxToggleAction]="toggle">Open/Close</button>
<div igxToggle #toggle="toggle">
    <p>Content</p>
</div>
```

この変更後、トグルが以下のように動作します。

<div class="sample-container" style="height: 400px">
Demo
</div>

### API まとめ

このトピックでは Toggle ディレクティブの使用方法について紹介しました。この動作を決定するコードでメソッドを呼び出して表示または非表示にすることができるコンテンツを作成しました。
さらに適切なトグル参照を使用して同じ動作を自動的に制御するその他のディレクティブを追加しました。

### 入力
以下の入力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `collapsed` | Boolean | トグルが開くか閉じるかを決定します。 |

<div class="divider"></div>

以下の入力は **igxToggleAction** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `igxToggleAction` | IgxToggleDirective | 制御するトグルを受け付けます。 |

<div class="divider"></div>

#### 出力
以下の出力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onOpen` | EventEmitter | トグル コンテナーが開いたときにイベントを発生します。 |
| `onClose` | EventEmitter | トグル コンテナーが閉じたときにイベントを発生します。 |

<div class="divider"></div>

#### メソッド
以下のメソッドは **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `open` | void | トグルを開きます。 |
| `close` | void | トグルを閉じます。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
