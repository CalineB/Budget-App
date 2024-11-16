# USER ENTITY

|   Attribut  | Type |      Description    |  Key  |
| :---------: |:---: | :-----------------: | :---: |
| user_id     | int  | identifiant unique  |   PK  |
| firstname   | text | prénom              | 
| lastname    | text | nom                 |
| email       | text | courriel            |
| password    | text | mot de passe unique | 


# CATEGORY ENTITY

|   Attribut    | Type |           Description                 |  Key  |
| :---------:   |:---: | :-----------------------------------: | :---: |
| category_id   | int  | id_unique                             |   PK  | 
| category_name | text | nom de la catégorie                   | 
| category_type | text | "revenu" ou "dépense" ou "économie"   |
| nature_type   | text | "fixe" ou "variable"                  |
| user_id       | int | référence à l'utilisateur              |   FK  | 


# TRANSACTION ENTITY

|   Attribut     | Type |         Description       |  Key  |
| :---------:    |:---: | :-----------------------: | :---: |
| transaction_id | int  | id_unique                 |   PK  |
| sum            | int  | montant de la transaction | 
| date           | text | date de transaction       |
| type           | text | "asset" ou "liability"    |
| origin         | int  | description de l'origine  | 
| category_id    | int  | référence à la catégorie  |   FK  | 
| user_id        | int  | référence à l'utilisateur |   FK  |


# REGULAR LIABILITY ENTITY

|      Attribut     | Type |           Description               |  Key  |
| :---------:       |:---: | :---------------------------------: | :---: |
| fixe_liability_id | int  | id_unique                           |   PK  | 
| liability_name    | text | nom de la charge                    |
| origin            | text | nom du fournisseur                  | 
| sum               | int  | montant de la charge                |
| frequence         | text | "mensuelle" ou "trimestielle"...    |
| starting_date     | int  | date de début                       | 
| ending_date       | int  | date de fin optionnelle             |
| category_id           | int  | référence à la catégorie        |   FK  | 
| user_id           | int  | référence à l'utilisateur           |   PK  |


# PONCTUAL LIABILITY ENTITY

|        Attribut       | Type |           Description               |  Key  |
| :----------------:    |:---: | :---------------------------------: | :---: |
| ponctual_liability_id | int  | id_unique                           |   PK  | 
| liability_name        | text | nom de la charge                    |
| origin                | text | origine de la dépense               | 
| sum                   | int  | montant de la dépense               |
| date                  | int  | date de la dépense                  | 
| category_id           | int  | référence à la catégorie            |   FK  | 
| user_id               | int  | référence à l'utilisateur           |   FK  | 


# SAVING ENTITY

|        Attribut       | Type |           Description               |  Key  |
| :----------------:    |:---: | :---------------------------------: | :---: |
| goal_id               | int  | id_unique                           |   PK  | 
| goal_name             | text | nom de la charge                    |
| goal_sum              | text | origine de la dépense               | 
| actual_sum            | int  | montant de la dépense               |
| starting_date         | int  | date de la dépense                  | 
| ending_date           | int  | référence à la catégorie            |
| category_id           | int  | référence à la catégorie            |   FK  | 
| user_id               | int  | référence à l'utilisateur           |   FK  | 





Utilisateur (1,n) ---- (n,1) Catégorie
      |                     |
      |                     +---- (1,n) Transaction
      |                     |
      |                     +---- (1,n) Charge Variable
      |
      +---- (1,n) Charge fixe
      |
      +---- (1,n) Objectif d'épargne
