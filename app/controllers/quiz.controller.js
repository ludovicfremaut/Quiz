import { Quiz } from "../models/V2/associations.js";

const quizController = {
  showQuizPage: async (req, res) => {
    try {
      const quizId = Number(req.params.id);
      const quiz = await Quiz.findByPk(quizId, {
        attributes: {
          exclude: ["created_at", "updated_at"],
        },
        include: [
          {
            association: "user",
            attributes: ["firstname", "lastname"],
          },
          {
            association: "questions",
            attributes: ["description", "quiz_id", "level_id", "anecdote"],
            include: [
              {
                association: "answers",
              },
              {
                association: "level",
              },
            ],
          },
        ],
      });

      res.status(200).render("quiz", { quiz });
    } catch (error) {
      res.status(500).render("500");
    }
  },
};

export default quizController;
