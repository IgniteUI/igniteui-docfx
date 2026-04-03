---
title: Ignite UI CLI MCP Overview | Ignite UI for Angular | Infragistics
_description: Ignite UI CLI MCP and Ignite UI Theming MCP expose Ignite UI for Angular tools to AI-assisted editors. Choose the right Angular setup path and get started.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, AI
last_updated: "2025-04-03"
---

<!-- schema: Article -->
<!-- cspell:words igniteui mcpservers npx -->

# Angular Ignite UI CLI MCP Overview

Ignite UI CLI MCP and Ignite UI Theming MCP are two standalone Model Context Protocol servers that expose Ignite UI for Angular CLI and theming tools to AI-assisted editors and chat clients — including VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains IDEs with AI Assistant. The `igniteui-cli` server handles project creation, component management, and documentation questions. The `igniteui-theming` server handles theme and styling work. Both servers run via `npx` and connect to any supported client through STDIO transport.

Ignite UI CLI MCP and Ignite UI Theming MCP do not currently support Blazor — they cover Angular, React, and Web Components only. Neither server modifies project files autonomously; each server exposes tools to the active AI agent session in a supported client. MCP clients that use HTTP-based transport instead of STDIO are not supported by the current server configuration.

## Prerequisites

Before configuring Ignite UI CLI MCP and Ignite UI Theming MCP, make sure the following are in place:

- Node.js installed so `npx` is available in the terminal
- A supported editor or AI client: VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, or another MCP-compatible client with STDIO support
- Internet access for `npx` to download the MCP server packages on first run

## What Ignite UI CLI MCP and Ignite UI Theming MCP Provide

Ignite UI CLI MCP and Ignite UI Theming MCP each expose a distinct set of tools to the AI client.

**Ignite UI CLI MCP** (`igniteui-cli`) handles project and component work: creating new Angular projects, adding and modifying Ignite UI for Angular components, updating existing project structure, and answering documentation and API questions about Angular components, properties, events, and methods.

**Ignite UI Theming MCP** (`igniteui-theming`) handles theme and styling work: applying and modifying Ignite UI themes, generating CSS custom property overrides, and answering theming-related questions.

## How the MCP Setup Works

The setup process is consistent across all supported clients and all three setup paths.

Add the Ignite UI CLI MCP and Ignite UI Theming MCP server entries to the MCP configuration file for your AI client. The client reads that configuration, starts the servers through `npx`, and exposes their tools in chat or agent mode. From that point, prompts in the chat session can invoke the tools from either server directly.

The server entries use these commands:

- `igniteui-cli`: `npx -y igniteui-cli@next mcp`
- `igniteui-theming`: `npx -y igniteui-theming igniteui-theming-mcp`

The `-y` flag tells `npx` to confirm the package download automatically so the servers start without manual intervention. The step-by-step topics below show the exact configuration file locations and JSON structure for each supported client.

## Supported Editors and AI Clients

Ignite UI CLI MCP and Ignite UI Theming MCP work with any editor or AI client that supports MCP with STDIO transport. Supported clients include:

- **VS Code with GitHub Copilot** — workspace-level `.vscode/mcp.json`
- **Cursor** — `.cursor/mcp.json`
- **Claude Desktop** — macOS: `~/Library/Application Support/Claude/claude_desktop_config.json` / Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- **Claude Code** — `.mcp.json` or the `claude mcp` command
- **JetBrains IDEs with AI Assistant** — configured in **Tools → AI Assistant → Model Context Protocol (MCP)**
- **Other MCP clients** — use the same command and arguments through STDIO configuration

The main differences between clients are where the MCP configuration file is stored, how the client surfaces the available tools, and whether you continue in chat, agent mode, or another AI panel. The server commands and arguments are the same across all clients.

Editor-based clients open the Angular project folder directly and detect the MCP configuration from the workspace. Desktop and chat-first clients use an external configuration file and work with the project context provided in the session.

## Available Setup Paths

Three setup paths are available for Ignite UI CLI MCP with Angular:

- **Start from an empty folder** — begin with an empty workspace, add the MCP configuration, and let the AI assistant create the Angular project from the beginning. Use this when there is no existing project.
- **Create the project with Ignite UI CLI, then continue with MCP** — create the Angular project using Ignite UI CLI first, then connect MCP to the generated project. Use this when you prefer CLI scaffolding before bringing in the AI client.
- **Connect MCP to an existing project** — add the MCP configuration to an Angular project that already exists and continue working in the current codebase. Use this when you have an existing Angular app and want to add Ignite UI CLI MCP and Ignite UI Theming MCP. This path also covers asking documentation and API questions from chat without making project changes.

## Choose the Right Setup Path

**[Start from an Empty Folder with Ignite UI CLI MCP for Angular](general-how-to-start-mcp.md)**
Use this when you want to begin with an empty workspace, add the MCP configuration for your AI client, and let the assistant create the Angular project through prompts.

**[Create an Angular Project with Ignite UI CLI, then Continue with MCP](general-how-to-start-mcp-cli-project.md)**
Use this when you want to scaffold the Angular project with Ignite UI CLI first and connect MCP after that.

**[Use Ignite UI CLI MCP in an Existing Angular Project](general-how-to-use-mcp-existing-project.md)**
Use this when you have an existing Angular project and want to connect Ignite UI CLI MCP and Ignite UI Theming MCP, continue working in the current codebase, and ask documentation or API questions in chat.

## Related Topics

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
