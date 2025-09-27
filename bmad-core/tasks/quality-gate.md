# Task: Quality Gate Assessment

## Purpose
Conduct comprehensive quality assessment of completed development stories using risk-based evaluation criteria and existing specialized QA agents to ensure code quality, test coverage, and architectural compliance.

## When to Use
- After development agent marks story as "Ready for Review"
- When story implementation is complete with all tasks finished
- Before story can be marked as "Done" and next story begins
- When quality validation is required for high-risk stories

## Prerequisites
- Story implementation is complete
- All development tasks are finished
- Tests are written and passing
- Code is committed and ready for review
- Story file contains implementation notes from development agent

## Process

### 1. Requirements Traceability Analysis
Verify that implementation meets all acceptance criteria:
- Map each acceptance criterion to validating tests
- Ensure all business requirements are implemented
- Validate that implementation matches story specifications
- Check for scope creep or missing functionality

### 2. Test Architecture Review
Collaborate with specialized QA agents to assess testing:
- **test-suite-generator**: Validate test coverage and quality
- **code-reviewer**: Assess test code quality and maintainability
- Review test levels (unit, integration, end-to-end)
- Ensure tests are reliable, maintainable, and properly isolated
- Validate test data management and cleanup

### 3. Code Quality Assessment
Use existing code review agents for quality evaluation:
- **code-reviewer**: Comprehensive code quality analysis
- Security vulnerability assessment
- Performance implications review
- Maintainability and readability evaluation
- Adherence to coding standards and best practices

### 4. Risk Validation
Assess how well identified risks were mitigated:
- Review risk factors identified during story creation
- Validate that mitigation strategies were implemented
- Identify any new risks introduced during implementation
- Assess overall risk level of the completed implementation

### 5. Architecture Compliance
Ensure implementation aligns with system architecture:
- Validate adherence to architectural patterns
- Check integration points and API contracts
- Ensure data model compliance
- Verify security and performance requirements

### 6. Active Code Improvement (When Safe)
When code improvements can be made safely:
- Refactor code for better maintainability
- Optimize performance where appropriate
- Improve error handling and logging
- Enhance code documentation and comments

### 7. Quality Gate Decision
Make final quality gate decision based on assessment:
- **PASS**: All criteria met, no blocking issues
- **CONCERNS**: Non-critical issues identified, team should review
- **FAIL**: Critical issues that must be addressed
- **WAIVED**: Issues acknowledged but explicitly accepted

## Quality Gate Criteria

### PASS Criteria
- All acceptance criteria implemented and tested
- Test coverage meets minimum requirements (typically 80%+)
- All P0 (critical) tests are present and passing
- No critical security vulnerabilities
- Code quality meets established standards
- Architecture compliance validated
- Risk mitigation strategies implemented

### CONCERNS Criteria
- Minor code quality issues identified
- Test coverage slightly below target but acceptable
- Non-critical performance concerns
- Minor architectural deviations that should be addressed
- P1 tests missing but P0 tests complete

### FAIL Criteria
- Critical acceptance criteria not met
- Security vulnerabilities present
- P0 tests missing or failing
- Major architectural violations
- Risk score >= 9 with inadequate mitigation
- Code quality significantly below standards

### WAIVED Criteria
- Issues acknowledged but explicitly accepted by team
- Business justification for accepting technical debt
- Time constraints require accepting minor issues
- Risk accepted with documented mitigation plan

## Outputs

### Quality Gate File
Create `docs/qa/gates/{epic}.{story}.yaml` containing:
- Quality gate decision (PASS/CONCERNS/FAIL/WAIVED)
- Detailed assessment results
- Issues identified and their severity
- Recommendations for improvement
- Risk validation results
- Test coverage metrics

### Story Updates
Update the story file with:
- QA review section completed
- Quality gate decision recorded
- Any code improvements made
- Recommendations for future stories

## Integration with Existing QA Agents

### Primary Collaboration
- **qa-coordinator**: Overall quality process coordination
- **code-reviewer**: Detailed code quality assessment and improvement
- **test-suite-generator**: Test strategy validation and coverage analysis
- **uat-coordinator**: Business requirement validation (when applicable)

### Specialized Reviews
- **security-analyzer**: Security vulnerability assessment
- **performance-optimizer**: Performance impact analysis
- **requirements-validator**: Requirements traceability validation

## Quality Gate Template

```yaml
story_id: "{epic}.{story}"
assessment_date: "{date}"
assessed_by: "qa-coordinator"
collaborating_agents:
  - "code-reviewer"
  - "test-suite-generator"

quality_gate_decision: "PASS|CONCERNS|FAIL|WAIVED"

assessment_results:
  requirements_traceability:
    status: "PASS|CONCERNS|FAIL"
    coverage_percentage: 100
    missing_requirements: []
    
  test_coverage:
    status: "PASS|CONCERNS|FAIL"
    unit_test_coverage: 85
    integration_test_coverage: 75
    e2e_test_coverage: 60
    p0_tests_complete: true
    
  code_quality:
    status: "PASS|CONCERNS|FAIL"
    maintainability_score: 8.5
    security_issues: []
    performance_concerns: []
    
  architecture_compliance:
    status: "PASS|CONCERNS|FAIL"
    pattern_adherence: true
    integration_compliance: true
    
  risk_validation:
    original_risk_score: 6
    mitigated_risk_score: 3
    mitigation_effectiveness: "HIGH"

issues_identified:
  - severity: "LOW|MEDIUM|HIGH|CRITICAL"
    category: "code_quality|testing|security|performance|architecture"
    description: "Issue description"
    recommendation: "How to address"

improvements_made:
  - description: "Code improvement made during review"
    impact: "Positive impact of the improvement"

recommendations:
  - "Recommendation for future development"
  
next_actions:
  - "Actions required before story completion"
```

## Success Indicators
- Quality gate decision is appropriate for the story's risk and complexity
- All critical issues are identified and addressed
- Test coverage meets project standards
- Code quality improvements are made when safe
- Risk mitigation is validated
- Story is ready for completion or issues are clearly documented

## Integration with Development Cycle
- Provides feedback to development agents for continuous improvement
- Informs next story creation with lessons learned
- Maintains quality standards across the project
- Enables risk-based quality decisions
- Supports continuous improvement of development practices
