import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.optional(v.string()),
    adminName: v.optional(v.string()),
    isActive: v.boolean(),
    openDate: v.optional(v.string()),
    closeDate: v.optional(v.string()),
    closedMessage: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
    archived: v.optional(v.boolean()),
  }).index("by_name", ["title"]),

  questions: defineTable({
    eventId: v.id("events"),
    content: v.string(),
    authorName: v.optional(v.string()),
    upvotes: v.number(),
    isVisible: v.boolean(),
    answered: v.optional(v.boolean()),
    answer: v.optional(v.string()),
    answeredBy: v.optional(v.string()),
    answeredAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
    // Optional embedding for vector search
    embedding: v.optional(v.array(v.float64())),
  })
    .index("by_event", ["eventId"])
    .vectorIndex("by_embedding", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["eventId"],
    })
    .searchIndex("search_content", {
      searchField: "content",
      filterFields: ["eventId", "isVisible"],
    }),

  comments: defineTable({
    questionId: v.id("questions"),
    content: v.string(),
    authorId: v.optional(v.id("users")),
    authorName: v.string(),
    isAdmin: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_question", ["questionId"]),

  users: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    isAdmin: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  adminActions: defineTable({
    actionType: v.union(
      v.literal("hide_question"),
      v.literal("delete_question"),
      v.literal("toggle_visibility"),
      v.literal("mark_answered"),
      v.literal("create_event"),
      v.literal("update_event"),
      v.literal("delete_event"),
    ),
    targetId: v.union(v.id("questions"), v.id("events")),
    targetType: v.union(v.literal("question"), v.literal("event")),
    adminId: v.optional(v.id("users")),
    adminName: v.string(),
    reason: v.optional(v.string()),
    createdAt: v.number(),
  }),

  flaggedContent: defineTable({
    contentType: v.union(v.literal("question"), v.literal("comment")),
    contentId: v.union(v.id("questions"), v.id("comments")),
    reason: v.string(),
    reporterName: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("reviewed"),
      v.literal("resolved"),
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});
