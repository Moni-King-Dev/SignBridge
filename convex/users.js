import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getCurrentUser = query({
  args: {},
  handler: async () => ({
    _id: "user_1",
    name: "Demo Student",
    email: "student@example.com",
    role: "student",
    accessibilitySettings: {
      highContrast: true,
      largeText: false,
      gestureNavigation: false,
      subtitlesEnabled: true,
    },
    createdAt: Date.now(),
  }),
});

export const updateAccessibilitySettings = mutation({
  args: {
    highContrast: v.boolean(),
    largeText: v.boolean(),
    gestureNavigation: v.boolean(),
    subtitlesEnabled: v.boolean(),
  },
  handler: async (ctx, args) => ({ success: true, ...args }),
});
