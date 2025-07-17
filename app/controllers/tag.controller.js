import { Tag } from "../models/V2/associations.js";

const tagController = {
  showTagsPage: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        order: [["name", "ASC"]],
        attributes: ["name"],
        include: [
          {
            association: "quizzes",
            attributes: ["id", "title"],
            through: {
              attributes: [],
            },
          },
        ],
      });

        res.status(200).render("tags", { tags });
    } catch (error) {
      res.status(500).render("500");
    }
  },
};

export default tagController;
