# BMAD Integration Quick Start Guide

This guide helps you get started with the BMAD (Breakthrough Method for Agile AI-Driven Development) integration in the Claude Code Comprehensive Agent Collection.

## 🚀 What is BMAD Integration?

BMAD integration combines the comprehensive specialization of 57 Claude Code agents with proven agile development workflows, providing:

- **Structured Development Cycles**: Planning → Story Creation → Implementation → Quality Gates
- **Context Engineering**: Story files maintain complete context through development cycles
- **Risk-Based Quality Gates**: Quality assessment with specialized QA agents
- **Cost-Effective Planning**: Web bundles for planning in web interfaces
- **Specialized Agent Orchestration**: BMAD workflows use existing specialized agents

## 🎯 When to Use Each Approach

### Use Traditional Agent Orchestration When:
- Rapid prototyping or proof-of-concept development
- Small projects with simple requirements
- Direct implementation without extensive planning
- Working with existing codebases that don't need structured workflows

### Use BMAD Methodology When:
- Complex projects requiring structured development
- Teams needing consistent development processes
- Projects requiring quality gates and risk assessment
- Long-term projects with multiple developers
- Projects where context continuity is critical

## 📋 Quick Start Options

### Option 1: Web-Based Planning (Cost-Effective)

**Step 1: Generate Web Bundle**
```bash
npm install
npm run bmad:generate-bundles
```

**Step 2: Upload to Web AI Platform**
1. Upload `dist/web-bundles/bmad-planning-bundle.txt` to Claude/Gemini/ChatGPT
2. Use instruction: "Your critical operating instructions are attached. Do not break character as directed."
3. Start planning: "I want to build a [project description] using BMAD methodology"

**Step 3: Planning Phase**
- Use `@requirements-analyst` to create PRD
- Use `@system-architect` to design architecture
- Use `@product-owner` to validate and align documents

**Step 4: Switch to IDE**
- Copy PRD and architecture documents to your project
- Use `@product-owner` to shard documents into epics
- Begin development cycles with `@scrum-master`

### Option 2: Direct IDE Development

**Step 1: Start with Project Orchestrator**
```
@project-orchestrator I want to build a [project description] using BMAD methodology
```

**Step 2: Follow BMAD Workflow**
The project-orchestrator will automatically:
1. Engage requirements-analyst for PRD creation
2. Engage system-architect for architecture design
3. Engage product-owner for document sharding
4. Begin story-driven development cycles

## 🔄 BMAD Development Cycle

### 1. Epic and Story Creation
```
@product-owner Shard the PRD and architecture into development epics
@scrum-master Create the first development story from the [epic-name] epic
```

### 2. Story Implementation
```
@[technology-agent] Implement the story with full context
# Examples:
@nodejs-developer Implement the authentication story
@react-developer Implement the user interface story
@python-developer Implement the data processing story
```

### 3. Quality Gates
```
@qa-coordinator assess-risk [story-name]  # Risk assessment
@qa-coordinator quality-gate [story-name] # Complete quality assessment
```

### 4. Story Completion and Next Cycle
```
@scrum-master Complete the current story and create the next story
```

## 🎯 Key BMAD Agents

### Workflow Orchestration (in project-management/)
- **project-orchestrator** - Enhanced with BMAD workflow capabilities
- **scrum-master** - Creates and manages development stories
- **product-owner** - Manages requirements and document sharding

### Quality Assurance
- **qa-coordinator** - Enhanced with risk assessment and quality gates
- **code-reviewer** - Code quality assessment and improvement
- **test-suite-generator** - Test strategy and coverage validation

### Specialized Development
All existing development agents work with BMAD:
- **nodejs-developer**, **react-developer**, **python-developer**, etc.
- Agents receive complete context through story files
- Quality gates ensure consistent quality across all technologies

## 📊 Quality Gate System

