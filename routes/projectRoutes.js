// routes/projectRoutes.js
const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific project
router.get(":/id", getProject, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new project
router.post("/", async (req, res) => {
  const {
    title,
    description,
    logo,
    industry,
    services,
    images,
    categories,
    image,
  } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      logo,
      industry,
      services,
      images,
      categories,
      image,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    logo,
    industry,
    services,
    images,
    categories,
    image,
  } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        logo,
        industry,
        services,
        images,
        categories,
        image,
      },
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project
router.delete("/:id", getProject, async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndRemove(id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
