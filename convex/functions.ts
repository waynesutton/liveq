import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { internalAction, internalQuery, action } from "./_generated/server";
import { api } from "./_generated/api";

// Helper function to check if user has admin role
async function requireAdminRole(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Authentication required for admin action");
  }

  // Check if user has admin role from Clerk custom claims
  // Clerk stores role in different places depending on configuration
  const userRole =
    identity.role ||
    identity.public_metadata?.role ||
    identity.publicMetadata?.role ||
    identity["https://liveq.dev/role"]; // Custom claim format

  if (userRole !== "admin") {
    throw new Error(
      `Admin role required for this action. Current role: ${userRole || "none"}`,
    );
  }

  return identity;
}

// ===== EVENTS =====

/**
 * List all active events (for homepage)
 */
export const listActiveEvents = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("events"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx) => {
    const events = await ctx.db
      .query("events")
      .withIndex("by_name")
      .filter((q) => q.neq(q.field("archived"), true))
      .order("desc")
      .collect();
    return events;
  },
});

/**
 * List all events for admin (including archived)
 */
export const listAllEventsForAdmin = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("events"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx) => {
    await requireAdminRole(ctx);
    const events = await ctx.db
      .query("events")
      .withIndex("by_name")
      .order("desc")
      .collect();
    return events;
  },
});

/**
 * Get a single event by ID
 */
export const getEvent = query({
  args: { eventId: v.id("events") },
  returns: v.union(
    v.object({
      _id: v.id("events"),
      _creationTime: v.number(),
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
    }),
    v.null(),
  ),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.eventId);
  },
});

/**
 * Get a single event by title
 */
export const getEventByTitle = query({
  args: { eventTitle: v.string() },
  returns: v.union(
    v.object({
      _id: v.id("events"),
      _creationTime: v.number(),
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
    }),
    v.null(),
  ),
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")
      .withIndex("by_name")
      .filter((q) => q.eq(q.field("title"), args.eventTitle))
      .first();
    return events;
  },
});

/**
 * Get an event by slug (URL-friendly version of title)
 */
export const getEventBySlug = query({
  args: { eventSlug: v.string() },
  returns: v.union(
    v.object({
      _id: v.id("events"),
      _creationTime: v.number(),
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
    }),
    v.null(),
  ),
  handler: async (ctx, args) => {
    // Get all events and find the one whose title matches the slug
    const events = await ctx.db.query("events").collect();
    const event = events.find(
      (event) =>
        event.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "") === args.eventSlug,
    );
    return event || null;
  },
});

/**
 * Create a new AMA event
 */
export const createEvent = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    date: v.optional(v.string()),
    adminName: v.optional(v.string()),
    openDate: v.optional(v.string()),
    closeDate: v.optional(v.string()),
    closedMessage: v.optional(v.string()),
  },
  returns: v.id("events"),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const now = Date.now();

    const eventId = await ctx.db.insert("events", {
      title: args.title,
      description: args.description,
      date: args.date,
      adminName: args.adminName,
      isActive: true,
      openDate: args.openDate,
      closeDate: args.closeDate,
      closedMessage: args.closedMessage,
      archived: false,
      createdAt: now,
      updatedAt: now,
    });

    // Log admin action if adminName is provided
    if (args.adminName) {
      await ctx.db.insert("adminActions", {
        actionType: "create_event",
        targetId: eventId,
        targetType: "event",
        adminName: args.adminName,
        createdAt: now,
      });
    }

    return eventId;
  },
});

/**
 * Delete an event and all associated questions and comments
 */
export const deleteEvent = mutation({
  args: {
    eventId: v.id("events"),
    adminName: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const event = await ctx.db.get(args.eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    // Delete all questions for this event
    const questions = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .collect();

    for (const question of questions) {
      // Delete all comments for this question
      const comments = await ctx.db
        .query("comments")
        .withIndex("by_question", (q) => q.eq("questionId", question._id))
        .collect();

      for (const comment of comments) {
        await ctx.db.delete(comment._id);
      }

      // Delete the question
      await ctx.db.delete(question._id);
    }

    // Delete the event
    await ctx.db.delete(args.eventId);

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "delete_event",
      targetId: args.eventId,
      targetType: "event",
      adminName: args.adminName ?? "Admin",
      createdAt: Date.now(),
    });

    return null;
  },
});

/**
 * Toggle event status (active/inactive) and set closed message
 */
