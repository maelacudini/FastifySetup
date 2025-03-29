## Project introduction

Fastify setup with TypeScript, EJS, Alpine, HTMX, Tailwind, MongoDB, Webpack, Eslint and much more.


## Requirements

* **Node.js:** (>= 14.x)
* **npm:** (>= 6.x)
* **TypeScript:** (>= 4.x)
* **Fastify:** (>= 3.x)
* **EJS:** (>= 3.x)
* **Tailwind CSS:** (>= 2.x)
* **Webpack:** (>= 5.x)


## Steps to Run the Project

1. **Clone the repository:**

    git clone https://github.com/maelacudini/FastifySetup.git \
    cd FastifySetup

2. **Install dependencies:**

    npm install

3. **Build the project:**

    npm run build

4. **Run the project:**

    npm run dev


## Folder Breakdown

### `src/`

* The main source code directory.

#### `src/index.ts`

* **Purpose:** The main entry point for the Fastify application.
* **Responsibility:** Initializes and starts the Fastify server.

#### `src/controllers/`

* **Purpose:** Handles incoming HTTP requests, extracts parameters, validates input, and delegates business logic to services. Formats and sends responses.
* **Naming Convention:** `[resource].controllers.ts` (e.g., `user.controllers.ts`, `product.controllers.ts`).
* **Responsibility:** Thin layer focused on HTTP request/response handling.

#### `src/services/`

* **Purpose:** Encapsulates the core business logic of the application. Handles data processing, database interactions, and other domain-specific tasks.
* **Naming Convention:** `[resource].services.ts` (e.g., `user.services.ts`, `product.services.ts`).
* **Responsibility:** Implementing application functionality, promoting code reusability and testability.

#### `src/routes/`

* **Purpose:** Defines Fastify routes and connects them to controllers.
* **Naming Convention:** `[resource].routes.ts` (e.g., `user.routes.ts`, `product.routes.ts`).
* **Responsibility:** Routing requests to the appropriate controllers.

#### `src/db/`

* **Purpose:** Contains database-related code.
* **Subfolders:**
    * `models/`: Defines database models.

#### `src/lib/`

* **Purpose:** Contains larger, domain-specific, or core reusable modules.
* **Responsibility:** Encapsulating complex logic or integrations.

#### `src/utils/`

* **Purpose:** Stores small, general-purpose helper functions and utilities, only related to server (node).
* **Subfolders:**
    * `constants/`: Keeps all constants in one place. Constants must be written in all caps, use snake case.
    * `functions/`: General-purpose helper functions.
    * `schemas/`: Routes schemas.

### `src/client`

* Client side code.

#### `src/client/components/`

* **Purpose:** Contains EJS fragments and layouts.
* **Subfolders:**
    * `atoms/`: 
    * `molecules/`: 
    * `organisms/`: 
    * `layouts/`: 

#### `src/client/style/`

* **Purpose:** Contains general style, implemented with Tailwind.
* **Responsibility:** I mean it seems pretty obvious.

#### `src/client/views/`

* **Purpose:** Contains EJS files, used with HTMX, that the server will return.
* **Responsibility:** Acts as the view layer for HTMX requests.

#### `src/client/public/`

* **Purpose:** Stores static assets like CSS, JavaScript, and images.
* **Responsibility:** Serving static files.

#### `src/client/scripts/`

* **Purpose:** Stores small, general-purpose helper functions and utilities, only related to client (browser).
* **Responsibility:** Providing reusable utility functions.


## Naming Conventions

* **Controllers:** `[resource].controller.ts`
* **Services:** `[resource].service.ts`
* **Routes:** `[resource].routes.ts`
* **Models:** `[resource].model.ts`
* **Schemas:** `[resource].schemas.ts`
* **Utilities:** descriptive names for function files.
* **Libraries:** descriptive names for library files.

