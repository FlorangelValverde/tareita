import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-54-196-33-23.compute-1.amazonaws.com',
    user: 'vgltgcxduhspeo',
    password: '85a2ec53c41215d1d203f3a680cbf9d854c336b455531f1de8c1a0ec6ae4b2fd',
    database: 'dfholoob9qgd86',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})