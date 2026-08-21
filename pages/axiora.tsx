import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';

export default function AxioraPage() {
  return <ProjectCaseStudy
    title="Axiora"
    subtitle="Knowledge & Innovation Discovery Platform"
    overview="Axiora is a knowledge and innovation discovery platform designed to automatically collect, analyze, organize, and publish useful technical content from the public internet."
    problem="Technical knowledge is distributed across GitHub projects, research papers, datasets, open-source tools, tutorials, documentation, learning resources, and technical research."
    solution="Axiora uses a Discover → Verify → Analyze → Organize → Publish → Search workflow. Third-party content passes through acquisition, normalization, validation, quality scoring, compliance checks, and admin review before publication."
    features={['GitHub project discovery', 'Research paper indexing', 'Dataset and open-source tool discovery', 'Duplicate detection', 'Asynchronous acquisition queue', 'AI enrichment and quality scoring', 'License and compliance checks', 'Admin review before publication', 'Searchable projects and research sections']}
    stack={['Next.js', 'React', 'TypeScript', 'Tailwind/UI components', 'Next.js API routes', 'Supabase', 'PostgreSQL', 'BullMQ', 'Redis', 'Vercel']}
    architecture={['Public sources → Discovery', 'Discovery → Duplicate detection', 'Acquisition queue → BullMQ / Redis workers', 'Fetching → Normalization → Validation', 'AI analysis → Quality scoring', 'Compliance check → Admin review', 'Publication → Axiora search']}
    contribution="Worked across the full-stack platform, acquisition and orchestration services, database integration, asynchronous processing, content normalization, validation, duplicate handling, AI enrichment, quality workflows, compliance checks, and publication flow."
    note="The platform distinguishes scheduled pipeline operations from individual acquisition jobs and supports queues for fetch, analyze, enrich, quality checks, moderation, publication, deduplication, and compliance."
  />;
}
