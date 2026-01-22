const express = require('express');
const portfolioController = require('../controllers/portfolio');

const router = express.Router();

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get about content
 *     description: Returns the about text and highlights used by the portfolio frontend.
 *     responses:
 *       200:
 *         description: About content
 */
router.get('/about', portfolioController.getAbout.bind(portfolioController));

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Get skills list
 *     description: Returns a list of skills used by the portfolio frontend.
 *     responses:
 *       200:
 *         description: Skills list
 */
router.get('/skills', portfolioController.getSkills.bind(portfolioController));

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get projects list
 *     description: Returns a list of projects used by the portfolio frontend.
 *     responses:
 *       200:
 *         description: Projects list
 */
router.get('/projects', portfolioController.getProjects.bind(portfolioController));

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a contact message
 *     description: Submits a contact form message. Stored in-memory (easy to replace with a database later).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, message]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: jane@example.com
 *               message:
 *                 type: string
 *                 example: Hello! I’d like to discuss a project...
 *     responses:
 *       201:
 *         description: Message accepted
 *       400:
 *         description: Validation error
 */
router.post('/contact', portfolioController.submitContact.bind(portfolioController));

module.exports = router;
