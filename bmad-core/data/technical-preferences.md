# Technical Preferences

This file contains technical preferences that influence agent behavior across all projects. Agents automatically reference this file during planning and development to provide contextually appropriate suggestions.

## Technology Stack Preferences

### Backend Development
**Preferred Technologies:**
- **Node.js**: For JavaScript/TypeScript backend services
- **NestJS**: For enterprise-grade applications requiring structure and scalability
- **Python**: For data processing, ML/AI applications, and rapid prototyping
- **Go**: For high-performance services and microservices
- **PostgreSQL**: Primary database choice for relational data
- **Redis**: For caching and session management

**Frameworks and Libraries:**
- **Express.js**: For simple Node.js APIs
- **Fastify**: For high-performance Node.js applications
- **FastAPI**: For Python APIs with automatic documentation
- **Gin**: For Go web services
- **TypeORM**: For Node.js database operations
- **Prisma**: For modern database access with type safety

### Frontend Development
**Preferred Technologies:**
- **React**: Primary frontend framework
- **Next.js**: For full-stack React applications with SSR/SSG
- **TypeScript**: Strongly preferred over JavaScript
- **Tailwind CSS**: For utility-first styling
- **React Query/TanStack Query**: For server state management
- **Zustand**: For client state management (lightweight alternative to Redux)

**UI Libraries:**
- **Shadcn/ui**: For component library with Tailwind CSS
- **Radix UI**: For accessible, unstyled components
- **Lucide React**: For consistent iconography

### Database and Data
**Preferred Choices:**
- **PostgreSQL**: Primary relational database
- **MongoDB**: For document-based data when appropriate
- **Redis**: For caching, sessions, and real-time features
- **Elasticsearch**: For search functionality
- **InfluxDB**: For time-series data

**Data Patterns:**
- Repository pattern for data access
- Database migrations for schema changes
- Connection pooling for performance
- Read replicas for scaling read operations

### Infrastructure and DevOps
**Preferred Technologies:**
- **Docker**: For containerization
- **Kubernetes**: For container orchestration
- **AWS**: Primary cloud provider
- **Terraform**: For infrastructure as code
- **GitHub Actions**: For CI/CD pipelines
- **Nginx**: For reverse proxy and load balancing

**AWS Services:**
- **EKS**: For Kubernetes clusters
- **RDS**: For managed databases
- **ElastiCache**: For managed Redis
- **S3**: For object storage
- **CloudFront**: For CDN
- **Route 53**: For DNS management

## Development Practices

### Code Quality
**Standards:**
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Husky for git hooks
- Conventional commits for commit messages
- Code reviews required for all changes
- Minimum 80% test coverage

### Testing Strategy
**Preferred Approach:**
- **Unit Tests**: Jest for Node.js, pytest for Python
- **Integration Tests**: Supertest for API testing
- **E2E Tests**: Playwright for browser testing
- **Test Containers**: For integration testing with real databases
- **Mocking**: Minimal mocking, prefer real implementations in tests

### API Design
**Preferred Patterns:**
- RESTful APIs with OpenAPI documentation
- GraphQL for complex data fetching requirements
- JSON API specification for consistent responses
- Versioning through URL paths (/v1/, /v2/)
- Comprehensive error handling with proper HTTP status codes

### Security Practices
**Standards:**
- JWT tokens for authentication
- RBAC (Role-Based Access Control) for authorization
- HTTPS everywhere
- Input validation and sanitization
- SQL injection prevention through parameterized queries
- Regular security audits and dependency updates

## Architecture Patterns

### Preferred Patterns
**Application Architecture:**
- **Microservices**: For large, complex applications
- **Modular Monolith**: For medium-sized applications
- **Clean Architecture**: For maintainable code organization
- **Domain-Driven Design**: For complex business logic
- **Event-Driven Architecture**: For decoupled systems

**Design Patterns:**
- Repository pattern for data access
- Factory pattern for object creation
- Observer pattern for event handling
- Strategy pattern for algorithm selection
- Dependency injection for loose coupling

### Anti-Patterns to Avoid
**Code Patterns:**
- God objects or classes
- Circular dependencies
- Tight coupling between modules
- Hardcoded configuration values
- Synchronous processing for long-running tasks

**Architecture Patterns:**
- Distributed monoliths
- Shared databases between services
- Synchronous communication for non-critical operations
- Missing error handling and retry logic
- Inadequate logging and monitoring

## Performance Considerations

### Optimization Preferences
**Backend Performance:**
- Connection pooling for databases
- Caching strategies (Redis, in-memory)
- Asynchronous processing for heavy operations
- Database indexing for query optimization
- Pagination for large data sets

**Frontend Performance:**
- Code splitting and lazy loading
- Image optimization and lazy loading
- Bundle size optimization
- CDN usage for static assets
- Service workers for caching

### Monitoring and Observability
**Preferred Tools:**
- **Logging**: Structured logging with Winston (Node.js) or loguru (Python)
- **Metrics**: Prometheus for metrics collection
- **Tracing**: Jaeger for distributed tracing
- **APM**: DataDog or New Relic for application performance monitoring
- **Error Tracking**: Sentry for error monitoring

## Development Environment

### Tooling Preferences
**Development Tools:**
- **IDE**: VS Code with relevant extensions
- **Version Control**: Git with GitHub
- **Package Management**: npm/yarn for Node.js, pip/poetry for Python
- **Documentation**: Markdown for documentation, OpenAPI for APIs
- **Communication**: Slack for team communication, Linear for issue tracking

### Local Development
**Setup Preferences:**
- Docker Compose for local development environments
- Environment variables for configuration
- Hot reloading for development
- Automated testing on file changes
- Pre-commit hooks for code quality

## Project Structure Preferences

### Node.js/TypeScript Projects
```
src/
├── controllers/     # API route handlers
├── services/        # Business logic
├── repositories/    # Data access layer
├── models/          # Data models and types
├── middleware/      # Express middleware
├── utils/           # Utility functions
├── config/          # Configuration files
└── tests/           # Test files
```

### React/Next.js Projects
```
src/
├── components/      # Reusable UI components
├── pages/           # Next.js pages (or app/ for App Router)
├── hooks/           # Custom React hooks
├── services/        # API calls and external services
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── styles/          # CSS/Tailwind styles
└── __tests__/       # Test files
```

## Continuous Learning

### Technology Evaluation
**Criteria for New Technologies:**
- Community support and adoption
- Long-term viability and maintenance
- Performance characteristics
- Learning curve and team expertise
- Integration with existing stack

**Regular Review:**
- Quarterly review of technology choices
- Annual evaluation of major framework updates
- Continuous monitoring of security vulnerabilities
- Performance benchmarking of critical components

---

**Note**: These preferences should guide technology selection and architectural decisions, but project-specific requirements may override these preferences when justified. Always document deviations and the reasoning behind them.
