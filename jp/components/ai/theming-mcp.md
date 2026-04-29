---
title: Angular Theming MCP | Infragistics
_description: Ignite UI for Angular には Ignite UI Theming MCP サーバーが付属しており、Angular アプリケーション用のカスタム テーマ、パレット、タイポグラフィ、エレベーションを作成できます。MCP サーバーを使用してブランドおよび設計要件に合わせたカスタム テーマを生成および適用する方法について説明します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, コンポーネント スイート, 人工知能, AI, MCP, Model Context Protocol, テーマ設定, カスタム テーマ, パレット, タイポグラフィ, エレベーション
_license: MIT
mentionedTypes: []
_language: ja
---

# Ignite UI Theming MCP

<p class="highlight">Ignite UI Theming MCP は、AI アシスタントが Ignite UI アプリケーション用の本番対応のテーマ コードを生成できるようにする <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) サーバーです。MCP は、AI アシスタントが外部サーバーによって提供される特殊なツールを呼び出すことができるようにするオープン標準です。Ignite UI Theming MCP をエディターまたはデスクトップ AI クライアントに接続し、必要なものを説明すると、アシスタントが残りを行います。</p>

<div class="divider"></div>

## 概要

スタイルを手動で記述する代わりに、テーマの意図を自然言語で説明し、AI アシスタントに正しいコードを生成させることができます。MCP サーバーは、適切なシェード生成を備えたパレット、タイポグラフィ、エレベーション、コンポーネント デザイン トークン オーバーライドなどを含む、正確なテーマ コードを生成するために必要な知識とツールを AI に提供します。

このサーバーは、4 つすべての Ignite UI デザイン システム (**Material**、**Bootstrap**、**Fluent**、**Indigo**) をライトとダークの両方のバリアントでサポートします。このガイドでは Angular に焦点を当てていますが、MCP サーバーは Infragistics のすべての Ignite UI コンポーネント ライブラリでも動作します。`detect_platform` ツールは `package.json` を読み取り、正しいインポート パスとセレクターを自動的に選択します。

ほとんどのツールは、**Sass** または **CSS** 出力のいずれかを生成できます。Sass 出力がデフォルトで、`igniteui-theming` Sass モジュールと統合されます。CSS 出力は、すぐに使用できる CSS カスタム プロパティを生成し、**ローカル Sass ツールチェーンなしで**使用できます。サーバーがコンパイルを行います。

**接続後に試すプロンプトの例:**

> 「プライマリ #2563eb とコーラル セカンダリ #f97316 を使用して、Angular アプリ用の完全な Material Design ダーク テーマを作成して」

> 「ボタン コンポーネントで利用可能なデザイン トークンは何ですか? ブランドの紫 #8b5cf6 でカスタマイズして」

> 「ブランド ガイドラインでは、すべてのプライマリ シェードに正確な 16 進数値が指定されています。これらの明示的な値でカスタム パレットを作成して」

> 「カレンダー コンポーネントでより小さい間隔を使用するようにして」

## 前提条件

MCP サーバーを構成する前に、次のものがあることを確認してください。

- **Node.js** (v18 以降) がインストールされていること — これにより、サーバーの起動に使用される `npx` コマンドが提供されます。
- `package.json` に依存関係として **Ignite UI パッケージ**がリストされているプロジェクト。

Angular の場合、これは `igniteui-angular` (v15.0 以降) です。サーバーは、`igniteui-webcomponents`、`igniteui-react`、`igniteui-blazor` もサポートします。

- **MCP サポートを備えた AI クライアント** — 例: VS Code と GitHub Copilot、Cursor、Claude Desktop、Claude Code、または AI Assistant プラグインを備えた JetBrains IDE。

`igniteui-angular` がまだインストールされていない場合は、次のコマンドを実行します。

```bash
ng add igniteui-angular
```

## セットアップ

MCP サーバーは `igniteui-theming` パッケージにバンドルされており、`npx` 経由で起動されます。プロジェクトに Ignite UI パッケージが既にインストールされている以外に、別途インストールする必要はありません。

正規の起動コマンドは次のとおりです。

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

> [!NOTE]
> `-y` フラグは、`npx` にパッケージ ダウンロード プロンプトを自動確認するように指示するため、サーバーは手動介入なしで起動できます。

### バージョン解決の仕組み

