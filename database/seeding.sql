BEGIN;

DROP TABLE IF EXISTS 
"users",
"categories",
"transactions",
"regular_liabilities",
"ponctual_liabilities",
"savings";

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lasrname TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    catagory_name TEXT NOT NULL,
    category_type TEXT CHECK (category_type IN ('revenu', 'dépense', 'économie')) NOT NULL,
    nature_type TEXT CHECK (nature_type IN ('fixe', 'variable')) NOT NULL,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    sum NUMERIC(10, 2) NOT NULL,
    date DATE NOT NULL,
    type TEXT CHECK (type IN ('asset', 'liability')) NOT NULL,
    origin TEXT,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE

);

CREATE TABLE regular_liabilities (
    fixe_liability_id SERIAL PRIMARY KEY,
    liability_name TEXT NOT NULL,
    origin TEXT,
    sum NUMERIC(10, 2) NOT NULL,
    frequence TEXT CHECK (frequence IN ('mensuelle', 'trimestrielle', 'annuelle')) NOT NULL,
    starting_date DATE NOT NULL,
    ending_date DATE,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE ponctual_liabilities (
    ponctual_liability_id SERIAL PRIMARY KEY,
    liability_name TEXT NOT NULL,
    origin TEXT,
    sum NUMERIC (10, 2),
    date DATE NOT NULL,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE savings (
    goal_id SERIAL PRIMARY KEY,
    goal_name TEXT NOT NULL,
    goal_sum NUMERIC(10, 2) NOT NULL,
    actual_sum NUMERIC(10, 2) DEFAULT 0,
    starting_date DATE NOT NULL,
    ending_date DATE,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

COMMIT;