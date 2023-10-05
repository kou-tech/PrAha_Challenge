<?php

class CreateTaskUseCase1 {
    private $taskRepository;
    private $activityReportRepository;

    public function __construct(TaskRepository $taskRepository, ActivityReportRepository $activityReportRepository) {
        $this->taskRepository = $taskRepository;
        $this->activityReportRepository = $activityReportRepository;
    }

    public function execute($taskName) {
        // Taskの作成と保存
        $task = new Task($taskName);
        $this->taskRepository->insert($task);

        // ActivityReportの作成と保存
        $activityReport = ActivityReport::create($task); // 生成したTask経由でActivityReportを作成している
        $this->activityReportRepository->insert($activityReport);
    }
}
