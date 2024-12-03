-- Revert Budget:init_project from pg

BEGIN;

DROP TABLE IF EXISTS 
"users",
"categories",
"transactions",
"regular_liabilities",
"ponctual_liabilities",
"savings";

COMMIT;
