---
title: MAKER Framework | Ignite UI AI オーケストレーション
_description: MAKER Framework は、Infragistics が提供するマルチエージェント AI オーケストレーション MCP サーバーです。OpenAI、Anthropic、Google AI プロバイダー間のコンセンサス ベースの投票を使用して、複雑なタスクを検証済みのステップ プランに分解します。
_keywords: Angular, Ignite UI for Angular, Infragistics, MAKER, マルチエージェント, AI オーケストレーション, MCP, Model Context Protocol, コンセンサス投票, プラン アンド エグゼキュート, タスク分解
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/maker-framework"
namespace: Infragistics.Controls
mentionedTypes: []
---

<!-- cspell:words MAKER batchSize -->

<!-- schema: Article, HowTo -->

# MAKER Framework

MAKER Framework (`@igniteui/maker-mcp`) は、Infragistics が提供するマルチエージェント AI オーケストレーション MCP サーバーです。複数の AI エージェントにわたるコンセンサス ベースの投票アルゴリズムを使用して、複雑なタスクを検証済みで実行可能なステップ プランに分解します。MAKER は、Maximal Agentic decomposition (最大エージェント分解)、first-to-ahead-by-K Error correction (K 先行エラー修正)、Red-flagging (レッド フラグ) の頭文字を取ったものです。このフレームワークは、Cognizant AI Lab による研究論文 _Solving a million-step LLM task with zero errors_ に基づいています。`@igniteui` GitHub Packages レジストリから `npx` 経由で MCP サーバーとして実行され、STDIO トランスポートを通じて任意の MCP 互換 AI クライアントに接続します。接続すると、AI アシスタントは 3 つのツール (`plan`、`execute`、`plan_and_execute`) を呼び出して、自動エラー検出と修正を伴う長期タスクを実行できます。

MAKER Framework は Ignite UI コンポーネントのスキャフォールディング ツールではありません。Ignite UI プロジェクトの作成、コンポーネント生成、ドキュメント クエリには [CLI MCP サーバー](cli-mcp.md) を使用してください。MAKER はフレームワーク非依存であり、Angular、React、Web Components を特定のターゲットとせず、プロジェクトのソース ファイルを自律的に読み取ったり変更したりしません。少なくとも 1 つの AI プロバイダー API キー (OpenAI、Anthropic、または Google AI) と、`@igniteui` レジストリ用の `read:packages` スコープを持つ GitHub Personal Access Token が必要です。

## MAKER の仕組み

MAKER Framework は、計画と実行という 2 つの順次フェーズで動作します。各フェーズは専用の内部 AI クライアント セットを使用し、同じコンセンサス ベースの投票メカニズムを適用して、次のフェーズに進む前に出力を検証します。

**計画フェーズ**では、計画クライアントがバッチ単位でステップを提案します (設定可能なバッチ サイズ、デフォルトは 3)。別の計画投票クライアントが「first-to-ahead-by-K」投票を実行します。複数の AI エージェントが提案されたステップに対して「Yes」、「No」、または「End」に投票します。1 つの結果が他の結果より K 票リードした場合に提案が承認されます。拒否された提案には、次の再試行で拒否理由が含まれ、計画が完了するかリトライ制限に達するまで継続的に改善されます。

**実行フェーズ**では、フレームワークが検証済みのステップ プランを設定可能なバッチで処理します。実行クライアントが各バッチを実行し、更新された状態を生成します。実行投票クライアントが、同じ K マージン投票アルゴリズムを使用して、新しい状態を前の状態と元のタスクに対して検証します。拒否された実行はフィードバックと共に再試行されます。最終的な累積状態がタスク結果となります。

レッド フラグ検証レイヤーは両フェーズを通じて動作します。すべての AI クライアント リクエストは、投票システムに入る前に応答に対して設定可能なバリデーターを実行するガード コールでラップされます。不正な形式または短すぎる応答は、失敗メッセージをプロンプトに追加して再試行されます。カスタム バリデーターは `IAIRedFlagValidator` を実装することで追加できます。

## MAKER MCP サーバーのインストール

