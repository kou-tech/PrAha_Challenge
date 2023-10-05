<?php

// Task関連
class Task {
    public $taskName;

    public function __construct($taskName) {
        $this->taskName = $taskName;
    }
}

interface TaskRepository {
    public function insert(Task $task);
}

// ActivityReport関連
class ActivityReport {
    public $detail;

    private function __construct($detail) {
        $this->detail = $detail;
    }

    public static function create(Task $task) {
        // 必要に応じてバリデーションを入れる
        return new ActivityReport("{$task->taskName}が作成されました");
    }

    public static function fromRepository($detail) {
        // バリデーションはない
        return new ActivityReport($detail);
    }
}

interface ActivityReportRepository {
    public function insert(ActivityReport $activityReport);
}
