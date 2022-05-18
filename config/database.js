'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
    connection: {
      host: Env.get('DB_HOST', ''),
      port: Env.get('DB_PORT', ),
      username: Env.get('DB_USER', ''),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', ''),
      options: {
        // replicaSet: Env.get('DB_REPLICA_SET', '')
        ssl: Env.get('DB_SSL', ''),
        // connectTimeoutMS: Env.get('DB_CONNECT_TIMEOUT_MS', 15000),
        // socketTimeoutMS: Env.get('DB_SOCKET_TIMEOUT_MS', 180000),
        // w: Env.get('DB_W, 0),
        readPreference: Env.get('DB_READ_PREFERENCE', 'secondary'),
        authSource: Env.get('DB_AUTH_SOURCE', ''),
        // authMechanism: Env.get('DB_AUTH_MECHANISM', ''),
        // other options
      }
    }
  }
}