export const toggleEventStatus = mutation({
  args: {
    eventId: v.id("events"),
    adminName: v.optional(v.string()),
    isActive: v.boolean(),
    closedMessage: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const event = await ctx.db.get(args.eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    await ctx.db.patch(args.eventId, {
      isActive: args.isActive,
      closedMessage: args.closedMessage,
      updatedAt: Date.now(),
    });

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "update_event",
      targetId: args.eventId,
      targetType: "event",
      adminName: args.adminName ?? "Admin",
      createdAt: Date.now(),
    });

    return null;
  },
});

/**
 * Toggle event archive status
 */
export const toggleEventArchive = mutation({
  args: {
    eventId: v.id("events"),
    adminName: v.optional(v.string()),
    archived: v.boolean(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const event = await ctx.db.get(args.eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    await ctx.db.patch(args.eventId, {
      archived: args.archived,
      updatedAt: Date.now(),
    });

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "update_event",
      targetId: args.eventId,
      targetType: "event",
      adminName: args.adminName ?? "Admin",
      createdAt: Date.now(),
    });

    return null;
  },
});

/**
 * Mark a question as answered
 */
export const markQuestionAnswered = mutation({
  args: {
    questionId: v.id("questions"),
    answer: v.string(),
    adminName: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const question = await ctx.db.get(args.questionId);
    if (!question) {
      throw new Error("Question not found");
    }

    const now = Date.now();
    await ctx.db.patch(args.questionId, {
      answered: true,
      answer: args.answer,
      answeredBy: args.adminName ?? "Admin",
      answeredAt: now,
      updatedAt: now,
    });

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "mark_answered",
      targetId: args.questionId,
      targetType: "question",
      adminName: args.adminName ?? "Admin",
      createdAt: now,
    });

    return null;
  },
});

/**
 * Simply mark a question as answered without answer text (admin only)
 */
export const markQuestionAsAnswered = mutation({
  args: {
    questionId: v.id("questions"),
    adminName: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const question = await ctx.db.get(args.questionId);
    if (!question) {
      throw new Error("Question not found");
    }

    const now = Date.now();
    await ctx.db.patch(args.questionId, {
      answered: true,
      answeredAt: now,
      updatedAt: now,
    });

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "mark_answered",
      targetId: args.questionId,
      targetType: "question",
      adminName: args.adminName ?? "Admin",
      createdAt: now,
    });

    return null;
  },
});

/**
 * Check if an event is open for questions
 */
export const isEventOpen = query({
  args: { eventId: v.id("events") },
  returns: v.object({
    isOpen: v.boolean(),
    message: v.optional(v.string()),
  }),
  handler: async (ctx, args) => {
    const event = await ctx.db.get(args.eventId);
    if (!event) {
      return { isOpen: false, message: "Event not found." };
    }

    if (!event.isActive) {
      return {
        isOpen: false,
        message: event.closedMessage || "This event is closed.",
      };
    }

    const now = new Date().toISOString();
    if (event.openDate && now < event.openDate) {
      return {
        isOpen: false,
        message: `This event has not opened yet. It will open on ${new Date(
          event.openDate,
        ).toLocaleString()}.`,
      };
    }
    if (event.closeDate && now > event.closeDate) {
      return {
        isOpen: false,
        message:
          event.closedMessage ||
          "This event has ended and is no longer accepting questions.",
      };
    }

    return { isOpen: true, message: undefined };
  },
});

// ===== QUESTIONS =====

/**
 * List questions for an event
 */
