/*
 * Single source of truth for the CV.
 * The web page and the downloadable PDFs are both generated from this file,
 * so updating a role or a skill here updates everything.
 *
 * Dates use "YYYY-MM"; `end: null` means "present".
 */

const basics = {
    name: 'Fernando Nahuel Tuquina',
    shortName: 'Fernando Tuquina',
    email: 'fernandotuquina@gmail.com',
    phone: '+54 381 356 9471',
    linkedin: 'https://www.linkedin.com/in/fernando-nahuel-tuquina-0ba2a1245/',
    github: 'https://github.com/Tuquina',
    photo: 'assets/img/profile.jpg',
    signature: 'assets/img/signature.png',
};

export const content = {
    en: {
        locale: 'en',
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        meta: {
            title: 'Fernando Tuquina — Senior Software Engineer',
            description: 'Resume of Fernando Nahuel Tuquina, Senior Software Engineer (backend with Java and .NET) at ITTI for ueno bank. Former Backend Tech Lead at Coto Digital.',
        },
        ui: {
            views: { cv: 'Resume', achievements: 'Achievements', coverLetter: 'Cover letter' },
            viewsShort: { cv: 'Resume', achievements: 'Achievements', coverLetter: 'Letter' },
            download: 'Download',
            downloads: {
                cv: 'Resume (PDF)',
                achievements: 'Achievements (PDF)',
                coverLetter: 'Cover letter (PDF)',
            },
            preparing: 'Preparing…',
            downloadError: 'The PDF could not be generated. Please try again.',
            toggleTheme: 'Toggle dark mode',
            switchLanguage: 'Ver en español',
            menu: 'Download options',
            present: 'Present',
            page: 'Page',
            of: 'of',
            sections: {
                summary: 'Profile',
                experience: 'Experience',
                education: 'Education',
                skills: 'Skills',
                certifications: 'Certifications',
                languages: 'Languages',
                competencies: 'Soft skills',
                interests: 'Interests',
                contact: 'Contact',
            },
            lastUpdated: 'Last updated',
        },
        basics: {
            ...basics,
            headline: 'Senior Software Engineer · Backend (Java & .NET)',
            location: 'Tucumán, Argentina',
        },
        summary:
            'Senior Software Engineer with 4+ years of experience building backend systems with Java and .NET for banking and retail. ' +
            'At ITTI, working for ueno bank, I rebuilt the bank’s mass debt collector, which now processes 5.7M+ debts a month across overdrafts, credit cards and loans. ' +
            'I work with a hybrid approach that combines traditional programming with agentic development guided by Spec-Driven Development (SDD). ' +
            'Previously Backend Tech Lead at Coto Digital, where I led the backend team and designed Kafka- and Redis-based solutions. ' +
            'I care about clean architecture, performance and code that the next person can easily understand.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'ITTI',
                context: 'Client: ueno bank · Lending tribe · Collections team',
                start: '2025-08',
                end: null,
                highlights: [
                    'Rebuilt the bank’s mass debt collector from scratch, replacing a legacy process that did not support overdrafts. It now processes 5.7M+ delinquent debts a month (~170K a day) across overdrafts, credit cards and loans.',
                    'Drove ~250K successful collections a month, recovering PYG 12B+ and USD 78K+, and designed association algorithms that add accounts and salaries to each collection attempt (244K associations a month).',
                    'Built back-office tools for the collections operation (customer exclusions, refunds and reversals) end to end: React micro-frontend, Kong API Gateway routes, BFF and backend microservices.',
                    'Automated loan restructuring into a 100% digital, self-service process.',
                    'Split key collections repositories from monoliths into modular monoliths organized by bounded context, and created centralized debt-inquiry endpoints and new endpoints for the redesigned app home (loans and available credit per user).',
                    'Co-wrote PRDs and RFCs with the Engineering Manager and Product Manager to work with Spec-Driven Development (SDD), using agentic tools such as Cursor and GitHub Copilot to accelerate delivery.',
                ],
                tags: ['Java', 'Spring', 'AWS (SQS, S3, DocumentDB)', 'MongoDB', 'Redis', 'Kong', 'React', 'New Relic', 'SDD'],
            },
            {
                role: 'Backend Tech Lead',
                company: 'Coto Digital',
                start: '2024-05',
                end: '2025-07',
                highlights: [
                    'Led the backend team responsible for the microservices behind Coto’s digital platform: code reviews, mentoring and technical guidelines.',
                    'Designed a Kafka-based messaging architecture for reliable communication between microservices.',
                    'Implemented a centralized Redis cache strategy and shared libraries to standardize its use across services.',
                    'Built a reusable .NET 8 microservice template and introduced end-to-end request tracing with Serilog and correlation IDs.',
                ],
                tags: ['.NET 8', 'C#', 'Kafka', 'Redis', 'Docker', 'Microservices'],
            },
            {
                role: '.NET Programmer Analyst',
                company: 'Coto',
                start: '2022-07',
                end: '2024-05',
                highlights: [
                    'Designed and developed web applications and Docker-based .NET microservices integrated with Oracle and SQL Server.',
                    'Redesigned the store operations platform used by 2,000+ concurrent users in 40+ stores (picking, checkout, billing and reporting).',
                    'Integrated automatic billing that issued 180,000+ invoices and vouchers, removing manual work and saving 500,000+ printed pages.',
                    'Optimized complex Oracle and SQL Server queries and PL/SQL procedures for accounting and financial reporting.',
                ],
                tags: ['.NET', 'C#', 'Oracle', 'SQL Server', 'PL/SQL', 'Docker'],
            },
            {
                role: 'Teaching Assistant',
                company: 'FACET — Universidad Nacional de Tucumán',
                period: '2018 – 2019 · 2021 – 2023',
                highlights: [
                    'Computer Science, Programming I and Programming II: practical classes, office hours and final project tutoring.',
                ],
            },
            {
                role: 'Substitute Teacher',
                company: 'Instituto Técnico Salesiano Lorenzo Massa',
                period: '2021',
                highlights: ['Workshop teacher for Computer Science I and II, Computer-Aided Design and Industrial Electronics.'],
            },
            {
                role: 'Electronic Instrumentation Intern',
                company: 'San Miguel (citrus industry)',
                period: '2015',
                highlights: ['PLC programming and setup of digital and analog sensors in the electronic maintenance area.'],
            },
        ],
        education: [
            {
                degree: 'Computer Engineering (in progress)',
                school: 'Universidad Nacional de Tucumán — Faculty of Exact Sciences and Technology',
                period: '2017 – Present',
            },
            {
                degree: 'Electronics Technician',
                school: 'Instituto Técnico Salesiano Lorenzo Massa',
                period: '2009 – 2015',
            },
        ],
        skills: [
            { group: 'Languages & frameworks', items: ['Java', 'Spring', 'C#', '.NET / .NET 8', 'JavaScript', 'React (micro-frontends)'] },
            { group: 'Architecture', items: ['Microservices', 'Modular monoliths', 'Bounded contexts (DDD)', 'Clean Architecture', 'REST APIs', 'BFF', 'Kong API Gateway'] },
            { group: 'Cloud & messaging', items: ['AWS (SQS, S3, DocumentDB)', 'Kafka', 'Redis (caching, distributed locks)'] },
            { group: 'Databases', items: ['MongoDB', 'Oracle', 'SQL Server', 'MySQL', 'PL/SQL'] },
            { group: 'DevOps & observability', items: ['Docker', 'GitHub Actions', 'Nullplatform', 'New Relic (NRQL)', 'Serilog', 'Git', 'Linux'] },
            { group: 'AI-assisted development', items: ['Spec-Driven Development (SDD)', 'PRDs and RFCs', 'Agentic workflows', 'Cursor', 'GitHub Copilot', 'MCP'] },
            { group: 'Practices & tools', items: ['Unit testing', 'Code review', 'Agile / Scrum', 'Jira', 'Technical mentoring'] },
        ],
        certifications: [
            { name: 'Generative AI Fundamentals on AWS', issuer: 'Amazon Web Services', year: '2026' },
            { name: 'High-Performance Data Engineering with CASE Tools', year: '2022' },
            { name: 'React: Hooks, Context, Redux and MERN', issuer: 'Udemy', year: '2022' },
            { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2022' },
            { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022' },
            { name: 'Educational Robotics Workshop for Teachers', issuer: 'UTN', year: '2018' },
        ],
        languages: [
            { name: 'Spanish', level: 'Native' },
            { name: 'English', level: 'Intermediate' },
        ],
        competencies: [
            'Leadership and mentoring',
            'Technical decision-making',
            'Clear communication',
            'Teamwork',
            'Conflict resolution',
            'Organization and ownership',
            'Continuous learning',
        ],
        interests: ['Music (guitar and piano)', 'Cycling and running', '3D printing', 'Reading', 'Travel'],
        achievements: {
            title: 'Career Achievements',
            intro:
                'I like measuring my work by what it changes for the people who use it. These are the projects and results I am most proud of, from the most recent to the oldest.',
            groups: [
                {
                    title: 'ITTI — ueno bank',
                    period: '2025 – Present',
                    items: [
                        'Rebuilt the bank’s mass debt collector from scratch, redesigning the legacy process and adding overdrafts, which it did not support. It handles overdrafts, credit cards and loans for customers in arrears.',
                        'The new collector processes 5.7M+ debts a month (~170K a day): 2.27M overdrafts, 1.81M credit card debts and 1.62M loan debts.',
                        'Reached ~250K successful collections a month, recovering PYG 12B+ and USD 78K+ automatically, including 184K partial loan installment payments.',
                        'Designed association algorithms that add accounts and salaries to each collection attempt, creating 244K associations a month to increase recovery.',
                        'Built back-office tools for the collections operation (customer exclusions, refunds and reversals) end to end: React micro-frontend, Kong API Gateway routes, BFF and backend microservices.',
                        'Automated the loan restructuring process into a 100% digital, self-service flow.',
                        'Migrated key collections repositories from a monolithic architecture to modular monoliths, separating them by bounded context.',
                        'Created centralized debt-inquiry endpoints and new endpoints for the redesigned home of the bank’s app, with each user’s loans and available credit in one place.',
                        'Designed an MCP server solution to query loan debts from the banking app.',
                        'Improved application logging with Amazon DocumentDB and backups to Amazon S3.',
                        'Used Redis for distributed locks and short-lived keys, improving performance and avoiding duplicate processing.',
                        'Modernized the GitHub Actions workflows of key repositories; deployments through Nullplatform and messaging with Amazon SQS.',
                        'Built NRQL queries and New Relic dashboards to monitor collection volumes, amounts, errors and slow transactions.',
                        'Co-wrote PRDs and RFCs with the Engineering Manager and Product Manager to work with Spec-Driven Development (SDD), using agentic tools as an ally to accelerate delivery.',
                    ],
                },
                {
                    title: 'Coto Digital and Coto',
                    period: '2022 – 2025',
                    items: [
                        'Migrated a legacy monolithic system to a microservices architecture with .NET and Docker, improving response times and deployment scalability.',
                        'Designed and implemented a Kafka-based messaging architecture for reliable communication between microservices.',
                        'Built a reusable and extensible .NET 8 microservice template aligned with clean code practices and team standards.',
                        'Refactored complex Oracle and SQL Server queries and PL/SQL procedures, improving performance and readability across key systems.',
                        'Implemented a centralized Redis cache strategy and shared libraries to standardize its use across services.',
                        'Created a centralized application for accounting movement reporting within Coto Digital’s ecosystem.',
                        'Developed a generic microservice for scheduled background jobs with configurable task definitions.',
                        'Redesigned the operations web platform used by 2,000+ concurrent users in 40+ stores, optimizing picking, checkout, billing and reporting.',
                        'Integrated an automatic billing system that issued 180,000+ invoices and vouchers, removing manual work and saving 500,000+ printed pages.',
                        'Introduced end-to-end request tracing with Serilog and correlation IDs, improving observability in a distributed environment.',
                        'Promoted agile practices and technical mentoring as Tech Lead, improving delivery, code quality and team autonomy.',
                        'Migrated 90+ on-premise repositories to Bitbucket Cloud.',
                        'Redesigned business-critical workflows using Clean Architecture, improving maintainability and testability.',
                    ],
                },
            ],
        },
        coverLetter: {
            title: 'Cover Letter',
            greeting: 'Dear Hiring Team,',
            paragraphs: [
                'My name is Fernando Nahuel Tuquina. I am a Senior Software Engineer at ITTI, where I work for ueno bank on the Collections team, and before that I was Backend Tech Lead at Coto Digital. Programming is not just my job: I genuinely enjoy it, and I have always been drawn to building systems that are fast, clean and scalable.',
                'Over the last year I had the chance to rebuild, from scratch, the system that collects overdue debts for the bank: overdrafts, credit cards and loans. Today it processes more than 5.7 million debts a month, and seeing it run every day at that scale is one of the things I am proudest of. Along the way I also built back-office tools for the collections team and helped turn loan restructuring into a fully digital process.',
                'At Coto I learned a lot about leading people: reviewing code, mentoring and making technical decisions that others would have to live with. I designed services that talk through Kafka, cleaned up PL/SQL that had grown for years, helped shape a fraud-control architecture and automated processes that used to take hours of manual work. If something has to be done more than once, I will look for a way to automate it.',
                'These days I work with a hybrid approach. We first write PRDs and RFCs together with the Engineering Manager and the PM, and then use agentic tools like Cursor and GitHub Copilot to move faster. For me AI is an ally, not a shortcut: a clear spec and a careful review of every change matter more than ever.',
                'I am a calm and methodical person. I like having a plan, but I am always looking for something to improve, both for the people who use the system and for the developers who will maintain it after me.',
                'Outside of work I am still a tech person at heart. Lately I have been getting into 3D printing, I go cycling and running to clear my head, and music is a big part of my life: I play guitar and piano. I am also into video games.',
                'I am looking for a team where I can keep learning, contribute something real and work with people who care about what they build.',
            ],
            thanks: 'Thank you for taking the time to read this. I would love to talk.',
            closing: 'Kind regards,',
        },
    },

    es: {
        locale: 'es',
        months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        meta: {
            title: 'Fernando Tuquina — Senior Software Engineer',
            description: 'CV de Fernando Nahuel Tuquina, Senior Software Engineer (backend con Java y .NET) en ITTI para ueno bank. Ex Backend Tech Lead en Coto Digital.',
        },
        ui: {
            views: { cv: 'CV', achievements: 'Logros', coverLetter: 'Carta de presentación' },
            viewsShort: { cv: 'CV', achievements: 'Logros', coverLetter: 'Carta' },
            download: 'Descargar',
            downloads: {
                cv: 'CV (PDF)',
                achievements: 'Logros (PDF)',
                coverLetter: 'Carta de presentación (PDF)',
            },
            preparing: 'Generando…',
            downloadError: 'No se pudo generar el PDF. Intentá de nuevo.',
            toggleTheme: 'Cambiar modo oscuro',
            switchLanguage: 'View in English',
            menu: 'Opciones de descarga',
            present: 'Actualidad',
            page: 'Página',
            of: 'de',
            sections: {
                summary: 'Perfil',
                experience: 'Experiencia laboral',
                education: 'Formación',
                skills: 'Habilidades técnicas',
                certifications: 'Certificaciones',
                languages: 'Idiomas',
                competencies: 'Habilidades blandas',
                interests: 'Intereses',
                contact: 'Contacto',
            },
            lastUpdated: 'Última actualización',
        },
        basics: {
            ...basics,
            headline: 'Senior Software Engineer · Backend (Java y .NET)',
            location: 'Tucumán, Argentina',
        },
        summary:
            'Senior Software Engineer con más de 4 años de experiencia desarrollando sistemas backend con Java y .NET para banca y retail. ' +
            'En ITTI, trabajando para ueno bank, rehice el cobrador masivo del banco, que hoy procesa más de 5,7 millones de deudas por mes entre sobregiros, tarjetas de crédito y préstamos. ' +
            'Trabajo con un enfoque híbrido que combina la programación tradicional con el desarrollo agéntico guiado por Spec-Driven Development (SDD). ' +
            'Antes fui Backend Tech Lead en Coto Digital, donde lideré el equipo backend y diseñé soluciones basadas en Kafka y Redis. ' +
            'Me importan la arquitectura limpia, el rendimiento y escribir código que la próxima persona pueda entender fácilmente.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'ITTI',
                context: 'Cliente: ueno bank · Tribu de Préstamos · Equipo de Cobros',
                start: '2025-08',
                end: null,
                highlights: [
                    'Rehice desde cero el cobrador masivo del banco, reemplazando un proceso anterior que no contemplaba sobregiros. Hoy procesa más de 5,7 millones de deudas en mora por mes (~170 mil por día) entre sobregiros, tarjetas de crédito y préstamos.',
                    'Logré ~250 mil cobros exitosos por mes, recuperando más de PYG 12.000 millones y USD 78 mil, y diseñé algoritmos de asociación que suman cuentas y salarios a cada intento de cobro (244 mil asociaciones por mes).',
                    'Desarrollé de punta a punta backoffices para la operación de cobros (exclusiones de clientes, reversiones y devoluciones): microfrontend en React, rutas en Kong API Gateway, BFF y microservicios backend.',
                    'Automaticé la reestructuración de préstamos en un proceso 100% digital y autogestionado.',
                    'Migré repositorios clave de cobranza de monolitos a monolitos modulares separados por bounded context, y creé endpoints centralizados de consulta de deuda y nuevos endpoints para la nueva home de la app (préstamos y margen disponible por usuario).',
                    'Redacté PRDs y RFCs junto al Engineering Manager y al Product Manager para trabajar con Spec-Driven Development (SDD), usando herramientas agénticas como Cursor y GitHub Copilot para acelerar la entrega.',
                ],
                tags: ['Java', 'Spring', 'AWS (SQS, S3, DocumentDB)', 'MongoDB', 'Redis', 'Kong', 'React', 'New Relic', 'SDD'],
            },
            {
                role: 'Backend Tech Lead',
                company: 'Coto Digital',
                start: '2024-05',
                end: '2025-07',
                highlights: [
                    'Lideré el equipo backend responsable de los microservicios de la plataforma digital de Coto: code reviews, mentoría y lineamientos técnicos.',
                    'Diseñé una arquitectura de mensajería basada en Kafka para la comunicación confiable entre microservicios.',
                    'Implementé una estrategia de caché centralizada con Redis y librerías compartidas para estandarizar su uso.',
                    'Creé un template reutilizable de microservicios en .NET 8 e incorporé trazabilidad de requests con Serilog y correlation IDs.',
                ],
                tags: ['.NET 8', 'C#', 'Kafka', 'Redis', 'Docker', 'Microservicios'],
            },
            {
                role: 'Analista Programador .NET',
                company: 'Coto',
                start: '2022-07',
                end: '2024-05',
                highlights: [
                    'Diseñé y desarrollé aplicaciones web y microservicios .NET en Docker, integrados con Oracle y SQL Server.',
                    'Rediseñé la plataforma de operaciones de sucursales usada por más de 2.000 usuarios concurrentes en más de 40 tiendas (picking, caja, facturación y reportes).',
                    'Integré facturación automática que emitió más de 180.000 facturas y comprobantes, eliminando trabajo manual y ahorrando más de 500.000 hojas impresas.',
                    'Optimicé consultas complejas en Oracle y SQL Server y procedimientos PL/SQL para contabilidad y reportes financieros.',
                ],
                tags: ['.NET', 'C#', 'Oracle', 'SQL Server', 'PL/SQL', 'Docker'],
            },
            {
                role: 'Auxiliar Docente de 2.ª categoría',
                company: 'FACET — Universidad Nacional de Tucumán',
                period: '2018 – 2019 · 2021 – 2023',
                highlights: [
                    'Informática, Programación I y Programación II: dictado de clases prácticas, consultas y tutoría de proyectos finales.',
                ],
            },
            {
                role: 'Docente reemplazante',
                company: 'Instituto Técnico Salesiano Lorenzo Massa',
                period: '2021',
                highlights: ['Profesor de taller en Informática I y II, Diseño Asistido y Electrónica Industrial.'],
            },
            {
                role: 'Pasante en Instrumentación Electrónica',
                company: 'San Miguel (industria citrícola)',
                period: '2015',
                highlights: ['Programación de PLC y configuración de sensores digitales y analógicos en el sector de mantenimiento electrónico.'],
            },
        ],
        education: [
            {
                degree: 'Ingeniería en Computación (en curso)',
                school: 'Universidad Nacional de Tucumán — Facultad de Ciencias Exactas y Tecnología',
                period: '2017 – Actualidad',
            },
            {
                degree: 'Técnico en Electrónica',
                school: 'Instituto Técnico Salesiano Lorenzo Massa',
                period: '2009 – 2015',
            },
        ],
        skills: [
            { group: 'Lenguajes y frameworks', items: ['Java', 'Spring', 'C#', '.NET / .NET 8', 'JavaScript', 'React (microfrontends)'] },
            { group: 'Arquitectura', items: ['Microservicios', 'Monolitos modulares', 'Bounded contexts (DDD)', 'Clean Architecture', 'APIs REST', 'BFF', 'Kong API Gateway'] },
            { group: 'Cloud y mensajería', items: ['AWS (SQS, S3, DocumentDB)', 'Kafka', 'Redis (caché, locks distribuidos)'] },
            { group: 'Bases de datos', items: ['MongoDB', 'Oracle', 'SQL Server', 'MySQL', 'PL/SQL'] },
            { group: 'DevOps y observabilidad', items: ['Docker', 'GitHub Actions', 'Nullplatform', 'New Relic (NRQL)', 'Serilog', 'Git', 'Linux'] },
            { group: 'Desarrollo asistido por IA', items: ['Spec-Driven Development (SDD)', 'PRDs y RFCs', 'Flujos agénticos', 'Cursor', 'GitHub Copilot', 'MCP'] },
            { group: 'Prácticas y herramientas', items: ['Unit testing', 'Code review', 'Agile / Scrum', 'Jira', 'Mentoría técnica'] },
        ],
        certifications: [
            { name: 'Fundamentos de Inteligencia Artificial Generativa en AWS', issuer: 'Amazon Web Services', year: '2026' },
            { name: 'Ingeniería de Datos de Alto Rendimiento con Herramientas CASE', year: '2022' },
            { name: 'Curso de React (Hooks, Context, Redux, MERN)', issuer: 'Udemy', year: '2022' },
            { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2022' },
            { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022' },
            { name: 'Taller de Robótica Educativa para Docentes', issuer: 'UTN', year: '2018' },
        ],
        languages: [
            { name: 'Español', level: 'Nativo' },
            { name: 'Inglés', level: 'Intermedio' },
        ],
        competencies: [
            'Liderazgo y mentoría',
            'Toma de decisiones técnicas',
            'Comunicación efectiva',
            'Trabajo en equipo',
            'Resolución de conflictos',
            'Organización y responsabilidad',
            'Aprendizaje continuo',
        ],
        interests: ['Música (guitarra y piano)', 'Ciclismo y running', 'Impresión 3D', 'Lectura', 'Viajes'],
        achievements: {
            title: 'Logros profesionales',
            intro:
                'Me gusta medir mi trabajo por lo que cambia para las personas que lo usan. Estos son los proyectos y resultados de los que más me enorgullezco, del más reciente al más antiguo.',
            groups: [
                {
                    title: 'ITTI — ueno bank',
                    period: '2025 – Actualidad',
                    items: [
                        'Rehice desde cero el cobrador masivo del banco, rediseñando el proceso anterior y sumando los sobregiros, que no contemplaba. Cubre sobregiros, tarjetas de crédito y préstamos de clientes en mora.',
                        'El nuevo cobrador procesa más de 5,7 millones de deudas por mes (~170 mil por día): 2,27 millones de sobregiros, 1,81 millones de deudas de tarjetas y 1,62 millones de deudas de préstamos.',
                        'Alcanzó ~250 mil cobros exitosos por mes, recuperando de forma automática más de PYG 12.000 millones y USD 78 mil, incluidos 184 mil pagos parciales de cuotas de préstamos.',
                        'Diseñé algoritmos de asociación que suman cuentas y salarios a cada intento de cobro, con 244 mil asociaciones creadas por mes para aumentar la recuperación.',
                        'Desarrollé de punta a punta backoffices para la operación de cobros (exclusiones de clientes, reversiones y devoluciones): microfrontend en React, rutas en Kong API Gateway, BFF y microservicios backend.',
                        'Automaticé el proceso de reestructuración de préstamos en un flujo 100% digital y autogestionado.',
                        'Migré repositorios clave de cobranza de una arquitectura monolítica a monolitos modulares, separados por bounded context.',
                        'Creé endpoints centralizados de consulta de deuda y nuevos endpoints para la nueva home de la app del banco, con los préstamos y el margen disponible de cada usuario en un solo lugar.',
                        'Diseñé una solución de servidor MCP para consultar deudas de préstamos desde la app bancaria.',
                        'Mejoré el logueo de aplicaciones con Amazon DocumentDB y backups en Amazon S3.',
                        'Usé Redis para locks distribuidos y claves temporales, mejorando el rendimiento y evitando procesamientos duplicados.',
                        'Modernicé los workflows de GitHub Actions de repositorios clave; despliegues con Nullplatform y mensajería con Amazon SQS.',
                        'Armé consultas NRQL y dashboards en New Relic para monitorear volúmenes, importes, errores y transacciones lentas de cobro.',
                        'Redacté PRDs y RFCs junto al Engineering Manager y al Product Manager para trabajar con Spec-Driven Development (SDD), usando herramientas agénticas como aliadas para acelerar la entrega.',
                    ],
                },
                {
                    title: 'Coto Digital y Coto',
                    period: '2022 – 2025',
                    items: [
                        'Migré un sistema monolítico legado a una arquitectura de microservicios con .NET y Docker, mejorando los tiempos de respuesta y la escalabilidad de los despliegues.',
                        'Diseñé e implementé una arquitectura de mensajería basada en Kafka para la comunicación confiable entre microservicios.',
                        'Creé un template reutilizable y extensible de microservicios en .NET 8, alineado con buenas prácticas de código limpio y los estándares del equipo.',
                        'Refactoricé consultas complejas en Oracle y SQL Server y procedimientos PL/SQL, mejorando el rendimiento y la legibilidad de sistemas clave.',
                        'Implementé una estrategia de caché centralizada con Redis y librerías compartidas para estandarizar su uso entre servicios.',
                        'Desarrollé una aplicación centralizada de reportes de movimientos contables dentro del ecosistema de Coto Digital.',
                        'Desarrollé un microservicio genérico para tareas programadas en segundo plano, con definiciones de tareas configurables.',
                        'Rediseñé la plataforma web de operaciones usada por más de 2.000 usuarios concurrentes en más de 40 sucursales, optimizando picking, caja, facturación y reportes.',
                        'Integré un sistema de facturación automática que emitió más de 180.000 facturas y comprobantes, eliminando trabajo manual y ahorrando más de 500.000 hojas impresas.',
                        'Incorporé trazabilidad completa de requests con Serilog y correlation IDs, mejorando la observabilidad en un entorno distribuido.',
                        'Promoví prácticas ágiles y mentoría técnica como Tech Lead, mejorando la entrega, la calidad del código y la autonomía del equipo.',
                        'Migré más de 90 repositorios on-premise a Bitbucket Cloud.',
                        'Rediseñé flujos críticos del negocio con Clean Architecture, mejorando la mantenibilidad y la testeabilidad.',
                    ],
                },
            ],
        },
        coverLetter: {
            title: 'Carta de presentación',
            greeting: 'Estimado equipo de selección:',
            paragraphs: [
                'Mi nombre es Fernando Nahuel Tuquina. Soy Senior Software Engineer en ITTI, donde trabajo para ueno bank en el equipo de Cobros, y antes fui Backend Tech Lead en Coto Digital. Programar no es solo mi trabajo: lo disfruto de verdad, y siempre me atrajo construir sistemas rápidos, limpios y escalables.',
                'En el último año tuve la oportunidad de rehacer desde cero el sistema que cobra las deudas en mora del banco: sobregiros, tarjetas de crédito y préstamos. Hoy procesa más de 5,7 millones de deudas por mes, y verlo funcionar todos los días a esa escala es de las cosas que más orgullo me dan. En el camino también armé backoffices para el equipo de cobros y ayudé a que la reestructuración de préstamos sea un proceso totalmente digital.',
                'En Coto aprendí mucho sobre liderar personas: revisar código, acompañar a otros desarrolladores y tomar decisiones técnicas con las que después iba a convivir todo el equipo. Diseñé servicios que se comunican por Kafka, ordené PL/SQL que había crecido durante años, ayudé a dar forma a una arquitectura de control de fraude y automaticé procesos que antes llevaban horas de trabajo manual. Si algo hay que hacerlo más de una vez, busco la forma de automatizarlo.',
                'Hoy trabajo con un enfoque híbrido. Primero escribimos PRDs y RFCs junto al Engineering Manager y el PM, y después usamos herramientas agénticas como Cursor y GitHub Copilot para avanzar más rápido. Para mí la IA es una aliada, no un atajo: una buena especificación y una revisión cuidadosa de cada cambio importan más que nunca.',
                'Soy una persona tranquila y metódica. Me gusta tener un plan, pero siempre estoy buscando algo para mejorar, tanto para quienes usan el sistema como para quienes lo van a mantener después de mí.',
                'Fuera del trabajo sigo siendo un apasionado de la tecnología. Últimamente me metí en la impresión 3D, salgo a andar en bicicleta y a correr para despejarme, y la música es una parte muy importante de mi vida: toco la guitarra y el piano. También me encantan los videojuegos.',
                'Busco un equipo donde pueda seguir aprendiendo, aportar algo concreto y trabajar con personas a las que les importe lo que construyen.',
            ],
            thanks: 'Gracias por tomarse el tiempo de leer esto. Me encantaría que conversemos.',
            closing: 'Saludos cordiales,',
        },
    },
};

export const LANGS = Object.keys(content);

// Shown in the footer; bump it when the content changes.
export const LAST_UPDATED = '2026-11';
