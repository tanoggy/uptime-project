# Project Requirements: Uptime Monitoring Service

## 1. Introduction & Goal

The goal of this project is to create a reliable uptime monitoring service, similar in core functionality to UptimeRobot. The service will allow users to monitor various aspects of their online services and receive notifications upon status changes or potential issues.

## 2. Core Monitoring Features

The service must support the following monitoring types:

1.  **Website Monitoring (HTTP/S):**
    *   Periodically check the availability of specified URLs via HTTP/S requests.
    *   Record status codes (2xx, 3xx, 4xx, 5xx).
    *   Measure and record response times.
    *   Support custom HTTP headers and methods (GET, POST, HEAD, etc.).
    *   Handle redirects.
2.  **SSL Certificate Monitoring:**
    *   Check the validity of SSL certificates for specified domains/hosts.
    *   Verify the certificate chain.
    *   Track expiration dates and notify users in advance (e.g., 30, 14, 7 days before expiry).
3.  **Domain Expiration Monitoring:**
    *   Check the expiration date of registered domain names using WHOIS lookups.
    *   Notify users in advance of domain expiry (e.g., 60, 30, 7 days before expiry).
4.  **Cron Job Monitoring (Heartbeat):**
    *   Provide unique URLs (ping endpoints) for users to integrate into their scheduled tasks.
    *   Expect periodic requests (pings) to these URLs within a configured time window.
    *   Mark the monitor as "down" if a ping is not received within the expected interval.
5.  **Port Monitoring (TCP):**
    *   Check the status (open/closed) of specific TCP ports on given hosts or IP addresses.
    *   Support common ports (e.g., 80, 443, 21, 22, 25, 110, 143, 3306, 5432) and custom ports.
    *   Measure connection time (optional).
6.  **Ping Monitoring (ICMP):**
    *   Check the reachability of a host or IP address using ICMP echo requests (pings).
    *   Measure round-trip time (latency).
    *   Record packet loss percentage.
7.  **Keyword Monitoring:**
    *   Perform an HTTP/S request to a specified URL.
    *   Check for the presence or absence of specific keywords/text within the response body (HTML/JSON/Text).

## 3. Functional Requirements

*   **User Management:**
    *   User registration and secure login (authentication).
    *   User profile management.
*   **Monitor Management:**
    *   CRUD (Create, Read, Update, Delete) operations for all supported monitor types.
    *   Configuration options per monitor (URL, host, port, keywords, check interval, notification settings, etc.).
    *   Ability to pause/resume monitoring for specific services.
*   **Dashboard & Reporting:**
    *   Centralized dashboard showing the current status of all monitors for a user.
    *   Historical uptime/downtime data display (e.g., charts, logs).
    *   Response time graphs for relevant monitors (HTTP/S, Ping).
    *   Event log showing status changes and detected issues.
*   **Notification System:**
    *   Configure notification contacts/channels (initially Email, potentially SMS, Slack, Webhooks later).
    *   Define notification rules (e.g., notify on down, notify on recovery, alert after X consecutive failures).
    *   Send timely alerts based on monitor status changes and configured rules.
*   **Check Scheduling:**
    *   Allow users to configure the frequency of checks for each monitor (e.g., 1 minute, 5 minutes, 15 minutes).

## 4. Non-Functional Requirements

*   **Reliability:** The monitoring service itself must be highly available. Checks should be accurate. Minimize false positives (e.g., by implementing multi-location checks or retries).
*   **Scalability:** The architecture should be designed to handle a growing number of users, monitors, and checks per second.
*   **Performance:** Web interface and API should be responsive. Monitoring checks should execute promptly.
*   **Security:** Protect user data and credentials. Secure communication channels. Protect against common web vulnerabilities.
*   **Maintainability:** Code should be well-structured, documented, and testable.

## 5. High-Level Architecture Proposal

A distributed, microservices-oriented architecture is recommended for scalability and resilience.

