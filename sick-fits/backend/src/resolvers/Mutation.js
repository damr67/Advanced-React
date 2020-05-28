const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO Checking auth
    const items = ctx.db.mutation.createItem({ data: { ...args } }, info);
    return items;
  }
};

module.exports = mutations;