### Risk Assessment Levels
- **1-3**: Low risk - Standard quality gates
- **4-6**: Medium risk - Enhanced testing and review
- **7-9**: High risk - Comprehensive assessment and mitigation

### Quality Gate Decisions
- **PASS**: All criteria met, ready for completion
- **CONCERNS**: Minor issues, team should review
- **FAIL**: Critical issues, must be addressed
- **WAIVED**: Issues accepted with business justification

### Quality Gate Commands
```bash
@qa-coordinator assess-risk {story}           # Risk profiling
@qa-coordinator quality-gate {story}          # Complete assessment
@qa-coordinator trace-requirements {story}    # Requirements validation
@qa-coordinator nfr-assess {story}           # Non-functional requirements
```

## 📁 Project Structure

```
your-project/
├── docs/
│   ├── prd.md                    # Product Requirements Document
│   ├── architecture.md           # System Architecture
│   ├── epics/                    # Sharded epic documents
│   ├── stories/                  # Development story files
│   └── qa/                       # Quality assessments and gates
├── bmad-core/                    # BMAD integration (from this repo)
│   ├── workflows/                # Development workflows
│   ├── templates/                # Document templates
│   ├── tasks/                    # Workflow tasks
│   ├── agents/                   # BMAD workflow agents
│   └── data/                     # Technical preferences
└── dist/web-bundles/             # Generated web bundles
```

## 🛠️ Available Scripts

```bash
# Generate all web bundles
npm run bmad:generate-bundles

# Generate specific bundles
npm run bmad:planning-bundle      # Planning phase only
npm run bmad:development-bundle   # Development phase only
npm run bmad:fullstack-bundle     # Complete BMAD capability

# Validation and help
npm run bmad:validate             # Validate BMAD integration
npm run bmad:help                 # Show available commands
```

## 💡 Best Practices

### Planning Phase
1. **Start with clear requirements**: Use requirements-analyst for comprehensive PRD
2. **Design before coding**: Use system-architect for solid architecture foundation
3. **Validate early**: Use product-owner to ensure business alignment

### Development Phase
1. **One story at a time**: Focus on single story implementation
2. **Complete context**: Ensure stories have all necessary information
3. **Quality gates**: Use qa-coordinator for consistent quality assessment
4. **Learn and improve**: Capture lessons learned for future stories

### Quality Assurance
1. **Risk-based approach**: Higher risk stories get more attention
2. **Early assessment**: Assess risks before development starts
3. **Continuous improvement**: Use quality feedback to improve processes
4. **Document decisions**: Maintain quality gate documentation

## 🔧 Troubleshooting

### Common Issues

**"Story lacks context"**
- Ensure product-owner has sharded documents properly
- Include technical preferences and coding standards
- Add lessons learned from previous stories

**"Quality gate fails"**
- Review risk assessment and mitigation strategies
- Ensure test coverage meets requirements
- Address security and performance concerns

**"Agent selection confusion"**
- Use project-orchestrator for workflow coordination
- Let scrum-master select appropriate development agents
- Refer to technology stack in story files

### Getting Help

1. **Check documentation**: Review bmad-core/README.md
2. **Validate setup**: Run `npm run bmad:validate`
3. **Review examples**: Check story templates and quality gate examples
4. **Ask project-orchestrator**: Use for workflow guidance and coordination

## 🎉 Success Indicators

You're successfully using BMAD when:
- ✅ Stories are self-contained with complete context
- ✅ Development agents can implement without additional questions
- ✅ Quality gates provide consistent quality assessment
- ✅ Development cycles are predictable and efficient
- ✅ Context is maintained across story implementations
- ✅ Quality improves over time through lessons learned

## 🚀 Next Steps

1. **Start small**: Try BMAD with a simple feature or component
2. **Iterate and improve**: Refine your process based on experience
3. **Scale up**: Apply BMAD to larger projects and teams
4. **Customize**: Adapt templates and workflows to your needs
5. **Share learnings**: Contribute improvements back to the community

Happy coding with BMAD! 🎯
