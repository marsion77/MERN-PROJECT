const itemsServer = require("../Services/itemsService");

const createItems = async (req, res) => {
  try {
    const items = await itemsServer.createItemsData(req.body);

    console.log("Items created successfully:", items);

    res.status(201).json({
      success: true,
      message: "Items created successfully",
      data: items
    });
  } catch (error) {
    console.error("Error creating items:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create items",
      error: error.message
    });
  }
};

module.exports = {
  createItems
};
