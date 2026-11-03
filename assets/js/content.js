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
    website: 'https://www.fernandotuquina.engineer',
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
            description: 'CV of Fernando Nahuel Tuquina, Senior Software Engineer (backend, .NET, microservices) at ITTI for ueno bank. Former Backend Tech Lead at Coto Digital.',
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
            headline: 'Senior Software Engineer · Backend',
            location: 'Tucumán, Argentina',
        },
        summary:
            'Senior Software Engineer with 4+ years of experience building backend systems with .NET and microservices for retail and banking. ' +
            'I currently work at ITTI for ueno bank, in the Collections team of the Lending tribe, combining traditional and agentic development through Spec-Driven Development (SDD). ' +
            'Previously Backend Tech Lead at Coto Digital, where I led a development team, defined technical standards and designed Kafka- and Redis-based solutions. ' +
            'I care about clean architecture, performance and code that is easy to maintain.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'ITTI',
                context: 'Client: ueno bank · Lending tribe · Collections team',
                start: '2025-08',
                end: null,
                highlights: [
                    'Develop and maintain backend services for ueno bank’s loan collections domain within the Lending tribe.',
                    'Work with a hybrid methodology that combines traditional programming with agentic development guided by Spec-Driven Development (SDD), using AI tools such as Cursor and GitHub Copilot.',
                    'Write specifications before implementation and review AI-assisted code with the same standards of testing, code review and traceability required in banking.',
                ],
                tags: ['Spec-Driven Development', 'Cursor', 'GitHub Copilot', 'Fintech'],
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
            { group: 'Backend', items: ['C#', '.NET / .NET 8', 'Java', 'REST APIs', 'Microservices', 'Clean Architecture'] },
            { group: 'Data & messaging', items: ['Oracle', 'SQL Server', 'MySQL', 'PL/SQL', 'Redis', 'Kafka'] },
            { group: 'AI-assisted development', items: ['Spec-Driven Development (SDD)', 'Agentic workflows', 'Cursor', 'GitHub Copilot'] },
            { group: 'DevOps & tools', items: ['Docker', 'Git', 'GitHub', 'Bitbucket', 'Linux', 'Serilog'] },
            { group: 'Practices', items: ['Unit testing', 'Code review', 'Agile / Scrum', 'Technical mentoring'] },
            { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        ],
        certifications: [
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
        interests: ['Music (guitar)', 'Cycling and running', '3D printing', 'Reading', 'Travel'],
        achievements: {
            title: 'Career Achievements',
            intro:
                'Throughout my career I have tried not only to meet expectations but to exceed them, focusing on architectural clarity, performance and real business value. These are the milestones I am most proud of.',
            groups: [
                {
                    title: 'ITTI — ueno bank',
                    period: '2025 – Present',
                    items: [
                        'Adopted a hybrid workflow that combines traditional and agentic development with Spec-Driven Development (SDD), using Cursor and GitHub Copilot to speed up delivery while keeping review and testing standards.',
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
                'My name is Fernando Nahuel Tuquina, and I am a Senior Software Engineer at ITTI, where I work for ueno bank in the Collections team of the Lending tribe. Before that, I was Backend Tech Lead at Coto Digital. I don’t only code for a living — I genuinely enjoy it, and I have always been drawn to building systems that are fast, clean and scalable.',
                'Over the past few years I have modernized core systems, designed services that communicate through Kafka, optimized PL/SQL and stored procedures, implemented centralized Redis caching and built reusable libraries to keep development consistent. I am especially proud of the fraud-control architecture I helped shape and of automating processes that used to take hours of manual work. If something has to be done more than once, I will look for a way to automate it.',
                'Today I work with a hybrid approach that combines traditional programming with agentic development guided by Spec-Driven Development, using tools such as Cursor and GitHub Copilot. Writing clear specifications first and reviewing AI-assisted code carefully has made me more deliberate about design, testing and communication.',
                'I am calm and methodical by nature. I follow structured work plans while constantly looking for improvements, always aiming to make life easier for both users and developers. I believe good engineering is not only about writing code, but about understanding the context, communicating clearly and building solutions that last.',
                'Outside of work, I love technology in all its forms. Lately I have been getting into 3D printing, and I enjoy cycling and running to clear my mind. Music is a big part of who I am — I play the guitar — and I am also a fan of video games.',
                'I am looking for a place where I can keep growing, contribute meaningfully and work alongside talented, motivated people.',
            ],
            thanks: 'Thank you for reading my story and considering my profile.',
            closing: 'Kind regards,',
        },
    },

    es: {
        locale: 'es',
        months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        meta: {
            title: 'Fernando Tuquina — Senior Software Engineer',
            description: 'CV de Fernando Nahuel Tuquina, Senior Software Engineer (backend, .NET, microservicios) en ITTI para ueno bank. Ex Backend Tech Lead en Coto Digital.',
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
            headline: 'Senior Software Engineer · Backend',
            location: 'Tucumán, Argentina',
        },
        summary:
            'Senior Software Engineer con más de 4 años de experiencia desarrollando sistemas backend con .NET y microservicios para retail y banca. ' +
            'Actualmente trabajo en ITTI para ueno bank, en el equipo de Cobros de la tribu de Préstamos, combinando desarrollo tradicional y agéntico mediante Spec-Driven Development (SDD). ' +
            'Anteriormente fui Backend Tech Lead en Coto Digital, donde lideré un equipo de desarrollo, definí estándares técnicos y diseñé soluciones basadas en Kafka y Redis. ' +
            'Me enfoco en la arquitectura limpia, el rendimiento y el código fácil de mantener.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'ITTI',
                context: 'Cliente: ueno bank · Tribu de Préstamos · Equipo de Cobros',
                start: '2025-08',
                end: null,
                highlights: [
                    'Desarrollo y mantenimiento de servicios backend para el dominio de cobranza de préstamos de ueno bank, dentro de la tribu de Préstamos.',
                    'Trabajo con una metodología híbrida que combina programación tradicional y desarrollo agéntico guiado por Spec-Driven Development (SDD), con herramientas de IA como Cursor y GitHub Copilot.',
                    'Redacción de especificaciones previas a la implementación y revisión del código asistido por IA con los estándares de testing, code review y trazabilidad que exige la banca.',
                ],
                tags: ['Spec-Driven Development', 'Cursor', 'GitHub Copilot', 'Fintech'],
            },
            {
                role: 'Backend Tech Lead',
                company: 'Coto Digital',
                start: '2024-05',
                end: '2025-07',
                highlights: [
                    'Liderazgo del equipo backend responsable de los microservicios de la plataforma digital de Coto: code reviews, mentoría y lineamientos técnicos.',
                    'Diseño de una arquitectura de mensajería basada en Kafka para la comunicación confiable entre microservicios.',
                    'Implementación de una estrategia de caché centralizada con Redis y librerías compartidas para estandarizar su uso.',
                    'Creación de un template reutilizable de microservicios en .NET 8 e incorporación de trazabilidad de requests con Serilog y correlation IDs.',
                ],
                tags: ['.NET 8', 'C#', 'Kafka', 'Redis', 'Docker', 'Microservicios'],
            },
            {
                role: 'Analista Programador .NET',
                company: 'Coto',
                start: '2022-07',
                end: '2024-05',
                highlights: [
                    'Diseño y desarrollo de aplicaciones web y microservicios .NET en Docker, integrados con Oracle y SQL Server.',
                    'Rediseño de la plataforma de operaciones de sucursales usada por más de 2.000 usuarios concurrentes en más de 40 tiendas (picking, caja, facturación y reportes).',
                    'Integración de facturación automática que emitió más de 180.000 facturas y comprobantes, eliminando trabajo manual y ahorrando más de 500.000 hojas impresas.',
                    'Optimización de consultas complejas en Oracle y SQL Server y de procedimientos PL/SQL para contabilidad y reportes financieros.',
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
            { group: 'Backend', items: ['C#', '.NET / .NET 8', 'Java', 'APIs REST', 'Microservicios', 'Clean Architecture'] },
            { group: 'Datos y mensajería', items: ['Oracle', 'SQL Server', 'MySQL', 'PL/SQL', 'Redis', 'Kafka'] },
            { group: 'Desarrollo asistido por IA', items: ['Spec-Driven Development (SDD)', 'Flujos agénticos', 'Cursor', 'GitHub Copilot'] },
            { group: 'DevOps y herramientas', items: ['Docker', 'Git', 'GitHub', 'Bitbucket', 'Linux', 'Serilog'] },
            { group: 'Prácticas', items: ['Unit testing', 'Code review', 'Agile / Scrum', 'Mentoría técnica'] },
            { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        ],
        certifications: [
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
        interests: ['Música (guitarra)', 'Ciclismo y running', 'Impresión 3D', 'Lectura', 'Viajes'],
        achievements: {
            title: 'Logros profesionales',
            intro:
                'A lo largo de mi carrera busqué no solo cumplir con lo esperado sino superarlo, poniendo el foco en la claridad de la arquitectura, el rendimiento y el valor real para el negocio. Estos son los hitos de los que más me enorgullezco.',
            groups: [
                {
                    title: 'ITTI — ueno bank',
                    period: '2025 – Actualidad',
                    items: [
                        'Adopción de un flujo de trabajo híbrido que combina desarrollo tradicional y agéntico con Spec-Driven Development (SDD), usando Cursor y GitHub Copilot para acelerar la entrega sin resignar estándares de revisión y testing.',
                    ],
                },
                {
                    title: 'Coto Digital y Coto',
                    period: '2022 – 2025',
                    items: [
                        'Migración de un sistema monolítico legado a una arquitectura de microservicios con .NET y Docker, mejorando los tiempos de respuesta y la escalabilidad de los despliegues.',
                        'Diseño e implementación de una arquitectura de mensajería basada en Kafka para la comunicación confiable entre microservicios.',
                        'Creación de un template reutilizable y extensible de microservicios en .NET 8, alineado con buenas prácticas de código limpio y los estándares del equipo.',
                        'Refactorización de consultas complejas en Oracle y SQL Server y de procedimientos PL/SQL, mejorando el rendimiento y la legibilidad de sistemas clave.',
                        'Implementación de una estrategia de caché centralizada con Redis y librerías compartidas para estandarizar su uso entre servicios.',
                        'Desarrollo de una aplicación centralizada de reportes de movimientos contables dentro del ecosistema de Coto Digital.',
                        'Desarrollo de un microservicio genérico para tareas programadas en segundo plano, con definiciones de tareas configurables.',
                        'Rediseño de la plataforma web de operaciones usada por más de 2.000 usuarios concurrentes en más de 40 sucursales, optimizando picking, caja, facturación y reportes.',
                        'Integración de un sistema de facturación automática que emitió más de 180.000 facturas y comprobantes, eliminando trabajo manual y ahorrando más de 500.000 hojas impresas.',
                        'Incorporación de trazabilidad completa de requests con Serilog y correlation IDs, mejorando la observabilidad en un entorno distribuido.',
                        'Promoción de prácticas ágiles y mentoría técnica como Tech Lead, mejorando la entrega, la calidad del código y la autonomía del equipo.',
                        'Migración de más de 90 repositorios on-premise a Bitbucket Cloud.',
                        'Rediseño de flujos críticos del negocio con Clean Architecture, mejorando la mantenibilidad y la testeabilidad.',
                    ],
                },
            ],
        },
        coverLetter: {
            title: 'Carta de presentación',
            greeting: 'Estimado equipo de selección:',
            paragraphs: [
                'Mi nombre es Fernando Nahuel Tuquina y soy Senior Software Engineer en ITTI, donde trabajo para ueno bank en el equipo de Cobros de la tribu de Préstamos. Antes fui Backend Tech Lead en Coto Digital. Programar no es solo mi trabajo: lo disfruto de verdad, y siempre me atrajo construir sistemas rápidos, limpios y escalables.',
                'En los últimos años modernicé sistemas centrales, diseñé servicios que se comunican a través de Kafka, optimicé PL/SQL y procedimientos almacenados, implementé caché centralizada con Redis y desarrollé librerías reutilizables para mantener el desarrollo consistente. Me enorgullece especialmente la arquitectura de control de fraude que ayudé a diseñar y la automatización de procesos que antes llevaban horas de trabajo manual. Si algo hay que hacerlo más de una vez, busco la forma de automatizarlo.',
                'Hoy trabajo con un enfoque híbrido que combina la programación tradicional con el desarrollo agéntico guiado por Spec-Driven Development, usando herramientas como Cursor y GitHub Copilot. Escribir primero especificaciones claras y revisar con cuidado el código asistido por IA me volvió más riguroso en el diseño, el testing y la comunicación.',
                'Soy una persona tranquila y metódica. Sigo planes de trabajo estructurados mientras busco mejoras constantemente, con el objetivo de hacer la vida más fácil tanto a los usuarios como a los desarrolladores. Creo que la buena ingeniería no se trata solo de escribir código, sino de entender el contexto, comunicarse con claridad y construir soluciones que perduren.',
                'Fuera del trabajo me apasiona la tecnología en todas sus formas. Últimamente me metí en la impresión 3D, y disfruto andar en bicicleta y salir a correr para despejarme. La música es una parte importante de quien soy — toco la guitarra — y también soy fan de los videojuegos.',
                'Busco un lugar donde pueda seguir creciendo, aportar de forma significativa y trabajar junto a personas talentosas y motivadas.',
            ],
            thanks: 'Gracias por leer mi historia y considerar mi perfil.',
            closing: 'Saludos cordiales,',
        },
    },
};

export const LANGS = Object.keys(content);

// Shown in the footer; bump it when the content changes.
export const LAST_UPDATED = '2026-11';
