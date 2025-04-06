const fs = require("fs");
const path = require("path");
const getConnection = require("./config/db");

const migrationsDir = path.join(__dirname, "migrations");

async function runMigrations() {
    const connection = await getConnection();

    // Criar a tabela de controle de migrations
    await connection.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

    const [rows] = await connection.query("SELECT name FROM migrations");
    const appliedMigrations = rows.map((row) => row.name);

    const migrationFiles = fs
        .readdirSync(migrationsDir)
        .filter((file) => file.endsWith(".sql"))
        .sort();

    for (const file of migrationFiles) {
        if (!appliedMigrations.includes(file)) {
            const filePath = path.join(migrationsDir, file);
            const sql = fs.readFileSync(filePath, "utf-8");
            console.log(`🔁 Aplicando migration: ${file}`);

            try {
                await connection.query(sql);
                await connection.query("INSERT INTO migrations (name) VALUES (?)", [file]);
                console.log(`✅ Migration aplicada: ${file}`);
            } catch (err) {
                console.error(`❌ Erro ao aplicar migration ${file}:`, err.message);
                process.exit(1);
            }
        } else {
            console.log(`🟡 Migration já aplicada: ${file}`);
        }
    }

    await connection.end();
    console.log("🎉 Todas as migrations estão atualizadas!");
}

runMigrations();