*   **Frontend (Web UI):**
    *   Single Page Application (SPA) built with a modern framework (e.g., React, Vue, Angular).
    *   Communicates with the Backend API.
    *   Handles user interaction, displays dashboards, and manages monitor configurations.
*   **Backend API (Gateway):**
    *   RESTful API (e.g., Node.js/Express, Python/Flask/Django, Go/Gin).
    *   Handles user authentication and authorization.
    *   Manages user and monitor configurations (CRUD operations).
    *   Provides data to the Frontend.
    *   Interacts with the Scheduler and potentially directly with the Database/Cache.
*   **Database(s):**
    *   **Relational Database (e.g., PostgreSQL, MySQL):** Stores user information, monitor configurations, notification settings.
    *   **Time-Series Database (e.g., InfluxDB, TimescaleDB - Optional but Recommended):** Stores historical check results (status, response time, latency) for efficient querying and aggregation. Alternatively, use the relational DB with proper indexing.
*   **Message Queue (e.g., RabbitMQ, Redis Streams, Kafka):**
    *   Decouples components.
    *   Used by the Scheduler to dispatch check tasks to Workers.
    *   Used by Workers to report results back for processing.
*   **Scheduler:**
    *   A dedicated service or library (e.g., Celery Beat, node-cron, Go cron library).
    *   Reads monitor configurations (especially check intervals).
    *   Periodically publishes check tasks onto the Message Queue.
*   **Worker Pool (Distributed):**
    *   Multiple instances of worker services, potentially specialized by task type.
    *   Consume check tasks from the Message Queue.
    *   Execute the actual monitoring checks (HTTP, SSL, Domain, TCP, ICMP, Keyword, Heartbeat Listener).
    *   Publish results (status, metrics, errors) back to the Message Queue or directly update the database.
    *   Can be scaled independently based on load.
*   **Notification Service:**
    *   Consumes events/results indicating status changes or required notifications (e.g., from the Message Queue or triggered by the API/Workers).
    *   Formats and sends notifications via configured channels (Email, SMS, etc.) using third-party services (e.g., SendGrid, Twilio).
*   **Heartbeat Listener (Part of Workers or Dedicated):**
    *   Listens for incoming HTTP requests on the unique URLs generated for Cron Job monitoring.
    *   Updates the status of corresponding monitors.

## 6. System Architecture Diagram (Textual Representation)

This section describes the flow of operations and interactions between the major components.

```text
+-----------------+      +----------------------+      +---------------------+
|      User       |<---->|    Frontend (SPA)    |<---->|   Backend API       |
+-----------------+      +----------------------+      +----------+----------+
                                                                  |
                                                                  | (User/Monitor CRUD,
                                                                  |  Auth, Configs)
                                                                  v
                                                         +----------+----------+
                                                         |    Database(s)      |
                                                         | (PostgreSQL/MySQL,  |
                                                         |  InfluxDB/Timescale)|
                                                         +----------+----------+
                                                                  ^
                                                                  | (Store Check Results)
                                                                  |
+-----------------+      +----------------------+      +----------+----------+
|    Scheduler    |----->|    Message Queue     |<---->|   Worker Pool(s)    |
| (e.g., Celery   |      | (RabbitMQ/Kafka/     |      | (HTTP, SSL, TCP,    |
|  Beat, cron)    |      |  Redis Streams)      |      |  ICMP, Keyword,     |
+-----------------+      +----------+----------+      |  Heartbeat Listener)|
      ^                            |                   +----------+----------+
      | (Read Monitor Configs,     | (Check Results,              ^
      |  Update Schedules)         |  Status Change Events)       | (Incoming Pings for
      |                            v                             |  Heartbeat Monitors)
      +----------------------------+---------------------+      +---------------------+
                                   |                     |      | External Cron Jobs  |
                                   v                     |      +---------------------+
                          +----------------------+       |
                          | Notification Service |<------+ (Consumes Status Changes)
                          +----------------------+
                                   |
                                   | (Sends Alerts via Email, SMS, etc.)
                                   v
                          +----------------------+
                          | External Gateways    |
                          | (SendGrid, Twilio)   |
                          +----------------------+
```

