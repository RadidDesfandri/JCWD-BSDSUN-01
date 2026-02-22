import { Pool } from "pg";

const pool = new Pool({
  user: "postgres.kxvtjwzyilyrlocrrllp",
  host: "aws-1-ap-southeast-2.pooler.supabase.com",
  database: "sakila",
  password: "er07kx0Kfh11gLky",
  port: 5432,
});

export default pool;
