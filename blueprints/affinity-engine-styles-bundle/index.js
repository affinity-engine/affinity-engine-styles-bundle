/*jshint node:true*/
module.exports = {
  description: 'blueprint for affinity-engine-vn-bundle',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [{
        name: "affinity-engine-style-base",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-base.git"
      }, {
        name: "affinity-engine-style-block",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-block.git"
      }, {
        name: "affinity-engine-style-coastal",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-coastal.git"
      }, {
        name: "affinity-engine-style-full",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-full.git"
      }, {
        name: "affinity-engine-style-paper",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-paper.git"
      }, {
        name: "affinity-engine-style-transparent",
        target: "git+https://github.com/affinity-engine/affinity-engine-style-transparent.git"
      }]
    });
  }
};
