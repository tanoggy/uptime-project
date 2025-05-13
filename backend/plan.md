1. Project Planning & Structure
Break down the requirements into modules/services (User, Monitor, Notification, Scheduler, Worker, etc.).
Decide on the tech stack for each service (your backend is already using Node.js/NestJS, Prisma, PostgreSQL).
2. Initial Setup
You already have Prisma and PostgreSQL running.
Next steps: Define your database schema in prisma/schema.prisma to support users, monitors, check results, and notifications.
3. Implementation Roadmap
Here’s a high-level breakdown of the implementation phases:
Phase 1: Core Backend API
User management (registration, login, profile)
Monitor management (CRUD for all monitor types)
Dashboard endpoints (current status, history)
Notification preferences
Phase 2: Monitoring Engine
Scheduler service (periodic task dispatch)
Worker service(s) for each monitor type (HTTP, SSL, Domain, TCP, ICMP, Keyword, Heartbeat)
Message queue integration (RabbitMQ or similar)
Phase 3: Notification System
Notification service (consume events, send emails)
Integration with email provider (SendGrid, etc.)
Phase 4: Frontend (if needed)
SPA dashboard for users
Phase 5: Time-Series Data (optional)
Integrate TimescaleDB or InfluxDB for efficient metrics storage
