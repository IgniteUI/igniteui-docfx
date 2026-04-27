---
title: Ignite UI を使用した AI 支援開発 - Ignite UI for Angular
_description: Ignite UI は、エージェント スキル、Ignite UI CLI MCP サーバー、Theming MCP サーバーを提供し、Angular、React、Web Components 向けに AI コーディング アシスタントを正確なコンポーネント API、インポート パス、デザイン トークンで補完します。
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, エージェント スキル, AI, エージェント, Copilot, Cursor
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
last_updated: "2026-04-21"
namespace: Infragistics.Controls
mentionedTypes: []
---

<!-- schema: Article, HowTo -->

# Ignite UI を使用した AI 支援開発

Ignite UI for Angular、React、Web Components は、エージェント スキル、Ignite UI CLI MCP サーバー、Ignite UI Theming MCP サーバーの 3 部構成の AI ツールチェーンを提供します。これにより、AI コーディング アシスタントが正確なコンポーネント API、インポート パス、デザイン トークンを使用できます。エージェント スキルは、開発者が所有するインストラクション パッケージで、特定のプロジェクトで AI エージェントが Ignite UI を使用する方法を定義します。CLI MCP サーバーは、Model Context Protocol を通じてアクティブな AI エージェント セッションに Ignite UI CLI スキャフォールディング、コンポーネント管理、ドキュメント ツールを公開します。Theming MCP サーバーは、Ignite UI Theming Engine をクエリ可能なエージェント コンテキストとして公開します。3 つのコンポーネントはすべて、GitHub Copilot、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant と連携します。

AI ツールチェーンは、現在、CLI MCP とエージェント スキル レイヤーでの Blazor をサポートしていません。Blazor のカバレッジは Theming MCP のみで提供されます。CLI MCP サーバーは STDIO トランスポートを必要とします。HTTP ベースの MCP クライアントはサポートされていません。エージェント スキルと CLI MCP サーバーは、プロジェクト ファイルを自律的に変更しません。開発者のプロンプトに応じてアクティブな AI エージェントにツールとインストラクションを公開します。

## AI ツールチェーンの概要

Ignite UI の AI ツールチェーンは、独立して使用可能な 3 つのレイヤーで構成されています。各レイヤーは単独で有効化でき、連携して動作するように設計されています。

| レイヤー                                    | 提供内容                                                                                                      | オーナー        | フレームワーク                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| エージェント スキル                            | 開発者所有のインストラクション パッケージ: インポート パス、コンポーネント パターン、デシジョン フロー、プロジェクト規約 | 開発者    | Angular、React、Web Components、Blazor |
| CLI MCP サーバー (`igniteui-cli`)         | MCP 経由のプロジェクト スキャフォールディング、コンポーネント管理、ドキュメントと API クエリ                     | Infragistics | Angular、React、Web Components         |
| Theming MCP サーバー (`igniteui-theming`) | デザイン トークン、パレット定義、CSS カスタム プロパティ生成、WCAG AA コントラスト検証                          | Infragistics | Angular、React、Web Components、Blazor |

CLI MCP サーバーと Theming MCP サーバーはいずれも `npx` 経由で起動し、STDIO トランスポートを通じて任意の MCP 互換クライアントに接続します。エージェント スキルは、AI クライアントがディスクから読み取るプロジェクトに配置されたローカル ファイルです。

## エージェント スキル

エージェント スキルは、特定のフレームワークで Ignite UI を使用する方法を AI コーディング アシスタントに正確に伝える、構造化された開発者所有のパッケージです。スキル パッケージには、コンポーネント パターン、インポート パス、デシジョン フローを含む `SKILL.md` インストラクション ファイル、公式の Ignite UI ドキュメントへの参照、スキーマ ファイルやダイアグラムなどのアセットを含めることができます。スキルが AI クライアントでアクティブな場合、エージェントは一般的なトレーニング データではなくスキルに従います。一般的なトレーニング データは古い API シグネチャやインポート パスを参照している可能性があります。

Ignite UI は Angular、React、Web Components、Blazor 向けの専用スキル パッケージを同梱しています。スキル パッケージは開発者が所有します: `SKILL.md` を編集してチームの規約に合わせ、プロジェクト固有のパターンを追加し、内部デザイン システムを参照し、コードベースと共にパッケージをバージョン管理してください。

完全なセットアップ手順と IDE の設定については、[エージェント スキル](skills.md)を参照してください。

## CLI MCP サーバー

Ignite UI CLI MCP サーバー (`igniteui-cli`) は、Infragistics が管理する MCP サーバーで、アクティブな AI エージェント セッションに Ignite UI CLI スキャフォールディングとドキュメント ツールを公開します。接続すると、AI アシスタントはチャット セッション内の自然言語プロンプトを通じて、Angular、React、Web Components プロジェクトの作成、Ignite UI コンポーネントの追加と変更、ドキュメントと API の質問に回答できます。

CLI MCP サーバーはグローバル インストールなしに `npx` 経由で起動します:

```bash
npx -y igniteui-cli mcp
```

