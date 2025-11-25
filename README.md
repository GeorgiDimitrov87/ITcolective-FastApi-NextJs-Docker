## Next.js FastAPI Template

<a href="https://www.itcolective.com"></a>
<p align="center">
    <em>Next.js FastAPI Template: Python + Modern TypeScript stack with Zod validation.</em>
</p>


The Next.js FastAPI Template provides a solid foundation for scalable, high-performance web applications, following clean architecture and best practices. It simplifies development by integrating FastAPI, Pydantic, and Next.js with TypeScript and Zod, ensuring end-to-end type safety and schema validation between frontend and backend.

The FastAPI backend supports fully asynchronous operations, optimizing database queries, API routes, and test execution for better performance. Deployment is seamless, with both backend and frontend fully deployable to Vercel, enabling quick product releases with minimal configuration.

### Key features
✔ End-to-end type safety – Automatically generated typed clients from the OpenAPI schema ensure seamless API contracts between frontend and backend.

✔ Hot-reload updates – The client updates automatically when backend routes change, keeping FastAPI and Next.js in sync.

✔ Versatile foundation – Designed for MVPs and production-ready applications, with a pre-configured authentication system and API layer.

✔ Quick deployment – Deploys a full-stack application—including authentication flow and a dashboard—on Vercel in just a few steps.

✔ Production-ready authentication – Includes a pre-configured authentication system and dashboard interface, allowing you to immediately start development with user management features.

## Technology stack
This template features a carefully selected set of technologies to ensure efficiency, scalability, and ease of use:

- Zod + TypeScript – Type safety and schema validation across the stack.
- fastapi-users – Complete authentication system with:
    - Secure password hashing
    - JWT authentication
- Email-based password recovery
- shadcn/ui – Prebuilt React components with Tailwind CSS.
- OpenAPI-fetch – Fully typed client generation from the OpenAPI schema.
- UV – Simplified dependency management and packaging.
- Docker Compose – Consistent environments for development and production.
- Pre-commit hooks – Automated code linting, formatting, and validation before commits.
- Vercel Deployment – Serverless backend and scalable frontend, deployable with minimal configuration.
