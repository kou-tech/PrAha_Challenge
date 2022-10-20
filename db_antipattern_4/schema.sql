CREATE TABLE IF not exists Message (
  `id` INTEGER,
  `parent_message_id` INTEGER,
  `text` VARCHAR(5)
);

INSERT INTO Message
  (`id`, `parent_message_id`, `text`)
VALUES
  ('1', null, 'テキスト1'),
  ('2', '1', 'テキスト2'),
  ('3', '2', 'テキスト3'),
  ('4', '1', 'テキスト4');