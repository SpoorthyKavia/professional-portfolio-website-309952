const portfolio = require('../data/portfolio');

class PortfolioController {
  /**
   * Return "about" content.
   */
  getAbout(req, res) {
    return res.status(200).json({ about: portfolio.about });
  }

  /**
   * Return skills list.
   */
  getSkills(req, res) {
    return res.status(200).json({ skills: portfolio.skills });
  }

  /**
   * Return projects list.
   */
  getProjects(req, res) {
    return res.status(200).json({ projects: portfolio.projects });
  }

  /**
   * Store a contact message (in-memory).
   */
  submitContact(req, res) {
    const { name, email, message } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ status: 'error', message: 'Name is required.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ status: 'error', message: 'Email is required.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Message must be at least 10 characters.' });
    }

    const entry = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    portfolio.contactMessages.push(entry);

    return res.status(201).json({
      status: 'ok',
      message: 'Contact message received.',
      id: entry.id,
    });
  }
}

module.exports = new PortfolioController();