`igniteui-theming` は `igniteui-angular` の依存関係であるため、`npm install` 後には既に `node_modules` に存在します。上記の起動コマンドを実行すると、`npx` はローカルにインストールされたコピーを検出し、直接実行します。ネットワーク リクエストは行われません。つまり、MCP サーバーのバージョンは、常に他の Ignite UI パッケージと同期した状態を保ちます。

プロジェクトの外部 (または `npm install` を実行する前) でコマンドを実行すると、`npx -y` は代わりに npm から**最新**バージョンを一時キャッシュにダウンロードします。サーバーは引き続き起動しますが、検査する `package.json` がないため、`detect_platform` は `generic` を返します。

以下から AI クライアントを選択して、特定の構成手順を確認してください。

### VS Code

VS Code の GitHub Copilot は、ワークスペース レベルの構成ファイルを介して MCP サーバーをサポートします。プロジェクト ルートに `.vscode/mcp.json` を作成または編集します。

```json
{
  "servers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

保存したら、GitHub Copilot チャット パネルを開き、**Agent** モードに切り替えると、Ignite UI Theming ツールが利用できるようになります。

> [!NOTE]
> VS Code での MCP サポートには、GitHub Copilot と VS Code 1.99 以降が必要です。

### Cursor

Cursor は、プロジェクト スコープの MCP 構成をサポートします。プロジェクト ルートに `.cursor/mcp.json` を作成または編集します。

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

新しい Cursor チャット セッションを開くと、サーバーが自動的に検出されます。

> [!NOTE]
> Cursor の **Settings → MCP** を介して、MCP サーバーをグローバルに構成することもできます。

### Claude Desktop

Claude Desktop 構成ファイルにサーバーを追加します。

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

保存後、Claude Desktop を再起動します。チャット入力エリアに MCP サーバー インジケーター (スライダー アイコン) が表示され、MCP ツールがアクティブであることが確認できます。

### Claude Code

Claude Code は、CLI とプロジェクト スコープの `.mcp.json` ファイルを介して MCP サーバーをサポートします。構成をチームと共有するには、プロジェクト ルートに `.mcp.json` を作成または編集します。

```json
{
  "mcpServers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

あるいは、ローカル環境のみにコマンド ラインを介してサーバーを追加できます。

```bash
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Claude Code 内で `/mcp` コマンドを使用して、サーバーが接続されていることを確認します。

### JetBrains IDE

JetBrains AI Assistant は、IDE 設定を介して MCP サーバーをサポートします。

1. **\[Settings]** (macOS では **\[Preferences]**) を開きます。

2. **\[Tools] → \[AI Assistant] → \[Model Context Protocol (MCP)]** に移動します。

3. **\[+ Add]** をクリックし、**\[As JSON]** を選択するか、フォーム フィールドを使用します。

4. 以下の構成を入力します。

    ```json
    {
      "mcpServers": {
        "igniteui-theming": {
          "command": "npx",
          "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
        }
      }
    }
    ```

5. **\[OK]** をクリックし、AI Assistant を再起動します。

> [!NOTE]
> MCP サポートには、JetBrains IDE に AI Assistant プラグインがインストールされて有効になっている必要があります。

### その他の MCP クライアント

その他の MCP 互換クライアントの場合は、次のコマンドと引数で STDIO トランスポートを使用します。

- **コマンド**: `npx`
- **引数**: `-y`、`igniteui-theming`、`igniteui-theming-mcp`

## プロジェクト ルールでの AI 動作のカスタマイズ

このセクションはオプションです。これは、既存のコードベース規則に一致するように AI がテーマ コードを生成する方法を微調整したいチームを対象としています。

VS Code や Cursor などのエディターでは、AI の動作を形成するプロジェクト レベルの指示ファイルを提供できます。MCP サーバーは、どのツールをどの順序で呼び出すかを既に AI に教えています。それを繰り返す必要はありません。代わりに、これらの指示ファイルを使用して、**プロジェクトの設計上の決定、コード規則、ファイル構成**をエンコードして、AI が最初の試行でコードベースに適合するコードを生成するようにします。

### VS Code (`.github/copilot-instructions.md`)

```markdown
## Theming Conventions

### Sass Code Style
- Use `@use` / `@forward` — never `@import`.
- Extract repeated color values into Sass variables (e.g., `$brand-hover: #a78bfa`).
- Prefer setting primary design tokens over overriding many dependent tokens.
  For example, setting `$foreground` on a flat button automatically derives
  `$hover-background`, `$focus-background`, and `$active-background`.
- Keep component overrides scoped — use the component's default selector
  (e.g., `.igx-button--flat`) unless a narrower scope is needed.
```

### Cursor (`.cursor/rules/theming.mdc`)

```markdown
---
description: Ignite UI for Angular theming conventions
globs: ["**/*.scss", "**/styles/**"]
---

## Project Theming Rules

### Code conventions
- `@use` / `@forward` only — no `@import`.
- Extract shared colors into variables; do not repeat hex literals.
- Prefer primary tokens — let dependent tokens derive automatically.
- One component override per file. Name the file after the component.
- Comment every override with the design rationale.
- Never hard-code gray shades for text — use palette grays so dark mode works.
- For dark mode, only the palette changes. Component overrides stay the same.
```

> [!NOTE]
> 両方のファイルはソース管理にコミットされるため、すべてのチーム メンバーが手動設定なしで同じ AI 動作を得られます。プロジェクトに合わせてブランド カラー、デザイン システム、ファイル パスを調整してください。

## 利用可能なツール

MCP サーバーは、プロンプトに基づいて AI が自動的に使用するツール セットを公開します。それらを直接呼び出す必要はありません。必要なものを説明するだけです。

現在の完全なツール リストとそのパラメーターをいつでも確認するには、AI アシスタントに次のように尋ねてください。

> 「Ignite UI Theming MCP はどのようなツールを提供していますか?」

各ツールの簡単な概要を以下に示します。

| ツール | 説明 |
|------|-------------|
| `detect_platform` | `package.json` を読み取り、プロジェクトが Ignite UI for Angular、Web Components、React、Blazor のいずれを使用しているかを識別します。以降のすべてのツールに対して正しいインポート パスとコンポーネント セレクターを選択します。 |
| `create_palette` | 基本ブランド カラーから自動シェード バリアント (50–900、A100–A700) を持つカラー パレットを生成します。`output` パラメーター (`sass` または `css`) と、スキーマを選択する `designSystem` を受け入れます。 |
| `create_custom_palette` | きめ細かいパレット作成 — 自動生成が適さない場合に、すべてのシェードに対して正確な 16 進数値を指定します。 |
| `create_typography` | 指定されたデザイン システムのフォント ファミリとタイプ スケールを設定します。 |
| `create_elevations` | Material または Indigo デザイン システムのボックス シャドウ エレベーション レベル (0-24) を構成します。 |
| `create_theme` | ワンショット完全テーマ: パレット + タイポグラフィ + エレベーション、`styles.scss` に含める準備ができています。`designSystem` (`material`、`bootstrap`、`fluent`、または `indigo`) と `variant` (`light` または `dark`) を受け入れます。 |
| `set_size` | `--ig-size` をグローバルまたは特定のコンポーネントに設定します (`small`、`medium`、または `large`)。 |
| `set_spacing` | `--ig-spacing` (およびオプションでインライン/ブロック オーバーライド) をグローバルまたはコンポーネントごとに設定します。 |
| `set_roundness` | `--ig-radius-factor` (0 = 四角、1 = 完全な丸) をグローバルまたはコンポーネントごとに設定します。 |
| `get_component_design_tokens` | コンポーネントで利用可能なすべてのデザイン トークンを返します — `create_component_theme` の前に常にこれを呼び出します。 |
| `create_component_theme` | コンポーネントのトークン (色、境界線など) をカスタマイズするための Sass または CSS を生成します。正しいスキーマを選択するために `variant` (`light` または `dark`) を受け入れます。 |
| `get_color` | パレット カラーの CSS 変数参照 (例: `var(--ig-primary-500)`) を返します。オプションのコントラストと不透明度パラメーターをサポートします。 |
| `read_resource` | 4 つのカテゴリに編成された組み込み参照リソースを読み取ります: プラットフォーム構成 (6)、パレット/タイポグラフィ/エレベーション プリセット (5)、カラー ガイダンス (7)、レイアウト/間隔ドキュメント (8)。 |

> [!NOTE]
> 複合コンポーネント (例: `combo`、`select`、`grid`) の場合、`get_component_design_tokens` はフラットなトークン リストではなく、関連する子テーマのリストを返します。たとえば、`grid` をクエリすると、`grid`、`grid-toolbar`、`grid-filtering`、`paginator` などの子テーマが返される場合があります。AI は、適切なスコープされたセレクターを使用して、各子テーマに対して個別の `create_component_theme` 呼び出しを生成します。

> [!NOTE]
> プロジェクトでライセンス版の `@infragistics/igniteui-angular` パッケージを使用している場合は、AI にそのことを伝えてください。そうすることで、パレット、テーマ、コンポーネント ツールで `licensed` パラメーターを設定できます。これにより、生成されるインポート パスがそれに応じて調整されます。

## シナリオ例

次のシナリオは、MCP サーバーが接続された後に AI に何を依頼できるかを示します。

### 新しいプロジェクト テーマ

> 「Ignite UI を使用して新しい Angular プロジェクトを開始しています。プライマリ #2563eb、セカンダリ #f97316、Roboto フォントで完全な Material Design ライト テーマを作成して。」

AI は `create_theme` を呼び出し、すぐに使用できる `styles.scss` ファイルを返します。生成される出力は次のようになります。

```scss
/* styles.scss */
@use 'igniteui-angular/theming' as *;

$my-palette: palette(
  $primary: #2563eb,
  $secondary: #f97316,
  $surface: #fff,
  $gray: #9e9e9e,
);

$my-typography: typography(
  $font-family: 'Roboto, sans-serif',
);

@include core();
@include typography($my-typography);
@include theme($my-palette, $schema: $light-material-schema);
```

### ダーク モード バリアント

> 「既存のテーマのダーク モード バージョンが必要です。同じプライマリ ブルーを維持しますが、ダーク サーフェス #121212 を使用して。」

### ブランド固有のカラー シェード

> 「デザイン システムでは、プライマリ グリーンの 14 個すべてのシェードに正確な 16 進数値が指定されています。値を貼り付けます — カスタム パレットを作成して。」

AI は、プライマリ カラーに `mode: "explicit"` を使用して `create_custom_palette` を呼び出し、残りは自動生成します。 シェード生成の詳細については、[パレット](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/sass/palettes)を参照してください。

### コンポーネント レベルのカスタマイズ

> 「フラット ボタンを紫の背景 #8b5cf6 と白いテキストでスタイル設定し、ホバー時にはより明るい紫 #a78bfa にして。」

AI は最初に `get_component_design_tokens` を呼び出して有効なトークン名を検出し、次に正しい値で `create_component_theme` を呼び出します。

### レイアウト調整

> 「カレンダーが場所を取りすぎている感じがします — 間隔を減らして、すべてのコンポーネントを少し小さくして。」

AI は、カレンダー コンポーネントにスコープされた `set_spacing` と `:root` レベルで `set_size` を呼び出します。

## トラブルシューティング

**プラットフォームが検出されない**

`detect_platform` が `null` または `generic` を返す場合は、`package.json` に Ignite UI パッケージ (例: `igniteui-angular`) が依存関係としてリストされていることを確認してください。AI に明示的に伝えることもできます: 「Angular プラットフォームを使用して。」

**カラーの輝度警告**

AI がカラーの輝度について警告した場合、選択したカラーが自動シェード生成がうまく機能するには明るすぎるか暗すぎることを意味します。中間範囲のカラーを選択するか、代わりに明示的なシェード値で `create_custom_palette` を使用するように AI に依頼してください。

**サーフェス カラーの不一致**

ライト テーマには明るいサーフェス (例: `#fafafa`) を使用してください。ダーク テーマには暗いサーフェス (例: `#121212`) を使用してください。不一致のサーフェス カラーは、AI に警告を発生させます。

**生成された Sass がコンパイルされない**

`igniteui-angular` と `igniteui-theming` がインストールされていることを確認してください。

```bash
ng add igniteui-angular
```

また、`styles.scss` で他のテーマ mixin の前に `core()` が呼び出されていることを確認してください。正しいファイルのセットアップについては、「[Sass を使用したテーマ設定](<a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/sass/index">)」を参照してください。

## その他のリソース

- [Ignite UI for Angular スキル](./skills.md)

<!-- Ideally these should be included once documentation is combined
- [Theming Overview](../themes/index.md)
- [Palettes](../themes/palettes.md)
- [Typography](../themes/typography.md)
- [Elevations](../themes/elevations.md)
- [Spacing](../themes/spacing.md)
- [Roundness](../themes/roundness.md)
- [Theming with Sass](../themes/sass/index.md)
-->

<div class="divider--half"></div>

コミュニティは常に活気があり、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