このサーバーは、VS Code with GitHub Copilot、GitHub Copilot クラウド エージェント、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant、および STDIO トランスポートをサポートする他の MCP 互換クライアントに接続します。設定形式はクライアントによって異なります。以下の CLI MCP セットアップ ガイドを参照してください。

CLI MCP サーバーは Blazor をサポートしていません。コードを自律的に生成しません。開発者のプロンプトに応じて AI エージェントにツールを公開します。

## Theming MCP サーバー

Ignite UI Theming MCP サーバー (`igniteui-theming`) は、Ignite UI Theming Engine をクエリ可能なエージェント コンテキストとして公開する別の MCP サーバーです。デザイン トークン アクセス、パレット定義、CSS カスタム プロパティ生成、WCAG AA コントラスト検証をカバーします。CLI MCP サーバーとはアーキテクチャ的に分離されており、プロジェクト スキャフォールディング ツールを公開せずに AI エージェントにテーマ ツールへのアクセスを提供するために独立して接続できます。

Theming MCP サーバーは `npx` 経由で起動します:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

Theming MCP サーバーは Angular、React、Web Components、Blazor をサポートしています。Ignite UI のリリースごとに更新されるため、エージェントは常に現在のトークン サーフェスに対して動作します。

設定の詳細については、[Theming MCP](theming-mcp.md) を参照してください。

## サポートされている AI クライアント

CLI MCP サーバーと Theming MCP サーバーは、STDIO トランスポートで MCP をサポートする任意のエディターまたは AI クライアントで動作します。

| クライアント                      | 設定方法                                                              |
| --------------------------- | ----------------------------------------------------------------- |
| VS Code with GitHub Copilot | `.vscode/mcp.json`                                                |
| Cursor                      | `.cursor/mcp.json`                                                |
| Claude Desktop (macOS)      | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows)    | `%APPDATA%\Claude\claude_desktop_config.json`                     |
| Claude Code                 | `.mcp.json` または Claude Code MCP CLI コマンド                    |
| JetBrains AI Assistant      | **ツール → AI Assistant → Model Context Protocol (MCP)**          |

エージェント スキルは、GitHub Copilot では `.github/copilot-instructions.md`、Cursor では `.cursorrules` または `.cursor/rules/`、Windsurf では `.windsurfrules`、JetBrains AI Assistant ではプロジェクト レベルのプロンプト設定と互換性があります。

## AI ツールチェーンのセットアップ

`ig ai-config` を使用して、1 つのコマンドでエージェント スキルと両方の MCP サーバーを設定します。各レイヤーを個別に制御する場合、または既存のプロジェクトでツールチェーンの一部のみを設定する場合は、以下の手順に従ってください。`ig ai-config` を実行すると、1 回の操作でステップ 1、2、3 が完了します。

### クイック セットアップ

`ai-config` コマンドは、Ignite UI エージェント スキルを `.claude/skills/` にコピーし、Ignite UI MCP サーバー設定を `.vscode/mcp.json` に書き込みます。ファイルが既に存在し、最新の状態であれば、このコマンドは何もしません。

**Angular Schematics を使用する場合:**

```bash
ng generate @igniteui/angular-schematics:ai-config
```

これにより、Ignite UI サーバーと共に `@angular/cli` MCP サーバーも `.vscode/mcp.json` に登録されます。

**Ignite UI CLI を使用する場合:**

```bash
npx igniteui-cli ai-config
```

Ignite UI CLI がグローバルにインストールされている場合は、短縮形を使用します:

```bash
ig ai-config
```

> [!NOTE]
> `npx igniteui-cli` と `ig` 形式は `@angular/cli` MCP サーバーを登録しません。1 回の操作で 3 つのサーバーをすべて設定する場合は、上記の Angular Schematics コマンドを使用してください。

> [!NOTE]
> このコマンドには、プロジェクトに Ignite UI パッケージがインストールされている必要があります (`npm install`)。スキル ファイルが見つからない場合は、パッケージが最新の状態であることを確認してください。

### ステップ 1 — エージェント スキルのロード

フレームワーク用の Ignite UI スキル パッケージをプロジェクトのエージェント検出パスにコピーします。スキル パッケージは `node_modules/igniteui-{framework}/skills/` のライブラリと共に同梱されています。使用しているクライアントの永続的なセットアップを使用して IDE に接続します。

完全なセットアップについては、[エージェント スキル](skills.md) を参照してください。

### ステップ 2 — CLI MCP サーバーへの接続

AI クライアントの設定ファイルに `igniteui-cli` MCP サーバー エントリを追加します。クライアントに合った JSON 構造を使用します:

**VS Code (`.vscode/mcp.json`):**

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

**Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアント:**

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP 互換クライアントを含む完全なセットアップ ガイドについては、[CLI MCP](cli-mcp.md) を参照してください。

### ステップ 3 — Theming MCP サーバーへの接続 (オプション)

`igniteui-cli` と並べて同じ MCP 設定ファイルに `igniteui-theming` エントリを追加します:

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

設定の詳細とテーマ ワークフローについては、[Theming MCP](theming-mcp.md) を参照してください。

## その他のリソース

- [エージェント スキル](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティは常に活気があり、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
