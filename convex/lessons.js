import { query } from "./_generated/server";

export const getLessonsByCourse = query({
  args: { courseId: String },
  handler: async (ctx, args) => [
    { _id: "lesson_1", courseId: args.courseId, title: "Lesson 1", duration: 10 },
    { _id: "lesson_2", courseId: args.courseId, title: "Lesson 2", duration: 12 },
  ],
});
