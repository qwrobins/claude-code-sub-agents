# Product Requirements Document: {{project_name}}

**Document Version**: {{version}}  
**Created**: {{creation_date}}  
**Last Updated**: {{last_updated}}  
**Project Owner**: {{project_owner}}  
**Status**: {{status}}

## Executive Summary

**Project Vision**: {{project_vision}}

**Business Objective**: {{business_objective}}

**Success Metrics**: {{success_metrics}}

**Target Launch**: {{target_launch_date}}

## Problem Statement

### Current State
{{current_state_description}}

### Problem Definition
{{problem_definition}}

### Impact of Not Solving
{{impact_of_not_solving}}

## Solution Overview

### Proposed Solution
{{proposed_solution}}

### Key Benefits
{{#each key_benefits}}
- {{this}}
{{/each}}

### Success Criteria
{{#each success_criteria}}
- {{this}}
{{/each}}

## Target Users and Stakeholders

### Primary Users
{{#each primary_users}}
**{{this.role}}**: {{this.description}}
- Needs: {{this.needs}}
- Goals: {{this.goals}}
- Pain Points: {{this.pain_points}}
{{/each}}

### Secondary Users
{{#each secondary_users}}
**{{this.role}}**: {{this.description}}
{{/each}}

### Stakeholders
{{#each stakeholders}}
**{{this.role}}**: {{this.interest}}
{{/each}}

## Functional Requirements

### Core Features
{{#each core_features}}
#### {{this.name}}
**Description**: {{this.description}}
**Priority**: {{this.priority}}
**User Stories**:
{{#each this.user_stories}}
- As a {{this.role}}, I want {{this.want}} so that {{this.benefit}}
{{/each}}

**Acceptance Criteria**:
{{#each this.acceptance_criteria}}
- {{this}}
{{/each}}

**Dependencies**: {{this.dependencies}}
{{/each}}

### Secondary Features
{{#each secondary_features}}
#### {{this.name}}
**Description**: {{this.description}}
**Priority**: {{this.priority}}
**Rationale**: {{this.rationale}}
{{/each}}

### Future Considerations
{{#each future_features}}
- {{this.name}}: {{this.description}}
{{/each}}

## Non-Functional Requirements

### Performance Requirements
- **Response Time**: {{performance.response_time}}
- **Throughput**: {{performance.throughput}}
- **Concurrent Users**: {{performance.concurrent_users}}
- **Availability**: {{performance.availability}}
- **Scalability**: {{performance.scalability}}

### Security Requirements
- **Authentication**: {{security.authentication}}
- **Authorization**: {{security.authorization}}
- **Data Protection**: {{security.data_protection}}
- **Compliance**: {{security.compliance}}
- **Audit Requirements**: {{security.audit_requirements}}

### Usability Requirements
- **User Experience**: {{usability.user_experience}}
- **Accessibility**: {{usability.accessibility}}
- **Browser Support**: {{usability.browser_support}}
- **Mobile Support**: {{usability.mobile_support}}

### Technical Requirements
- **Technology Stack**: {{technical.technology_stack}}
- **Integration Requirements**: {{technical.integration_requirements}}
- **Data Requirements**: {{technical.data_requirements}}
- **Infrastructure Requirements**: {{technical.infrastructure_requirements}}

## User Experience Requirements

### User Interface Requirements
{{ui_requirements}}

### User Journey
{{#each user_journeys}}
#### {{this.name}}
{{this.description}}

**Steps**:
{{#each this.steps}}
{{@index}}. {{this}}
{{/each}}

**Success Criteria**: {{this.success_criteria}}
{{/each}}

### Wireframes and Mockups
{{wireframes_description}}

## Business Rules and Logic

### Business Rules
{{#each business_rules}}
- **{{this.rule}}**: {{this.description}}
  - Conditions: {{this.conditions}}
  - Actions: {{this.actions}}
{{/each}}

### Data Validation Rules
{{#each validation_rules}}
- {{this}}
{{/each}}

### Workflow Requirements
{{#each workflows}}
#### {{this.name}}
{{this.description}}

**Trigger**: {{this.trigger}}
**Steps**: {{this.steps}}
**Outcome**: {{this.outcome}}
{{/each}}

## Integration Requirements

### External Systems
{{#each external_integrations}}
#### {{this.system}}
**Purpose**: {{this.purpose}}
**Integration Type**: {{this.type}}
**Data Exchange**: {{this.data_exchange}}
**Frequency**: {{this.frequency}}
**Dependencies**: {{this.dependencies}}
{{/each}}

### APIs and Services
{{#each api_requirements}}
- **{{this.name}}**: {{this.description}}
  - Type: {{this.type}}
  - Authentication: {{this.authentication}}
  - Rate Limits: {{this.rate_limits}}
{{/each}}

## Data Requirements

### Data Models
{{#each data_models}}
#### {{this.name}}
{{this.description}}

**Attributes**:
{{#each this.attributes}}
- {{this.name}} ({{this.type}}): {{this.description}}
{{/each}}

**Relationships**: {{this.relationships}}
{{/each}}

### Data Sources
{{#each data_sources}}
- **{{this.name}}**: {{this.description}}
  - Type: {{this.type}}
  - Frequency: {{this.frequency}}
  - Volume: {{this.volume}}
{{/each}}

### Data Privacy and Compliance
{{data_privacy_requirements}}

## Project Scope and Constraints

### In Scope
{{#each in_scope}}
- {{this}}
{{/each}}

### Out of Scope
{{#each out_of_scope}}
- {{this}}
{{/each}}

### Constraints
{{#each constraints}}
- **{{this.type}}**: {{this.description}}
{{/each}}

### Assumptions
{{#each assumptions}}
- {{this}}
{{/each}}

## Risk Assessment

### Technical Risks
{{#each technical_risks}}
- **{{this.risk}}**: {{this.description}}
  - Probability: {{this.probability}}
  - Impact: {{this.impact}}
  - Mitigation: {{this.mitigation}}
{{/each}}

### Business Risks
{{#each business_risks}}
- **{{this.risk}}**: {{this.description}}
  - Probability: {{this.probability}}
  - Impact: {{this.impact}}
  - Mitigation: {{this.mitigation}}
{{/each}}

## Success Metrics and KPIs

### Business Metrics
{{#each business_metrics}}
- **{{this.metric}}**: {{this.description}}
  - Target: {{this.target}}
  - Measurement: {{this.measurement}}
{{/each}}

### Technical Metrics
{{#each technical_metrics}}
- **{{this.metric}}**: {{this.description}}
  - Target: {{this.target}}
  - Measurement: {{this.measurement}}
{{/each}}

### User Metrics
{{#each user_metrics}}
- **{{this.metric}}**: {{this.description}}
  - Target: {{this.target}}
  - Measurement: {{this.measurement}}
{{/each}}

## Implementation Timeline

### Phases
{{#each phases}}
#### Phase {{@index}}: {{this.name}}
**Duration**: {{this.duration}}
**Deliverables**: {{this.deliverables}}
**Dependencies**: {{this.dependencies}}
**Success Criteria**: {{this.success_criteria}}
{{/each}}

### Milestones
{{#each milestones}}
- **{{this.name}}** ({{this.date}}): {{this.description}}
{{/each}}

## Appendices

### Glossary
{{#each glossary}}
- **{{this.term}}**: {{this.definition}}
{{/each}}

### References
{{#each references}}
- {{this}}
{{/each}}

---

## Template Processing Instructions

[[LLM: This PRD template is designed to work with the BMAD methodology and existing specialized agents. When creating a PRD:

1. **Comprehensive Requirements Gathering**: Work with the requirements-analyst agent to ensure all functional and non-functional requirements are captured
2. **User-Centered Design**: Collaborate with the business-process-analyst to understand user needs and workflows
3. **Technical Feasibility**: Coordinate with system-architect and technical-research-analyst for technical validation
4. **Business Alignment**: Ensure all requirements support business objectives and success metrics

**Key Integration Points**:
- **Functional Requirements** will be used by the product-owner agent for epic creation
- **Technical Requirements** will guide the system-architect in architecture design
- **User Stories** will be refined by the user-story-generator agent
- **Non-functional Requirements** will inform quality gates and testing strategies

**BMAD Workflow Preparation**:
- Ensure requirements are specific enough for epic creation
- Include clear acceptance criteria for each feature
- Define business rules that can be validated in development stories
- Specify integration points that will need architectural consideration

**Quality Criteria**:
- All requirements should be testable and measurable
- User stories should follow the "As a... I want... so that..." format
- Acceptance criteria should be specific and unambiguous
- Business rules should be clearly defined with conditions and actions
- Success metrics should be quantifiable and time-bound

The PRD should serve as the foundation for all subsequent development work, providing clear direction for architecture design, epic creation, and story development.]]
