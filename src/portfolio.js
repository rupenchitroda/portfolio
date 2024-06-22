const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rupenchitroda.github.io/portfolio',
  title: 'RC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rupen Chitroda',
  role: 'Back End Engineer',
  description:
    'Experienced Software Engineer proficient in Node.js and TypeScript, with over two years of hands-on experience in backend development and skilled in working with multiple databases.',
  resume: 'https://rupenchitroda.github.io/portfolio/rupenchitroda_cv.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/rupenchitroda',
    github: 'https://github.com/rupenchitroda',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'FinTech App',
    description:
      'The project developed a scalable FinTech app using AWS CDK and Node.js, featuring secure authentication with AWS Cognito and JWT, subscription management, a cashback system, and webhooks for seamless external data exchange, ensuring robust functionality and user satisfaction.',
    stack: ['AWS CDK', 'NodeJS', 'DynamoDB', 'MongoDB'],
  },
  {
    name: 'Temple Management',
    description:
      'Managed datasets of 1.5 to 2 million records, optimizing database performance with normalization and indexing to reduce query response times by 30%-40%. Enhanced a microservices codebase for better scalability and maintainability, using Sequelize ORM for robust SQL query execution.',
    stack: ['NodeJS', 'TypeScript', 'MySQL'],
  },
  {
    name: 'PDF translation service',
    description:
      'Redesigned a PDF translation service to support any language pair. Enhanced request queuing with Azure Service Bus and ensured secure, scalable storage with Azure Blob Storage. Integrated Google Translate API for precise translations, improving functionality and user experience.',
    stack: ['NodeJS', 'TypeScript', 'MySQL'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'NodeJS',
  'TypeScript',
  'MySQL',
  'MongoDB',
  'Redis',
  'Git',
  'Docker',
  'AWS',
  'Kubernetes',
  'GitHub Actions',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rupenchitroda16@gmail.com',
}

export { header, about, projects, skills, contact }
