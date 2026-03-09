import { query } from "./_generated/server";

export const getPublishedCourses = query({
  args: {},
  handler: async () => [
    { _id: "course_1", title: "Intro to Math", difficulty: "beginner" },
    { _id: "course_2", title: "Blender ISL Animations", difficulty: "all" },
  ],
});
