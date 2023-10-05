<?php

class CreateTaskDomainService1 {
    private $taskRepository;
    private $activityReportRepository;

    public function __construct(TaskRepository $taskRepository, ActivityReportRepository $activityReportRepository) {
        $this->taskRepository = $taskRepository;
        $this->activityReportRepository = $activityReportRepository;
    }

    public function createTaskAndReport($taskName) {
        $task = new Task($taskName);
        $this->taskRepository->insert($task);

        $activityReport = ActivityReport::create($task);
        $this->activityReportRepository->insert($activityReport);
    }
}