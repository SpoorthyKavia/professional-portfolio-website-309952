/**
 * In-memory portfolio data source.
 * Beginner-friendly: update these objects to change site content.
 */

const portfolio = {
  about: {
    headline: 'Hi, I’m a developer who builds clean, reliable web apps.',
    bio:
      'I enjoy building modern, accessible interfaces and practical APIs. This portfolio is intentionally simple to update: edit a few objects in the backend and the frontend updates automatically.',
    highlights: ['React', 'Express', 'REST APIs', 'Clean UI', 'Maintainable code'],
  },

  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'HTML',
    'CSS',
    'REST APIs',
    'Git',
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio with React frontend and Express backend. Includes projects, about, and a contact form.',
      tags: ['React', 'Express', 'Responsive'],
      link: '',
      source: '',
    },
    {
      id: 'proj-2',
      title: 'API Starter',
      description:
        'A minimal, documented Express API with Swagger UI and a clean folder structure.',
      tags: ['Express', 'OpenAPI', 'Swagger'],
      link: '',
      source: '',
    },
    {
      id: 'proj-3',
      title: 'UI Components',
      description:
        'A lightweight component set built with vanilla CSS for fast performance and easy customization.',
      tags: ['CSS', 'UI', 'Accessibility'],
      link: '',
      source: '',
    },
  ],

  contactMessages: [],
};

module.exports = portfolio;
