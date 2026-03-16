---
title: Agentic Workflows with Ignite UI — Agent Skills & MCP Server for Every Framework
description: Learn how to set up the Ignite UI MCP server, register agent skills for GitHub Copilot, Claude, and Cursor, and ground AI coding assistants in correct component APIs, import paths, and scaffolding workflows for Angular, React, Blazor, and Web Components.
keywords: ignite ui mcp server, ignite ui agent skills, ai-assisted ui development, copilot angular components, cursor blazor ui library, ai component library angular react blazor, mcp server ui components, ignite ui scaffolding, github copilot ignite ui, claude code ignite ui
---

# Agentic Workflows with Ignite UI — Best Practices

This guide explains how to set up the Ignite UI MCP server, register the skill for your AI agent, and get the most out of agentic workflows across GitHub Copilot, Claude, and Cursor.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Configure the MCP Server](#configure-the-mcp-server)
4. [Register the Skill](#register-the-skill)
5. [How the Agent Workflow Operates](#how-the-agent-workflow-operates)
6. [Example Prompts](#example-prompts)
7. [Tool Reference Quick Card](#tool-reference-quick-card)

---

## Overview

The Ignite UI MCP server gives AI agents direct access to accurate, up-to-date Ignite UI component documentation — preventing hallucinations on API names, inputs, outputs, and component structures that commonly occur with custom UI libraries.

| Server | Purpose |
|--------|---------|
| `igniteui-mcp-server` | Component docs: `detect_platform`, `list_components`, `search_docs`, `get_doc`, `generate_ignite_app` |

The `SKILL.md` file in this repository contains the orchestration instructions that tell the agent exactly when and how to call each tool, in what order, and how to self-configure if the server is not yet connected. Without the skill file the agent has access to the tools but will not follow the correct workflow.

---

## Prerequisites

### Node.js ≥ 18

The MCP server uses ES modules and the native `fetch` API. Verify with:

```bash
node --version
```

## Configure the MCP Server

The agent will auto-configure the MCP server if it is not detected — see [How the Agent Workflow Operates](#how-the-agent-workflow-operates). For manual setup or CI/CD environments, use the config below for your client.

> **Note:** VS Code uses `"servers"` as the top-level key. All other clients use `"mcpServers"`.

### VS Code (GitHub Copilot)

Create or edit `.vscode/mcp.json` in your project root:

```json
{
  "servers": {
    "igniteui-mcp-server": {
      "command": "npx",
      "args": ["-y", "igniteui-mcp-server"]
    }
  }
}
```

Alternatively, add to `settings.json`:

```json
"github.copilot.mcp.servers": {
  "igniteui-mcp-server": {
    "command": "npx",
    "args": ["-y", "igniteui-mcp-server"]
  }
}
```

### Cursor

Create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-mcp-server": {
      "command": "npx",
      "args": ["-y", "igniteui-mcp-server"]
    }
  }
}
```

### Claude Desktop

Edit the global config file for your OS:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-mcp-server": {
      "command": "npx",
      "args": ["-y", "igniteui-mcp-server"]
    }
  }
}
```

## Register the Skill

The `SKILL.md` file is the orchestration layer — it tells the agent when to activate, which tools to call, and in what order. Copy it into the skills directory for your client:

| Client | Skill directory |
|--------|----------------|
| GitHub Copilot | `.agents/skills/` or `.github/skills/` |
| Claude Code | `.claude/skills/` |
| Cursor | `.cursor/skills/` |

Example for GitHub Copilot:

```
your-project/
└── .agents/
    └── skills/
        └── SKILL.md   ← copy here
```

The agent automatically discovers skill files based on the `name`, `description`, and `compatibility` frontmatter declared in `SKILL.md`. No additional configuration is required after placement.

### Verify Activation

Open your agent chat and ask:

> "Which Ignite UI tools do you have available?"

The agent should list `detect_platform`, `list_components`, `search_docs`, `get_doc`, and `generate_ignite_app`.

### Client Behaviour Differences

| Feature | GitHub Copilot | Claude Code | Cursor |
|---------|---------------|-------------|--------|
| Skill folder | `.agents/skills/` or `.github/skills/` | `.claude/skills/` | `.cursor/skills/` |
| Invocation | Auto-detected or `/` command | Auto-detected or explicit | Auto-detected, `@` mention, or `/` command |
| Execution | Instruction-based | Can run code in sandboxed containers | Intelligently applied based on file context |

---

## How the Agent Workflow Operates

Understanding what the agent does automatically helps you write better prompts and debug unexpected behaviour.

### 1. MCP Server Check (automatic)

Before doing any work, the agent calls `list_components` to verify the MCP server is live. If the call fails, it **automatically writes the correct config file** for your editor — it does not ask you to do this manually. After writing the file it waits for the server to start before continuing.

### 2. Framework Detection (automatic)

The agent infers the framework from context (file extensions, component prefixes, package names). If ambiguous, it calls `detect_platform` — it does not ask you which framework you are using.


### 3. Tool Call Order

**New project:**
```
list_components          → survey available components
generate_ignite_app      → scaffold project
get_doc                  → read each component's API before writing code
[write code]
```

**Existing project:**
```
search_docs / list_components   → find the right component
get_doc                         → read full API
[write / modify code]
```

> **The agent never writes Ignite UI component code without first calling `get_doc`.** APIs change between versions — skipping this step is the most common source of incorrect output.

---

## Example Prompts

### Discovering Components

```
List all Ignite UI chart components available for React.
```

```
What Ignite UI components are available for building a dashboard in Angular?
```

```
Is there an Ignite UI component for inline cell editing in a data grid?
```

### Reading Component Documentation

```
Show me the full documentation for the IgxGrid row pinning feature.
```

```
How do I configure virtual scrolling in the Ignite UI React grid?
```

```
What inputs and outputs does the IgbCombo component accept in Blazor?
```

### Building a New Project

```
Create a new Angular Ignite UI app called "sales-dashboard" with a side navigation layout.
Use grid, charts, and card components. Output it to C:/Projects.
```

```
Scaffold a new React Ignite UI project called "inventory-app" with a base template in my current directory.
```

```
Set up a new Web Components Ignite UI project named "wc-demo" using the empty template.
```

### Adding Components to an Existing Project

```
I have an Angular Ignite UI project. Add a filterable, sortable IgxGrid with row selection
to my dashboard page, using my existing Employee data model.
```

```
Add an IgrCategoryChart to my React app that visualizes monthly revenue data.
Show me how to bind it to a TypeScript array.
```

```
Add an IgbDialog confirmation modal to my Blazor app that triggers when a user clicks Delete.
```

### Search and Exploration

```
Search the Angular docs for "remote data" to find all components that support server-side loading.
```

```
Find all Ignite UI WebComponents related to forms and input validation.
```

### Migration and Cross-Framework

```
I have an Angular IgxGrid with row editing, filtering, and sorting.
Show me the equivalent React IgrGrid implementation.
```

```
My Blazor app uses an old IgbGrid API. What are the breaking changes in the latest version
and how should I update my code?
```

---

## Tool Reference Quick Card

| Tool | When to use | Key parameters |
|------|------------|----------------|
| `detect_platform` | Identify the framework when it cannot be inferred from context | — |
| `list_components` | Browse what's available; verify the MCP server is live | `framework`, `filter` |
| `search_docs` | Full-text search when you know what you want but not the doc name | `query`, `framework` |
| `get_doc` | Read the full API doc — always call before writing any component code | `framework`, `name` (kebab-case, no `.md`) |
| `generate_ignite_app` | Scaffold a new project from scratch | `name`, `framework`, `template`, `outputPath` |