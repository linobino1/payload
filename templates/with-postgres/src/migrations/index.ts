import * as migration_20250110_192021_initial from './20250110_192021_initial'

export const migrations = [
  {
    up: migration_20250110_192021_initial.up,
    down: migration_20250110_192021_initial.down,
    name: '20250110_192021_initial',
  },
]