MAKER は `@igniteui` スコープ配下の GitHub Packages に公開されており、一度限りのレジストリ セットアップが必要です。マシンで次のコマンドを一度実行します:

```bash
npm config set @igniteui:registry https://npm.pkg.github.com
```

次に `~/.npmrc` (Windows: `%USERPROFILE%\.npmrc`) を開き、`read:packages` スコープを持つ GitHub Personal Access Token を追加します:

レジストリの設定が完了すると、MCP サーバーはグローバル インストールなしに `npx` 経由で実行されます。ネイティブ バイナリ (~50 MB) は初回実行時にダウンロードされてキャッシュされます。以降の起動は瞬時です。

## AI クライアントへの接続

AI クライアントの MCP 設定ファイルに `maker` サーバー エントリを追加します。`env` ブロックで AI プロバイダー キーを渡します。使用するプロバイダーのキーのみ設定してください。

### VS Code (GitHub Copilot)

ワークスペースの `.vscode/mcp.json` に追加します:

```json
{
  "servers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```

Copilot Chat をエージェント モードに切り替え、ツール リストに `plan`、`execute`、`plan_and_execute` が表示されることを確認します。

### Claude Desktop

1. Claude Desktop の設定ファイルを開きます:
    - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
    - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. `mcpServers` ブロックに `maker` エントリを追加します:

    ```json
    {
      "mcpServers": {
        "maker": {
          "command": "npx",
          "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
          "env": {
            "Executor__AIProviderKeys__Anthropic": "<your-anthropic-key>"
          }
        }
      }
    }
    ```

3. Claude Desktop を再起動します。初回起動時にネイティブ バイナリがダウンロードされます (通常の接続で約 30 秒)。

### Cursor、Claude Code、JetBrains、その他の MCP クライアント

STDIO トランスポートをサポートする任意のクライアントは同じ `mcpServers` ブロックを使用します:

```json
{
  "mcpServers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```

## MAKER MCP サーバーの設定

すべての MAKER 設定は環境変数を通じて提供されます。命名規則ではセクション区切りとして二重アンダースコア (`__`) を使用します。MCP クライアント設定の `env` ブロックで変数を渡します。

### AI プロバイダー キー

少なくとも 1 つのプロバイダー キーを設定します。複数のプロバイダーのキーを同時に設定し、異なる内部クライアントに異なるプロバイダーを割り当てることができます。

| 環境変数                                | 説明               |
| ------------------------------------- | ----------------- |
| `Executor__AIProviderKeys__OpenAI`    | OpenAI API キー   |
| `Executor__AIProviderKeys__Anthropic` | Anthropic API キー |
| `Executor__AIProviderKeys__Google`    | Google AI API キー |

### 内部クライアントごとのモデル選択

MAKER は 4 つの内部 AI クライアントを使用します: `Planning`、`PlanVoting`、`Execution`、`ExecutionVoting`。各クライアントは異なるプロバイダーとモデルを対象にできます。デフォルトでは 4 つのクライアントすべてに OpenAI の `gpt-5.1` が使用されます。

コストと品質のバランスのためにプロバイダーを混在させるには、クライアントごとに `Provider` と `Model` 変数を設定します:

```json
"env": {
  "Executor__AIProviderKeys__OpenAI":             "<openai-key>",
  "Executor__AIProviderKeys__Anthropic":          "<anthropic-key>",
  "Executor__Clients__Planning__Provider":        "Anthropic",
  "Executor__Clients__Planning__Model":           "claude-opus-4-5",
  "Executor__Clients__PlanVoting__Provider":      "OpenAI",
  "Executor__Clients__PlanVoting__Model":         "gpt-4.1-mini",
  "Executor__Clients__Execution__Provider":       "Anthropic",
  "Executor__Clients__Execution__Model":          "claude-opus-4-5",
  "Executor__Clients__ExecutionVoting__Provider": "OpenAI",
  "Executor__Clients__ExecutionVoting__Model":    "gpt-4.1-mini"
}
```

有効な `Provider` 値: `OpenAI`、`Anthropic`、`Google`。

### 外部 MCP サーバーへの接続

