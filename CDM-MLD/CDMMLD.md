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







### Mocodo : 

:  
:  
CHARGE VARIABLE: fixe_liability_id, liability_name, origin, sum,  frequence, starting_date, ending_date, category_id, user_id  
LISTE_CHARGES_VARIABLES, 1n CATÉGORIE, 1n CHARGE VARIABLE  
:  

PAIE_CHARGE_VARIABLE, 1n UTILISATEUR, 1n CHARGE VARIABLE  
CHARGE FIXE: ponctual_liability_id, liability_name, origin, sum, date,   category_id, user_id  
LISTE_CHARGES_FIXES, 1n CATÉGORIE, 1n CHARGE FIXE  
CATÉGORIE: category_id, category_name, category_type, nature_type, user_id  
LISTE_TRANSACTION, 1n CATÉGORIE, 1n TRANSACTION  

:  
PAIE_CHARGE_FIX, 1n UTILISATEUR, 1n CHARGE FIXE  
CRÉE, 1n UTILISATEUR, 1n CATÉGORIE  
LISTE, 1n CATÉGORIE, 1n OBJECTIF D'ÉPARGNE   
TRANSACTION: transaction_id, sum, date, type, origin, category_id, user_id  

:  
UTILISATEUR: user_id, firstname, lastname, email, password  
VISE, 1n UTILISATEUR, 1n OBJECTIF D'ÉPARGNE  
OBJECTIF D'ÉPARGNE: goal_id, goal_name, goal_sum, actual_sum,   starting_date, ending_date, category_id, user_id  
:  

:  
:  
:  
INSÈRE, n1 TRANSACTION, 11 UTILISATEUR  
:  
