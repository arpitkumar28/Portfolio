import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';

export default function ElevraPage() {
  return <ProjectCaseStudy
    title="Elevra"
    subtitle="Student Operating System for Academic Planning & Career Opportunities"
    overview="Elevra is a Student Operating System designed to bring academic planning and career opportunities into a unified platform. It organizes student workflows around exams, academic information, internships, jobs, scholarships, hackathons, and fellowships."
    problem="Students often have academic information and career opportunities scattered across different platforms."
    solution="A unified student-oriented system covering academic planning, exams, syllabus information, opportunity discovery, internships, jobs, scholarships, hackathons, and fellowships."
    features={['Exam planning', 'Exam dates and syllabus information', 'Exam patterns and FAQs', 'Internships, jobs, and scholarships', 'Hackathons and fellowships', 'Centralized student dashboard', 'JWT authentication']}
    stack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'FastAPI', 'Python', 'SQLAlchemy', 'Pydantic', 'JWT', 'PostgreSQL', 'Alembic', 'Redis', 'Docker Compose', 'pnpm', 'Turborepo', 'pytest', 'Vitest', 'GitHub Actions']}
    architecture={['Web: Next.js / React / TypeScript', 'Mobile: Flutter / Dart', 'Backend: FastAPI / Python', 'Data: PostgreSQL / Alembic', 'Infrastructure: Redis / Docker Compose', 'Monorepo: pnpm / Turborepo', 'Testing: pytest / Vitest', 'CI/CD: GitHub Actions']}
    contribution="Full-stack development, frontend development, backend API development, mobile development, database integration, authentication, application architecture, testing, and deployment/CI work described in the supplied project brief."
  />;
}
