import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveTranslation = mutation({
  args: {
    type: v.string(),
    inputText: v.optional(v.string()),
    outputText: v.optional(v.string()),
  },
  handler: async (ctx, args) => ({ _id: "tr_1", ...args, createdAt: Date.now() }),
});

export const getUserTranslations = query({
  args: {},
  handler: async () => [],
});
