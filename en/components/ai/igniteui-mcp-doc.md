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
4. [How the Agent Workflow Operates](#how-the-agent-workflow-operates)
5. [Example Prompts](#example-prompts)
6. [Tool Reference Quick Card](#tool-reference-quick-card)

---

## Overview

The Ignite UI MCP server gives AI agents direct access to accurate, up-to-date Ignite UI component documentation — preventing hallucinations on API names, inputs, outputs, and component structures that commonly occur with custom UI libraries.

| Server | Purpose |
|--------|---------|
| `igniteui-cli` MCP | Component docs: `list_components`, `search_docs`, `get_doc`, `generate_ignite_app`, `search_api`, `get_api_reference` |

---

## Prerequisites

### Node.js ≥ 18

The MCP server uses ES modules and the native `fetch` API. Verify with:

```bash
node --version
```

## Configure the MCP Server

Use the config below to set up the MCP server for your client. The server must be configured before the agent can use any Ignite UI tools.

> **Note:** VS Code uses `"servers"` as the top-level key. All other clients use `"mcpServers"`.

### VS Code (GitHub Copilot)

Create or edit `.vscode/mcp.json` in your project root:

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
  }
}
```

Alternatively, add to `settings.json`:

```json
"github.copilot.mcp.servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
}
```

### Cursor

Create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
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
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli-mcp"]
    }
  }
}
```

### Verify Activation

Open your agent chat and ask:

> "Which Ignite UI tools do you have available?"

The agent should list `list_components`, `search_docs`, `get_doc`, `generate_ignite_app`, `search_api`, and `get_api_reference`.

---

## How the Agent Workflow Operates

Understanding what the agent does automatically helps you write better prompts and debug unexpected behaviour.

### 1. MCP Server Check

Before doing any work, the agent calls `list_components` to verify the MCP server is live. If the call fails, the MCP server is not configured — follow the steps in [Configure the MCP Server](#configure-the-mcp-server) to set it up for your editor, then restart the agent session.

### 2. Framework Detection

The agent infers the framework from context (file extensions, component prefixes, package names). It does not ask you which framework you are using.

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
get_doc                         → read full component guide
search_api / get_api_reference  → look up exact API (properties, methods, events) when needed
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
What inputs and outputs does the IgcCombo component accept in Web Components?
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
| `list_components` | Browse what's available; verify the MCP server is live | `framework`, `filter` |
| `search_docs` | Full-text search when you know what you want but not the doc name | `query`, `framework` |
| `get_doc` | Read the full API doc — always call before writing any component code | `framework`, `name` (kebab-case, no `.md`) |
| `generate_ignite_app` | Scaffold a new project from scratch | `name`, `framework`, `template`, `outputPath` |
| `search_api` | Discover exact component name and platform by keyword or partial name — use before `get_api_reference` when the name is unknown | `query`, `platform` (optional) |
| `get_api_reference` | Retrieve full API reference (properties, methods, events) for a known component — Angular, React, and Web Components only | `name`, `platform`, `section` (optional: `all`, `properties`, `methods`, `events`) |