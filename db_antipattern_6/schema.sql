CREATE TABLE Student (
  `id` INTEGER,
  `name` VARCHAR(255),
  `status` VARCHAR(255) CHECK(status IN ("studying", "graduated", "suspended"))
);

INSERT INTO Student
  (`id`, `name`, `status`)
VALUES
  ('1', 'テスト', 'studying');