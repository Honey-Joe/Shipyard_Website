const Service = require("../models/Service");

// Create a new service (Admin Only)
exports.createService = async (req, res) => {
  try {
    const { name, description, category, image, formFields } = req.body;
    const newService = await Service.create({ name, description, category, image, formFields });

    res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (error) {
    res.status(500).json({ error: "Failed to create service" });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

// Get a specific service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });

    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service" });
  }
};

// Update a service (Admin Only)
exports.updateService = async (req, res) => {
  try {
    const { name, description, category, image, formFields } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, category, image, formFields },
      { new: true }
    );

    if (!updatedService) return res.status(404).json({ error: "Service not found" });

    res.json({ message: "Service updated successfully", updatedService });
  } catch (error) {
    res.status(500).json({ error: "Failed to update service" });
  }
};

// Delete a service (Admin Only)
exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ error: "Service not found" });

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete service" });
  }
};
