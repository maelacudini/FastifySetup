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

    git clone https://github.com/maelacudini/FastifySetup.git
    cd FastifySetup

2. **Install dependencies:**

    npm install

3. **Create .env file and include the following variables**

    NODE_ENV=either development or production

    PROD_HOST=add.host.here
    
    MONGO_URI=your.mongo.uri
    
    JWT_SECRET=yoursecretjwt
    
    JWT_SIGNIN_SECRET=yoursecretjwtsignin

4. **Build the project:**

    npm run build

5. **Run the project:**

    npm run start


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

#### `src/lib/`

* **Purpose:** Contains larger, domain-specific, or core reusable modules.
* **Responsibility:** Encapsulating complex logic or integrations.
* **Subfolders:**
    * `i18next/`: i18next logic with locales.
    * `mongoDB/`: Contains database-related code with models.

#### `src/plugins/`

* **Purpose:** Contains custom plugins.
* **Naming Convention:** `[name].plugin.ts` (e.g., `jwt.plugin.ts`).
* **Responsibility:** Dealing with plugin logic.

#### `src/utils/`

* **Purpose:** Stores small, general-purpose helper functions and utilities, only related to server (node).
* **Subfolders:**
    * `constants/`: Keeps all constants in one place. Constants must be written in all caps, use snake case.
    * `functions/`: General-purpose helper functions.
    * `schemas/`: Routes schemas.
    * `types/`: Server side types, keep them separated from Client.

### `src/client`

* Client side code.

#### `src/client/style/`

* **Purpose:** Contains general style, implemented with Tailwind.
* **Responsibility:** 

#### `src/client/scripts/`

* **Purpose:** Stores javascript code related to client (browser).
* **Responsibility:** 

#### `src/client/utils/`

* **Purpose:** Stores small, general-purpose helper functions and utilities, only related to client (browser).
* **Subfolders:**
    * `constants/`: Keeps all constants in one place. Constants must be written in all caps, use snake case.
    * `functions/`: General-purpose helper functions.
    * `types/`: Client side types, keep them separated from Server.

### `public/`

* Static assets needed inside src and dist folder.

#### `public/locales/`

* **Purpose:** Contains json files with translations.
* **Responsibility:** 

#### `public/client/partials/`

* **Purpose:** Contains EJS fragments and layouts.
* **Subfolders:**
    * `atoms/`: Simplest partials.
    * `molecules/`: Union of two or more atoms.
    * `organisms/`: Union of two or more molecules.
    * `layouts/`: General layouts common to multiple pages.

#### `public/client/views/`

* **Purpose:** Contains EJS files, used with HTMX, that the server will return.
* **Responsibility:** Acts as the view layer for HTMX requests.

## Naming Conventions

* **Controllers:** `[resource].controller.ts`
* **Services:** `[resource].service.ts`
* **Routes:** `[resource].routes.ts`
* **Models:** `[resource].model.ts`
* **Schemas:** `[resource].schemas.ts`
* **Utilities:** descriptive names for function files.
* **Libraries:** descriptive names for library files.