MAKER は外部 MCP サーバーをツール プロバイダーとして接続でき、それらのツールを実行クライアントで利用可能にします。インデックス付きの環境変数を使用して、名前、説明、URL、オプションの API キーで各サーバーを設定します:

```json
"env": {
  "Executor__McpServers__0__Name":        "igniteui-cli",
  "Executor__McpServers__0__Description": "Ignite UI CLI scaffolding and documentation tools",
  "Executor__McpServers__0__Url":         "https://mcp.example.com/igniteui-cli"
}
```

追加のサーバーを登録するには、インデックス (`0`、`1`、`2`、...) をインクリメントします。

### バッチ サイズと投票しきい値の調整

各 MCP ツール呼び出しは自然言語で `batchSize` と `k` パラメーターを受け入れます。ツールを呼び出す際にプロンプトで設定します。

| パラメーター | デフォルト | 説明                                                                                                                     |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `batchSize` | `3`     | 投票ラウンドごとに提案または実行されるステップ数。低い値ほど制御しやすく、高い値ほどスループットが向上します。              |
| `k`         | `10`    | コンセンサス マージン しきい値。高い値ほど結果が承認される前に投票エージェント間で強い合意が必要になります。              |

高速な探索的タスクには `k` を下げます (3-5)。正確性がトークン コストより重要な重要タスクには `k` を上げます (15-20)。

## 利用可能なツール

MAKER MCP サーバーは接続された AI エージェントに 3 つのツールを公開します。

| ツール              | 説明                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| `plan`             | タスクを実行せずに検証済みの順序付きステップ リストに分解します              |
| `execute`          | `plan` が生成したステップ リストをバッチごとのコンセンサス投票で実行します   |
| `plan_and_execute` | フェーズ間のライブ進行状況イベントを伴い、1 回の呼び出しで計画と実行を行います |

実行前にステップ プランを確認して検証する場合は、`plan` に続いて `execute` を使用します。確認が不要な無人実行には `plan_and_execute` を使用します。

## 一般的なワークフロー

### ワンショット タスク

デフォルト設定で `plan_and_execute` を直接呼び出します:

> plan_and_execute を使用して、技術ブログ投稿用の REST と GraphQL の詳細な比較を書いてください。

### 実行前にプランを確認する

`plan` を使用してステップを確認し、`execute` に渡します:

> 1. plan を使用して、PostgreSQL スキーマをマルチテナント設計に移行するプランを作成してください。
> 2. ステップを表示してください。
> 3. それらのステップで execute を使用して移行スクリプトを実行してください。

### 重要タスクの高信頼実行

`k` を上げてより強いコンセンサスを要求します:

> plan_and_execute を batchSize=3、k=15 で使用して、このスマート コントラクトのセキュリティ脆弱性をレビューしてください。

### 低コストの探索的タスク

トークン使用量を最小化するために両パラメーターを下げます:

> plan_and_execute を batchSize=3、k=3 で使用して、Node.js CLI ツールのプロジェクト README を作成してください。

## サポートされているプラットフォーム

ネイティブ バイナリは 4 つのプラットフォーム向けに配布されています。正しいバイナリは初回実行時に自動的に選択されてキャッシュされます。

| プラットフォーム | アーキテクチャ         | RID         |
| -------- | --------------------- | ----------- |
| Windows  | x64                   | `win-x64`   |
| macOS    | x64 (Intel)           | `osx-x64`   |
| macOS    | arm64 (Apple Silicon) | `osx-arm64` |
| Linux    | x64                   | `linux-x64` |

ARM Linux は現在パッケージ化されていません。追加のプラットフォーム サポートをリクエストするには、[github.com/IgniteUI/MAKER](https://github.com/IgniteUI/MAKER) でイシューを開いてください。

バイナリ キャッシュの場所は `MAKER_MCP_CACHE` 環境変数でオーバーライドできます。デフォルトのキャッシュ パスは、Windows では `%LOCALAPPDATA%\maker-mcp\{version}\{rid}\`、macOS と Linux では `~/.cache/maker-mcp/{version}/{rid}/` です。

## その他のリソース

- [AI 支援開発の概要](ai-assisted-development-overview.md)
- [エージェント スキル](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティは常に活気があり、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
