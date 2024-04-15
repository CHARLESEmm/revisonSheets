BEGIN;

-- Insert into "user" table
INSERT INTO "user" ("firstname", "lastname", "email", "password") 
VALUES ('John', 'Doe', 'john.doe@example.com', 'password123'),
       ('Bob', 'Johnson', 'bob.johnson@example.com', 'password456');

-- Insert into "sheet" table
INSERT INTO "sheet" ("title", "description", "content", "season", "view_amount", "author_id") VALUES
('Methode MERISE', 'Tout savoir sur le MCD/MLD/MPD', 'blablabla', 5, 0, 2),
('les classes', 'Tout savoir sur les clases en js', 'blablabla les classes c est super cool', 5, 0, 1),
('les user stories', 'Tout savoir sur les US', 'blablabla les US c est pas un pays mais une methodologie', 5, 0, 2);

INSERT INTO "tag" ("name", "description") VALUES
('Gestion de projet', 'Tout savoir sur les user stories, les wireframes, le KANBAN, la methode MERISE...'),
('La POO', 'Tout savoir sur la programmation orientee objet');

INSERT INTO "sheet_has_tag" ("sheet_id", "tag_id") VALUES
(1, 1),
(2, 2),
(3, 1);
COMMIT;
