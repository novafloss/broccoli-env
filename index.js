var defaultEnvs = ['development', 'production']

function Env() {
  return this.init()
}

Env.prototype = {
  init: function() {
    this.setEnvs(defaultEnvs)

    if (process.env.BROCCOLI_ENV) {
      this.setEnv(process.env.BROCCOLI_ENV)
    }

    return this
  },

  getEnv: function () {
    return this.env
  },

  setEnv: function(env) {
    if (this.getEnvs().indexOf(env) === -1) {
      throw new Error('Environment set to "' + env + '", but BROCCOLI_ENV only accepts one of the following values: ' + this.getEnvs().join(', '))
    }

    this.env = env

    return this
  },

  getEnvs: function() {
    return this.envs
  },

  setEnvs: function(envs) {
    this.envs = envs

    if (!this.getEnvs().length) {
      throw new Error('Parameter "envs" should be an array')
    }

    this.setEnv(this.envs[0])

    return this
  }
};

module.exports = (function(options) {
  return new Env(options)
})()
