# Claude Code Agent Usage Guidelines

This document provides guidance on when and how to automatically engage the specialized sub-agents available in this project. Claude Code should proactively use these agents based on the context and type of request, rather than waiting for explicit instructions.

## 🎯 Automatic Agent Engagement Rules

### When User Mentions Security
**Triggers**: "security", "vulnerability", "authentication", "authorization", "encryption", "compliance", "penetration test", "security review"
**Auto-engage**: 
- `security-analyzer` for vulnerability assessment and security audits
- `security-architect` for designing security frameworks and compliance strategies

**Example**: 
- User: "Review this authentication code" → Automatically use `security-analyzer`
- User: "Design a secure API" → Automatically use `security-architect`

### When User Requests Code Review or Quality Assessment
**Triggers**: "review", "code quality", "best practices", "refactor", "optimize", "clean up"
**Auto-engage**:
- `code-reviewer` for comprehensive code quality assessment
- `code-refactoring-specialist` for structural improvements
- `performance-optimizer` for performance analysis

**Example**:
- User: "Look at this code" → Automatically use `code-reviewer`
- User: "This code is slow" → Automatically use `performance-optimizer`

### When User Describes a New Project or Feature
**Triggers**: "build", "create", "develop", "new project", "application", "system"
**Auto-engage**:
- `project-orchestrator` as the master coordinator
- `requirements-analyst` to gather detailed requirements
- `system-architect` for overall system design
- Relevant development agents based on technology mentioned

**Example**:
- User: "Create a web application for inventory management" → Automatically use `project-orchestrator`
- User: "Build a Python API" → Automatically use `python-developer`

### When User Mentions Specific Technologies
**Auto-engage the corresponding specialist**:
- "Python" → `python-developer`
- "Node.js" or "JavaScript backend" → `nodejs-developer`
- "NestJS" → `nestjs-developer`
- "React" (without Next.js) → `react-developer`
- "Next.js" or "React with SSR" → `nextjs-developer`
- "Go" or "Golang" → `golang-developer`
- "Ruby" → `ruby-developer`
- "Rails" → `rails-developer`
- "SQL" or "database" → `sql-developer`
- "Kubernetes" or "containers" → `kubernetes-developer`

### When User Mentions Infrastructure or Deployment
**Triggers**: "deploy", "production", "AWS", "cloud", "infrastructure", "CI/CD", "DevOps"
**Auto-engage**:
- `aws-solutions-architect` for AWS-related tasks
- `kubernetes-administrator` for Kubernetes operations
- `cicd-builder` for pipeline creation
- `deployment-ops-manager` for production deployment

### When User Mentions Testing
**Triggers**: "test", "testing", "QA", "quality assurance", "bug"
**Auto-engage**:
- `test-suite-generator` for creating comprehensive tests
- `qa-coordinator` for establishing quality standards
- `uat-coordinator` for user acceptance testing

### When User Mentions Documentation
**Triggers**: "document", "documentation", "README", "guide", "manual"
**Auto-engage**:
- `documentation-generator` for technical documentation
- `markdown-writer` for README files and guides

### When User Mentions Project Management
**Triggers**: "plan", "timeline", "project", "manage", "coordinate", "stakeholder"
**Auto-engage**:
- `project-planner` for creating project plans
- `stakeholder-communicator` for communication management
- `risk-manager` for risk assessment

## 🔄 Agent Coordination Patterns

### Always Coordinate With
- **Every technical task** should involve `code-reviewer` for quality assessment
- **Every security-related change** should involve `security-analyzer`
- **Every performance-critical task** should involve `performance-optimizer`
- **Every new feature** should involve `test-suite-generator`

### Sequential Workflows
1. **New Project**: `requirements-analyst` → `system-architect` → development agents → `test-suite-generator` → `deployment-ops-manager`
2. **Code Review**: `code-reviewer` → `security-analyzer` → `performance-optimizer`
3. **Feature Development**: `requirements-analyst` → development agent → `test-suite-generator` → `code-reviewer`

### Parallel Workflows
- Multiple development agents can work simultaneously on different components
- Quality assurance agents can work in parallel with development
- Documentation can be created in parallel with development

## 🎯 Context-Aware Agent Selection

### Based on File Extensions
- `.py` files → `python-developer`
- `.js`, `.ts` files → `nodejs-developer`, `react-developer`, or `nextjs-developer`
- `.go` files → `golang-developer`
- `.rb` files → `ruby-developer`
- `.sql` files → `sql-developer`
- `Dockerfile`, `docker-compose.yml` → `kubernetes-developer`
- `.yml`, `.yaml` in `.github/workflows/` → `cicd-builder`

### Based on Project Structure
- `package.json` with React (SPA/CRA) → `react-developer`
- `package.json` with Next.js → `nextjs-developer`
- `package.json` with NestJS → `nestjs-developer`
- `requirements.txt` or `pyproject.toml` → `python-developer`
- `go.mod` → `golang-developer`
- `Gemfile` → `ruby-developer` or `rails-developer`
- `Cargo.toml` → (suggest creating Rust developer agent)

### Based on User Role/Intent
- Business stakeholder language → `requirements-analyst`, `stakeholder-communicator`
- Technical architecture questions → `system-architect`, `data-architect`
- Performance concerns → `performance-optimizer`
- Security concerns → `security-analyzer`, `security-architect`
- Deployment issues → `deployment-ops-manager`, `aws-solutions-architect`

## 🚨 Critical Auto-Engagement Rules

### Security-First Approach
- **ANY** authentication, authorization, or data handling code → `security-analyzer`
- **ANY** API endpoint creation → `security-analyzer` + `api-designer`
- **ANY** database schema changes → `security-analyzer` + `database-schema-designer`

### Quality-First Approach
- **ANY** code changes → `code-reviewer`
- **ANY** new functionality → `test-suite-generator`
- **ANY** performance-critical code → `performance-optimizer`

### Documentation-First Approach
- **ANY** new project → `documentation-generator`
- **ANY** API creation → `api-designer` + `documentation-generator`
- **ANY** complex feature → `markdown-writer` for user guides

## 💡 Proactive Suggestions

When engaging agents, Claude Code should:

1. **Explain why** the agent was selected
2. **Show the agent's capabilities** relevant to the task
3. **Suggest additional agents** that might be helpful
4. **Coordinate multiple agents** when appropriate

### Example Responses:

**User**: "Review this authentication code"
**Claude Code**: "I'm engaging the `security-analyzer` agent to perform a comprehensive security review of your authentication code. This agent specializes in identifying vulnerabilities, security best practices, and compliance issues. I'll also use the `code-reviewer` agent to assess overall code quality and the `performance-optimizer` to check for any performance implications."

**User**: "Build a task management app"
**Claude Code**: "I'm engaging the `project-orchestrator` agent to coordinate this full-stack development project. This will automatically involve the `requirements-analyst` to gather detailed specifications, `system-architect` for overall design, appropriate development agents based on your technology preferences, `test-suite-generator` for comprehensive testing, and `deployment-ops-manager` for production deployment. Would you like to specify any particular technologies or requirements?"

## 🔧 Agent Availability Check

Before engaging agents, Claude Code should verify that the required agent files are available in the `.claude/agents/` directory and inform the user if any recommended agents are missing.

**Missing Agent Response**: "I recommend using the `security-analyzer` agent for this security review, but I don't see it in your `.claude/agents/` directory. You can add it by copying `security/security-analyzer.md` from the claude-code-sub-agents collection. For now, I'll provide a basic security review using my general capabilities."
