# Task: Create Development Story

## Purpose
Generate a comprehensive development story from an epic that provides complete context for specialized development agents to implement features without requiring additional context gathering.

## When to Use
- After epics have been sharded from the PRD and Architecture documents
- When starting a new development cycle
- When the previous story in an epic has been completed
- When creating the first story for a new epic

## Prerequisites
- Epic document exists in `docs/epics/`
- Architecture document has been sharded and relevant sections are available
- Technical preferences are defined in `bmad-core/data/technical-preferences.md`
- Previous story notes are available (if not the first story)

## Process

### 1. Epic Analysis
Review the current epic document to understand:
- Epic goals and business value
- Remaining work to be done
- Dependencies and constraints
- Technical requirements

### 2. Story Identification
Identify the next logical story to implement:
- Consider dependencies between stories
- Prioritize based on business value and risk
- Ensure story is appropriately sized (2-8 hours of development work)
- Verify story can be implemented independently

### 3. Context Gathering
Collect all necessary context for the story:
- Relevant architecture sections
- Technical preferences and coding standards
- Integration points with existing code
- Previous story lessons learned
- Risk factors and mitigation strategies

### 4. Technology Stack Determination
Determine the appropriate specialized development agent:
- Analyze the technology requirements
- Consider the existing codebase technology
- Select the most appropriate specialized agent (nodejs-developer, python-developer, etc.)
- Ensure agent has necessary capabilities for the story

### 5. Story Creation
Create the story using the story template:
- Fill in all template variables with specific information
- Include comprehensive acceptance criteria
- Break down into specific development tasks
- Define testing requirements based on risk level
- Include all necessary context for implementation

### 6. Risk Assessment (If High-Risk)
For stories with potential high risk:
- Conduct preliminary risk assessment
- Identify risk factors and mitigation strategies
- Consider if QA agent should review before development
- Document risk level and handling approach

### 7. Story Validation
Ensure the story is complete and actionable:
- All acceptance criteria are specific and testable
- Development tasks are clearly defined
- Technical context is sufficient for implementation
- Integration points are identified
- Quality gates are appropriate for risk level

## Outputs
- Complete story file in `docs/stories/{epic}.{story}.md`
- Story includes all context needed for implementation
- Appropriate development agent is identified
- Risk level is assessed and documented
- Quality gates are defined

## Integration with Existing Agents

### Collaboration Points
- **requirements-analyst**: For clarifying business requirements
- **system-architect**: For architecture context and constraints
- **api-designer**: For API specifications and integration points
- **data-architect**: For data model and database considerations
- **qa-coordinator**: For risk assessment and quality gate definition

### Handoff to Development Agents
The created story should provide complete context for:
- **nodejs-developer**: Node.js specific implementation details
- **python-developer**: Python specific requirements and patterns
- **react-developer**: Frontend component and state management needs
- **kubernetes-developer**: Container and deployment considerations
- **Any other specialized development agent**: Technology-specific context

## Quality Criteria
- Story is self-contained with all necessary context
- Acceptance criteria are specific, measurable, and testable
- Development tasks are appropriately sized and sequenced
- Risk level is accurately assessed
- Integration points are clearly identified
- Technical context includes all necessary architecture information
- Story aligns with epic goals and overall project architecture

## Template Usage
Use the `story-template.md` with the following considerations:
- Fill all template variables with project-specific information
- Include relevant sections from sharded architecture documents
- Add technical preferences and coding standards
- Include lessons learned from previous stories
- Ensure the assigned development agent matches the technology requirements
- Set appropriate quality gates based on risk assessment

## Success Indicators
- Development agent can implement the story without additional context requests
- All acceptance criteria can be validated through testing
- Story integrates properly with existing codebase
- Quality gates are appropriate for the story's risk level
- Story contributes meaningfully to epic completion

## Common Pitfalls to Avoid
- Creating stories that are too large or complex
- Missing critical integration points
- Insufficient technical context for implementation
- Vague or untestable acceptance criteria
- Incorrect development agent assignment
- Inadequate risk assessment for complex stories
- Missing dependencies on other stories or components
