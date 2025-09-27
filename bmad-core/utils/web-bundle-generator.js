#!/usr/bin/env node

/**
 * BMAD Web Bundle Generator
 * 
 * Generates web bundles for cost-effective planning in web interfaces
 * Combines agents, templates, workflows, and data into single text files
 * for upload to web-based AI platforms (Claude, Gemini, ChatGPT)
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class WebBundleGenerator {
    constructor() {
        this.projectRoot = process.cwd();
        this.bmadCore = path.join(this.projectRoot, 'bmad-core');
        this.agentsDir = path.join(this.projectRoot);
        this.outputDir = path.join(this.projectRoot, 'dist', 'web-bundles');
    }

    /**
     * Generate all predefined web bundles
     */
    async generateAllBundles() {
        console.log('🚀 Generating BMAD web bundles...');
        
        // Ensure output directory exists
        this.ensureDirectoryExists(this.outputDir);

        // Generate planning bundle
        await this.generatePlanningBundle();
        
        // Generate development bundle
        await this.generateDevelopmentBundle();
        
        // Generate full-stack bundle
        await this.generateFullStackBundle();

        console.log('✅ All web bundles generated successfully!');
        console.log(`📁 Bundles available in: ${this.outputDir}`);
    }

    /**
     * Generate planning bundle for requirements and architecture phase
     */
    async generatePlanningBundle() {
        console.log('📋 Generating planning bundle...');
        
        const bundle = {
            name: 'BMAD Planning Bundle',
            description: 'Cost-effective planning with requirements analysis and architecture design',
            agents: [
                'requirements-analysis/requirements-analyst.md',
                'requirements-analysis/business-process-analyst.md',
                'research-analysis/web-research-agent.md',
                'design-architecture/system-architect.md',
                'design-architecture/api-designer.md',
                'design-architecture/data-architect.md',
                'project-management/project-orchestrator.md',
                'project-management/product-owner.md'
            ],
            templates: [
                'bmad-core/templates/prd-template.md'
            ],
            workflows: [
                'bmad-core/workflows/greenfield-development.yaml'
            ],
            data: [
                'bmad-core/data/technical-preferences.md'
            ],
            tasks: [
                'bmad-core/tasks/create-story.md'
            ]
        };

        const bundleContent = await this.createBundle(bundle);
        const outputPath = path.join(this.outputDir, 'bmad-planning-bundle.txt');
        fs.writeFileSync(outputPath, bundleContent);
        console.log(`✅ Planning bundle: ${outputPath}`);
    }

    /**
     * Generate development bundle for story-driven development
     */
    async generateDevelopmentBundle() {
        console.log('⚡ Generating development bundle...');
        
        const bundle = {
            name: 'BMAD Development Bundle',
            description: 'Story-driven development with quality gates and specialized agents',
            agents: [
                'project-management/scrum-master.md',
                'project-management/product-owner.md',
                'quality-assurance/qa-coordinator.md',
                'quality-assurance/code-reviewer.md',
                'quality-assurance/test-suite-generator.md',
                'development/nodejs-developer.md',
                'development/react-developer.md',
                'development/python-developer.md',
                'development/rust-developer.md'
            ],
            templates: [
                'bmad-core/templates/story-template.md',
                'bmad-core/templates/quality-gate-template.yaml'
            ],
            workflows: [
                'bmad-core/workflows/greenfield-development.yaml'
            ],
            data: [
                'bmad-core/data/technical-preferences.md'
            ],
            tasks: [
                'bmad-core/tasks/create-story.md',
                'bmad-core/tasks/quality-gate.md'
            ]
        };

        const bundleContent = await this.createBundle(bundle);
        const outputPath = path.join(this.outputDir, 'bmad-development-bundle.txt');
        fs.writeFileSync(outputPath, bundleContent);
        console.log(`✅ Development bundle: ${outputPath}`);
    }

    /**
     * Generate full-stack bundle with all capabilities
     */
    async generateFullStackBundle() {
        console.log('🌟 Generating full-stack bundle...');
        
        const bundle = {
            name: 'BMAD Full-Stack Bundle',
            description: 'Complete BMAD methodology with all specialized agents',
            agents: [
                // BMAD workflow agents
                'project-management/scrum-master.md',
                'project-management/product-owner.md',
                
                // Requirements and analysis
                'requirements-analysis/requirements-analyst.md',
                'requirements-analysis/business-process-analyst.md',
                'research-analysis/web-research-agent.md',
                
                // Design and architecture
                'design-architecture/system-architect.md',
                'design-architecture/api-designer.md',
                'design-architecture/data-architect.md',
                
                // Development (key agents)
                'development/nodejs-developer.md',
                'development/react-developer.md',
                'development/python-developer.md',
                'development/rust-developer.md',
                'development/nextjs-developer.md',
                
                // Quality assurance
                'quality-assurance/qa-coordinator.md',
                'quality-assurance/code-reviewer.md',
                'quality-assurance/test-suite-generator.md',
                
                // Project management
                'project-management/project-orchestrator.md',
                
                // Security
                'security/security-architect.md',
                'security/security-analyzer.md'
            ],
            templates: [
                'bmad-core/templates/prd-template.md',
                'bmad-core/templates/story-template.md',
                'bmad-core/templates/quality-gate-template.yaml'
            ],
            workflows: [
                'bmad-core/workflows/greenfield-development.yaml'
            ],
            data: [
                'bmad-core/data/technical-preferences.md'
            ],
            tasks: [
                'bmad-core/tasks/create-story.md',
                'bmad-core/tasks/quality-gate.md'
            ]
        };

        const bundleContent = await this.createBundle(bundle);
        const outputPath = path.join(this.outputDir, 'bmad-fullstack-bundle.txt');
        fs.writeFileSync(outputPath, bundleContent);
        console.log(`✅ Full-stack bundle: ${outputPath}`);
    }

    /**
     * Create bundle content from bundle definition
     */
    async createBundle(bundle) {
        let content = '';
        
        // Bundle header
        content += `# ${bundle.name}\n\n`;
        content += `${bundle.description}\n\n`;
        content += `Generated: ${new Date().toISOString()}\n\n`;
        content += `## Instructions for Web AI Platforms\n\n`;
        content += `Upload this file to your web AI platform (Claude, Gemini, ChatGPT) and use the following instructions:\n\n`;
        content += `"Your critical operating instructions are attached. You are now a BMAD-enabled AI assistant with access to specialized agents and workflows. Do not break character as directed. Type 'help' to see available commands or mention an agent name to engage it."\n\n`;
        content += `---\n\n`;

        // Add agents
        if (bundle.agents && bundle.agents.length > 0) {
            content += `## AGENTS\n\n`;
            for (const agentPath of bundle.agents) {
                content += await this.addFileToBundle(agentPath, 'AGENT');
            }
        }

        // Add templates
        if (bundle.templates && bundle.templates.length > 0) {
            content += `## TEMPLATES\n\n`;
            for (const templatePath of bundle.templates) {
                content += await this.addFileToBundle(templatePath, 'TEMPLATE');
            }
        }

        // Add workflows
        if (bundle.workflows && bundle.workflows.length > 0) {
            content += `## WORKFLOWS\n\n`;
            for (const workflowPath of bundle.workflows) {
                content += await this.addFileToBundle(workflowPath, 'WORKFLOW');
            }
        }

        // Add tasks
        if (bundle.tasks && bundle.tasks.length > 0) {
            content += `## TASKS\n\n`;
            for (const taskPath of bundle.tasks) {
                content += await this.addFileToBundle(taskPath, 'TASK');
            }
        }

        // Add data
        if (bundle.data && bundle.data.length > 0) {
            content += `## DATA\n\n`;
            for (const dataPath of bundle.data) {
                content += await this.addFileToBundle(dataPath, 'DATA');
            }
        }

        return content;
    }

    /**
     * Add a file to the bundle with proper formatting
     */
    async addFileToBundle(filePath, type) {
        const fullPath = path.join(this.projectRoot, filePath);
        
        if (!fs.existsSync(fullPath)) {
            console.warn(`⚠️  File not found: ${filePath}`);
            return `<!-- FILE NOT FOUND: ${filePath} -->\n\n`;
        }

        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const fileName = path.basename(filePath);
        
        let content = '';
        content += `### ${type}: ${fileName}\n`;
        content += `**Path**: ${filePath}\n\n`;
        content += '```\n';
        content += fileContent;
        content += '\n```\n\n';
        content += '---\n\n';
        
        return content;
    }

    /**
     * Ensure directory exists
     */
    ensureDirectoryExists(dirPath) {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }
}

// CLI execution
if (require.main === module) {
    const generator = new WebBundleGenerator();
    generator.generateAllBundles().catch(console.error);
}

module.exports = WebBundleGenerator;
