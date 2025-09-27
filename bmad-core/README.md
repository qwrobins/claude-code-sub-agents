# BMAD Core Integration

This directory contains the BMAD (Breakthrough Method for Agile AI-Driven Development) integration components that work with the existing comprehensive agent collection.

## Overview

The BMAD core integration provides:

1. **Workflow Orchestration**: Structured development workflows that leverage existing specialized agents
2. **Context Engineering**: Story files and templates that maintain context through development cycles
3. **Quality Gates**: Risk assessment and quality gate methodology integrated with existing QA agents
4. **Template Processing**: Self-contained templates with embedded AI instructions
5. **Web Bundle Generation**: Cost-effective planning in web interfaces

## Directory Structure

```
bmad-core/
├── workflows/          # Structured development workflow definitions
├── templates/          # Document templates (PRD, Architecture, Stories)
├── tasks/             # Specific workflow actions and processes
├── data/              # Knowledge base and technical preferences
# BMAD workflow agents moved to ../project-management/ for better organization
├── utils/             # Template processing and utility components
└── config/            # Configuration files for BMAD integration
```

## Integration Philosophy

BMAD methodology is integrated as an **overlay** that orchestrates existing specialized agents rather than replacing them:

- **BMAD "Dev" role** → Fulfilled by appropriate specialized development agent (nodejs-developer, python-developer, etc.)
- **BMAD "Architect" role** → Leverages existing system-architect, data-architect, api-designer agents
- **BMAD "QA" role** → Uses existing qa-coordinator, code-reviewer, test-suite-generator agents

## Key Components

### Workflows
- **greenfield-development.yaml**: Complete new project workflow
- **brownfield-enhancement.yaml**: Existing project enhancement workflow
- **feature-development.yaml**: Individual feature development cycle

### Templates
- **prd-template.md**: Product Requirements Document with embedded AI instructions
- **architecture-template.md**: System architecture documentation
- **story-template.md**: Development story files with full context
- **quality-gate-template.yaml**: Quality assessment and gate decisions

### Tasks
- **create-story.md**: Generate development stories from epics
- **shard-document.md**: Break large documents into manageable pieces
- **assess-risk.md**: Risk profiling for development stories
- **quality-gate.md**: Quality gate assessment and decision making

### Agents
- **scrum-master.md**: Orchestrates development cycles using existing specialized agents
- **product-owner.md**: Manages requirements and document sharding

## Usage Patterns

### Planning Phase (Web UI Optimized)
1. Use web bundles for cost-effective planning with powerful models
2. Create PRD and Architecture documents using templates
3. Validate and align documents using existing requirements-analyst and design-reviewer agents

### Development Phase (IDE)
1. Shard documents for development consumption
2. Generate stories using scrum-master agent
3. Implement using appropriate specialized development agents
4. Quality gates using enhanced QA agents with risk assessment

### Integration Points
- **project-orchestrator**: Enhanced with BMAD workflow capabilities
- **Existing QA agents**: Enhanced with risk assessment and quality gates
- **Documentation agents**: Enhanced with template processing capabilities
- **All development agents**: Enhanced with story file context engineering

## Benefits of Integration

1. **Proven Workflows**: BMAD's battle-tested agile development processes
2. **Specialized Expertise**: Leverage 53 specialized agents for deep technical knowledge
3. **Context Continuity**: Story files maintain implementation context between cycles
4. **Quality Assurance**: Structured risk assessment and quality gates
5. **Cost Optimization**: Web UI planning with IDE development execution
6. **Flexible Architecture**: Can adapt to various project types and requirements

## Getting Started

1. **Planning**: Use web bundles or enhanced project-orchestrator for initial planning
2. **Setup**: Configure technical preferences and project structure
3. **Development**: Follow BMAD workflows using existing specialized agents
4. **Quality**: Use enhanced QA processes with risk assessment and quality gates

See individual component documentation for detailed usage instructions.