### Key Interaction Flows:

1.  **User Interaction & Monitor Configuration:**
    *   `User` interacts with `Frontend (SPA)`.
    *   `Frontend` sends requests (login, register, create/update/delete monitor, view dashboard) to `Backend API`.
    *   `Backend API` authenticates/authorizes user, performs CRUD operations on monitor configurations in `Database(s)`.
    *   `Backend API` might inform `Scheduler` of new/updated monitor schedules (e.g., by updating a schedule flag in the `Database(s)` that the `Scheduler` polls, or by sending a message via the `Message Queue`).

2.  **Scheduled Check Execution:**
    *   `Scheduler` periodically reads monitor configurations (check interval, type, target) from `Database(s)`.
    *   `Scheduler` dispatches "check tasks" (e.g., "check URL X", "ping IP Y", "verify SSL for domain Z") to the `Message Queue`. Each task message contains necessary details for the check.
    *   One or more `Worker` instances from the `Worker Pool` consume tasks from the `Message Queue`. Workers can be specialized (e.g., HTTP workers, Ping workers) or generic.
    *   The `Worker` performs the actual check:
        *   **HTTP/S Monitoring:** Makes HTTP/S request, checks status code, measures response time.
        *   **SSL Monitoring:** Connects to host, inspects SSL certificate, checks validity and expiration.
        *   **Domain Expiration:** Performs WHOIS lookup for domain expiration.
        *   **Port Monitoring:** Attempts TCP connection to host/port.
        *   **Ping Monitoring:** Sends ICMP echo requests.
        *   **Keyword Monitoring:** Fetches content and searches for keywords.
        *   **Heartbeat Monitoring**: The `Heartbeat Listener` (which could be a dedicated endpoint on the `Backend API` or a separate service, accessible by `External Cron Jobs`) receives pings. If a ping is received, it updates the last seen timestamp for that monitor in the `Database(s)`. The `Scheduler` or a dedicated `Worker` would then check for heartbeats that haven't arrived within their expected window.
    *   The `Worker` publishes the check result (status: UP/DOWN, metrics: response time, error details if any) back to the `Message Queue` or directly writes to `Database(s)` (e.g., `Time-Series Database` for metrics, update current status in `Relational Database`).

3.  **Result Processing & Notification:**
    *   A dedicated service or the `Backend API` itself might consume check results from the `Message Queue`.
    *   This processing step involves:
        *   Storing historical data (status, metrics) in the `Time-Series Database`.
        *   Updating the current status of the monitor in the `Relational Database`.
        *   Evaluating if a status change qualifies for a notification based on user-defined rules (e.g., down for X consecutive checks, SSL expiring in Y days).
    *   If a notification is required, an event is published to a specific topic/queue in the `Message Queue` destined for the `Notification Service`.
    *   `Notification Service` consumes these notification events.
    *   `Notification Service` retrieves user's notification preferences and contact details from `Database(s)`.
    *   `Notification Service` formats and sends alerts to the user via configured channels (e.g., Email through `External Gateways` like SendGrid, SMS via Twilio, Slack messages, etc.).

4.  **Data Display & Reporting:**
    *   `User` accesses the `Frontend (SPA)` to view dashboards or reports.
    *   `Frontend` requests current monitor statuses, historical uptime data, response time charts, or event logs from the `Backend API`.
    *   `Backend API` queries `Database(s)`:
        *   `Relational Database` for current monitor configurations, user details, and aggregated status.
        *   `Time-Series Database` for detailed historical metrics, response times, and event data.
    *   `Backend API` aggregates and formats the data, then returns it to the `Frontend` for rendering.

This detailed flow should provide a comprehensive view of the system's operations. 