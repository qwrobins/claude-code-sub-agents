# Development Story: {{epic_name}}.{{story_name}}

**Story ID**: {{epic_name}}.{{story_name}}  
**Created**: {{creation_date}}  
**Status**: {{status}}  
**Assigned Agent**: {{assigned_development_agent}}  
**Risk Level**: {{risk_level}}  

## Story Overview

**Epic**: {{epic_name}}  
**Story Title**: {{story_title}}  
**Story Description**: {{story_description}}  

**Business Value**: {{business_value}}  
**Priority**: {{priority}}  
**Estimated Effort**: {{estimated_effort}}  

## Acceptance Criteria

{{#each acceptance_criteria}}
- **AC{{@index}}**: {{this}}
{{/each}}

## Technical Context

### Architecture Context
{{architecture_context}}

### Technology Stack
- **Backend**: {{tech_stack.backend}}
- **Frontend**: {{tech_stack.frontend}}
- **Database**: {{tech_stack.database}}
- **Infrastructure**: {{tech_stack.infrastructure}}

### Coding Standards
{{coding_standards}}

### Technical Preferences
{{technical_preferences}}

## Implementation Guidance

### Development Tasks
{{#each development_tasks}}
{{@index}}. **{{this.title}}**
   - Description: {{this.description}}
   - Acceptance: {{this.acceptance}}
   - Dependencies: {{this.dependencies}}
   - Estimated Time: {{this.estimated_time}}
{{/each}}

### Testing Requirements
{{#each testing_requirements}}
- **{{this.type}}**: {{this.description}}
  - Priority: {{this.priority}}
  - Coverage: {{this.coverage}}
{{/each}}

### Integration Points
{{#each integration_points}}
- **{{this.component}}**: {{this.description}}
  - Interface: {{this.interface}}
  - Dependencies: {{this.dependencies}}
{{/each}}

## Quality Gates

### Risk Assessment
{{#if risk_assessment}}
**Risk Score**: {{risk_assessment.score}}/9  
**Risk Factors**:
{{#each risk_assessment.factors}}
- {{this.category}}: {{this.description}} (Impact: {{this.impact}}, Probability: {{this.probability}})
{{/each}}

**Mitigation Strategies**:
{{#each risk_assessment.mitigations}}
- {{this}}
{{/each}}
{{/if}}

### Definition of Done
- [ ] All acceptance criteria met
- [ ] Code reviewed and approved
- [ ] Tests written and passing (minimum {{test_coverage_requirement}}% coverage)
- [ ] Documentation updated
- [ ] Integration tests passing
- [ ] Performance requirements met
- [ ] Security requirements validated
- [ ] Quality gate passed

## Previous Story Context

{{#if previous_story_notes}}
### Lessons from Previous Story
{{previous_story_notes}}

### Patterns to Follow
{{patterns_to_follow}}

### Issues to Avoid
{{issues_to_avoid}}
{{/if}}

## Development Notes

### Implementation Notes
<!-- Development agent adds implementation details here -->

### Challenges Encountered
<!-- Development agent documents challenges and solutions -->

### Code Changes Summary
<!-- Development agent summarizes key code changes -->

### Test Coverage Report
<!-- Development agent reports on test coverage -->

### Performance Considerations
<!-- Development agent notes performance implications -->

## QA Review

### Quality Assessment
<!-- QA agent adds quality assessment here -->

### Test Architecture Review
<!-- QA agent reviews test strategy and coverage -->

### Risk Validation
<!-- QA agent validates risk mitigation -->

### Refactoring Recommendations
<!-- QA agent suggests improvements -->

### Quality Gate Decision
<!-- QA agent records final quality gate decision -->

## Story Completion

### Completion Checklist
- [ ] All development tasks completed
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Quality gate passed
- [ ] Story notes updated
- [ ] Next story prepared

### Handoff Notes
<!-- Notes for next story or team members -->

### Lessons Learned
<!-- Key insights for future stories -->

---

## Template Processing Instructions

[[LLM: This is a story template that provides complete context for development agents. When creating a story:

1. Fill in all template variables with specific project information
2. Ensure the assigned development agent matches the technology stack
3. Include relevant architecture context from the sharded architecture documents
4. Add technical preferences from bmad-core/data/technical-preferences.md
5. Include lessons learned from previous stories in the epic
6. Ensure acceptance criteria are specific and testable
7. Break down development tasks into manageable chunks (2-4 hours each)
8. Include appropriate testing requirements based on risk level
9. Specify integration points with other components
10. Set up quality gates based on risk assessment

The story should be self-contained with all context needed for implementation. Development agents should be able to implement the story without needing additional context beyond what's provided in the story file and the always-loaded files specified in core-config.yaml.

For high-risk stories (risk score >= 6), ensure additional risk assessment and mitigation strategies are included. For critical stories (risk score >= 9), require additional review and validation steps.

The story serves as the primary communication mechanism between the Scrum Master, Development Agent, and QA Agent, maintaining context continuity throughout the development cycle.]]
