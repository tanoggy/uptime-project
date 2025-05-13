# Technology Stack: Uptime Monitoring Service

This document outlines the specific technologies chosen for the Uptime Monitoring Service project.

## 1. Frontend

*   **Framework/Library:** React
*   **Build Tool/Development Environment:** Vite
*   **UI Component Library:** shadcn/ui
*   **Language:** TypeScript (recommended with React and Vite)
*   **State Management:** Zustand, Redux Toolkit, or React Context (to be decided based on complexity)
*   **Routing:** React Router
*   **HTTP Client:** Axios or Fetch API

## 2. Backend

*   **Framework:** NestJS (Node.js)
*   **Language:** TypeScript
*   **ORM/Database Toolkit:** Prisma
*   **API Specification:** OpenAPI (Swagger) for documentation and potentially client generation.

## 3. Databases

*   **Relational Database:** PostgreSQL
    *   **Purpose:** Storing user information, monitor configurations, notification settings, current monitor statuses.
*   **Time-Series Database:** TimescaleDB (extension for PostgreSQL)
    *   **Purpose:** Storing historical check results (status, response times, latency) for efficient querying, aggregation, and trend analysis.

## 4. Message Queue

*   **Broker:** RabbitMQ
    *   **Purpose:** Decoupling services, dispatching check tasks from Scheduler to Workers, and routing check results/events for processing and notifications.
    *   **Client Library:** `amqplib` (for Node.js/NestJS)

## 5. Scheduler & Workflow Orchestration

*   **System:** Temporal.io
    *   **Purpose:**
        *   Scheduling periodic monitor checks (as an alternative to simpler cron-based schedulers, offering more robustness and visibility).
        *   Orchestrating workflows for complex tasks (e.g., a check involving multiple retries, conditional logic based on results, or multi-step notification processes).
    *   **Client Library:** Temporal TypeScript SDK

## 6. Deployment & Infrastructure (Considerations)

*   **Containerization:** Docker
*   **Orchestration (Optional, for scaling):** Kubernetes
*   **CI/CD:** GitHub Actions, GitLab CI, or Jenkins
*   **Logging:** ELK Stack (Elasticsearch, Logstash, Kibana) or Grafana Loki
*   **Monitoring (for the service itself):** Prometheus, Grafana

## 7. Other Tools & Libraries

*   **Validation:** `class-validator` and `class-transformer` (commonly used with NestJS)
*   **Authentication:** Passport.js (for NestJS), JWT (JSON Web Tokens)
*   **Testing:**
    *   **Backend:** Jest (for unit and integration tests with NestJS)
    *   **Frontend:** Jest, React Testing Library, Vitest
    *   **E2E:** Playwright or Cypress

This stack provides a modern, scalable, and robust foundation for building the Uptime Monitoring Service. 