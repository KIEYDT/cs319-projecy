const Service = require("../models/Service");


exports.createService = async (req, res) => {
    const { title, description, cate, price, location, available } = req.body;

    try {
        const service = await Service.create({
            title: title,
            description: description,
            cate: cate,
            price: price,
            location: location,
            available: available,
        });
        res.status(201).json({ message: "OK", service });
    } catch (error) {
        console.error("Error creating service:", error);
        res.status(500).json({ message: "bad request", error });
    }
};


exports.getService = async (req, res) => {
    try {
        const service = await Service.find();
        console.log(service);
        res.status(200).json({ message: "OK", service });
    } catch (error) {
        res.status(500).json({ message: "bad reqeust" });
    }
};


exports.getServiceById = async (req, res) => {
    const serviceId = req.params.id;

    try {
        // console.log(serviceId);
        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({ message: "not found" });
        };

        res.status(200).json({ message: "OK", service });
    } catch (error) {
        res.status(500).json({ message: "bad request", error });
    }
};