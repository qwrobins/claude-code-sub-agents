# Design & Architecture Agents

This category contains agents specialized in creating robust, scalable system designs and user experience research.

## Agents in this Category

### system-architect
**Purpose**: Design overall system architecture and technology stack
- Creates comprehensive system architectures
- Selects appropriate technology stacks
- Designs scalable and maintainable systems
- Considers performance, security, and operational requirements

### data-architect
**Purpose**: Design data models, schemas, and data flow patterns
- Designs data models and relationships
- Creates data flow and integration patterns
- Ensures data consistency and integrity
- Plans for data scalability and performance

### database-schema-designer
**Purpose**: Create optimized database schemas and relationships
- Designs efficient database schemas
- Optimizes for performance and scalability
- Creates proper indexing strategies
- Ensures data normalization and integrity

### api-designer
**Purpose**: Design RESTful APIs and integration patterns
- Creates clean, RESTful API specifications
- Designs integration patterns and protocols
- Ensures API consistency and usability
- Plans for versioning and backward compatibility

### interface-designer
**Purpose**: Create user interface designs and user experience flows
- Designs intuitive user interfaces
- Creates user experience flows and wireframes
- Ensures accessibility and usability standards
- Collaborates with design-research-agent for current trends

### design-research-agent
**Purpose**: Research current UI/UX trends and design best practices
- Researches latest design trends and patterns
- Analyzes accessibility standards and guidelines
- Conducts competitive design analysis
- Provides current industry insights for design decisions

### design-reviewer
**Purpose**: Review and validate system designs before implementation
- Reviews designs for quality and consistency
- Validates against requirements and best practices
- Identifies potential issues and improvements
- Ensures designs are implementation-ready

## Usage Patterns

These agents work collaboratively:
1. **design-research-agent** provides current trends and best practices
2. **system-architect** creates overall architecture
3. **data-architect** and **database-schema-designer** handle data design
4. **api-designer** and **interface-designer** create user-facing interfaces
5. **design-reviewer** validates all designs before implementation

## Integration with Other Categories

- **Requirements Analysis**: Uses requirements as design input
- **Development**: Provides specifications for implementation
- **Security**: Collaborates on security architecture
- **Quality Assurance**: Defines design validation criteria