export const listQuestions = query({
  args: { eventId: v.id("events") },
  returns: v.array(
    v.object({
      _id: v.id("questions"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx, args) => {
    const questions = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .filter((q) => q.eq(q.field("isVisible"), true)) // Only show visible questions
      .order("desc")
      .collect();

    return questions;
  },
});

/**
 * List all questions for an event for admins (includes hidden)
 */
export const listQuestionsForAdmin = query({
  args: { eventId: v.id("events") },
  returns: v.array(
    v.object({
      _id: v.id("questions"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const questions = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .order("desc")
      .collect();
    return questions;
  },
});

/**
 * Full text search for questions (public)
 */
export const searchQuestionsByText = query({
  args: { eventId: v.id("events"), query: v.string() },
  returns: v.array(
    v.object({
      _id: v.id("questions"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("questions")
      .withSearchIndex("search_content", (q) =>
        q.search("content", args.query).eq("eventId", args.eventId),
      )
      .filter((q) => q.eq(q.field("isVisible"), true))
      .take(50);
    return results;
  },
});

// ===== VECTOR SEARCH (optional, simple demo) =====

export const indexQuestionEmbedding = mutation({
  args: { questionId: v.id("questions"), embedding: v.array(v.number()) },
  returns: v.null(),
  handler: async (ctx, args) => {
    // Store embedding for vector search
    await ctx.db.patch(args.questionId, {
      embedding: args.embedding,
      updatedAt: Date.now(),
    });
    return null;
  },
});

export const searchQuestionsByEmbedding = action({
  args: { eventId: v.id("events"), embedding: v.array(v.number()) },
  returns: v.array(v.id("questions")),
  handler: async (ctx, args) => {
    const results = await ctx.vectorSearch("questions", "by_embedding", {
      vector: args.embedding,
      limit: 20,
      filter: (q) => q.eq("eventId", args.eventId),
    });
    return results.map((r) => r._id);
  },
});

export const getQuestionsByIds = query({
  args: { ids: v.array(v.id("questions")) },
  returns: v.array(
    v.object({
      _id: v.id("questions"),
      _creationTime: v.number(),
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
    }),
  ),
  handler: async (ctx, args) => {
    const docs = [] as any[];
    for (const id of args.ids) {
      const doc = await ctx.db.get(id);
      if (doc) docs.push(doc);
    }
    return docs;
  },
});

// ===== ADMIN BULK OPS =====

export const bulkToggleVisibility = mutation({
  args: { questionIds: v.array(v.id("questions")), hide: v.boolean() },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    for (const qid of args.questionIds) {
      const q = await ctx.db.get(qid);
      if (q) {
        await ctx.db.patch(qid, {
          isVisible: !args.hide,
          updatedAt: Date.now(),
        });
      }
    }
    return null;
  },
});

export const bulkDeleteQuestions = mutation({
  args: { questionIds: v.array(v.id("questions")) },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    for (const qid of args.questionIds) {
      await ctx.db.delete(qid);
    }
    return null;
  },
});

export const exportEventQuestionsCsv = query({
  args: { eventId: v.id("events") },
  returns: v.string(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const rows = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .order("asc")
      .collect();
    const header = [
      "_id",
      "createdAt",
      "authorName",
      "content",
      "upvotes",
      "isVisible",
      "answered",
      "answeredBy",
      "answeredAt",
    ];
    const csv = [header.join(",")]
      .concat(
        rows.map((r) =>
          [
            r._id,
            new Date(r.createdAt).toISOString(),
            JSON.stringify(r.authorName ?? ""),
            JSON.stringify(r.content),
            r.upvotes,
            r.isVisible,
            r.answered ?? false,
            JSON.stringify(r.answeredBy ?? ""),
            r.answeredAt ? new Date(r.answeredAt).toISOString() : "",
          ].join(","),
        ),
      )
      .join("\n");
    return csv;
  },
});

export const exportEventQuestionsCsvAction = action({
  args: { eventId: v.id("events") },
  returns: v.string(),
  handler: async (ctx, args) => {
    const csv: string = await ctx.runQuery(
      api.functions.exportEventQuestionsCsv,
      {
        eventId: args.eventId,
      },
    );
    return csv;
  },
});

/**
 * Submit a new question (no auth required)
 */
export const submitQuestion = mutation({
  args: {
    eventId: v.id("events"),
    content: v.string(),
    authorName: v.optional(v.string()),
  },
  returns: v.id("questions"),
  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("questions", {
      eventId: args.eventId,
      content: args.content,
      authorName: args.authorName,
      upvotes: 0,
      isVisible: true,
      createdAt: now,
      updatedAt: now,
    });
  },
});

/**
 * Upvote a question (no auth required)
 */
export const upvoteQuestion = mutation({
  args: { questionId: v.id("questions") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const question = await ctx.db.get(args.questionId);
    if (!question) {
      throw new Error("Question not found");
    }

    await ctx.db.patch(args.questionId, {
      upvotes: question.upvotes + 1,
      updatedAt: Date.now(),
    });

    return null;
  },
});

// ===== COMMENTS =====

/**
 * List comments for a specific question
 */
export const listComments = query({
  args: { questionId: v.id("questions") },
  returns: v.array(
    v.object({
      _id: v.id("comments"),
      _creationTime: v.number(),
      questionId: v.id("questions"),
      content: v.string(),
      authorId: v.optional(v.id("users")),
      authorName: v.string(),
      isAdmin: v.boolean(),
      createdAt: v.number(),
      updatedAt: v.number(),
    }),
  ),
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_question", (q) => q.eq("questionId", args.questionId))
      .order("asc")
      .collect();

    return comments;
  },
});

/**
 * List all comments for an event
 */
export const listEventComments = query({
  args: { eventId: v.id("events") },
  returns: v.array(
    v.object({
      _id: v.id("comments"),
      _creationTime: v.number(),
      questionId: v.id("questions"),
      content: v.string(),
      authorId: v.optional(v.id("users")),
      authorName: v.string(),
      isAdmin: v.boolean(),
      createdAt: v.number(),
      updatedAt: v.number(),
    }),
  ),
  handler: async (ctx, args) => {
    // First get all questions for this event
    const questions = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .collect();

    const questionIds = questions.map((q) => q._id);

    if (questionIds.length === 0) {
      return [];
    }

    // Get comments for all questions in this event
    let allComments = [];
    for (const questionId of questionIds) {
      const comments = await ctx.db
        .query("comments")
        .withIndex("by_question", (q) => q.eq("questionId", questionId))
        .order("asc")
        .collect();
      allComments.push(...comments);
    }

    return allComments;
  },
});

/**
 * Add a comment (admin can comment without auth, users need auth)
 */
export const addComment = mutation({
  args: {
    questionId: v.id("questions"),
    content: v.string(),
    authorName: v.string(),
    isAdmin: v.boolean(),
    authorId: v.optional(v.id("users")),
  },
  returns: v.id("comments"),
  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("comments", {
      questionId: args.questionId,
      content: args.content,
      authorId: args.authorId,
      authorName: args.authorName,
      isAdmin: args.isAdmin,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// ===== ADMIN FUNCTIONS =====

/**
 * Hide/show a question (admin only)
 */
export const toggleQuestionVisibility = mutation({
  args: {
    questionId: v.id("questions"),
    hide: v.boolean(),
    adminName: v.optional(v.string()),
    reason: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    const question = await ctx.db.get(args.questionId);
    if (!question) {
      throw new Error("Question not found");
    }

    await ctx.db.patch(args.questionId, {
      isVisible: !args.hide,
      updatedAt: Date.now(),
    });

    // Log admin action
    await ctx.db.insert("adminActions", {
      actionType: "toggle_visibility",
      targetId: args.questionId,
      targetType: "question",
      adminId: undefined, // No auth yet
      adminName: args.adminName ?? "Admin",
      reason: args.reason,
      createdAt: Date.now(),
    });

    return null;
  },
});

/**
 * Delete a question (admin only)
 */
export const deleteQuestion = mutation({
  args: {
    questionId: v.id("questions"),
    adminName: v.optional(v.string()),
    reason: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdminRole(ctx);
    // Log admin action before deletion
    await ctx.db.insert("adminActions", {
      actionType: "delete_question",
      targetId: args.questionId,
      targetType: "question",
      adminId: undefined, // No auth yet
      adminName: args.adminName ?? "Admin",
      reason: args.reason,
      createdAt: Date.now(),
    });

    // Delete the question
    await ctx.db.delete(args.questionId);

    return null;
  },
});

// ===== ANALYTICS =====

/**
 * Get event analytics
 */
export const getEventAnalytics = query({
  args: { eventId: v.id("events") },
  returns: v.object({
    totalQuestions: v.number(),
    totalUpvotes: v.number(),
    totalComments: v.number(),
    hiddenQuestions: v.number(),
  }),
  handler: async (ctx, args) => {
    const questions = await ctx.db
      .query("questions")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .collect();

    // Get all question IDs for this event
    const questionIds = questions.map((q) => q._id);

    // Get comments for all questions in this event
    let totalComments = 0;
    for (const questionId of questionIds) {
      const comments = await ctx.db
        .query("comments")
        .withIndex("by_question", (q) => q.eq("questionId", questionId))
        .collect();
      totalComments += comments.length;
    }

    const totalUpvotes = questions.reduce((sum, q) => sum + q.upvotes, 0);
    const hiddenQuestions = questions.filter((q) => !q.isVisible).length;

    return {
      totalQuestions: questions.length,
      totalUpvotes,
      totalComments,
      hiddenQuestions,
    };
  },
});
