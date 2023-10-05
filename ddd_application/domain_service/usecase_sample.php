<?php

class CreateTaskUseCase2_1 {
    private $createTaskDomainService;

    public function __construct(CreateTaskDomainService $createTaskDomainService) {
        $this->createTaskDomainService = $createTaskDomainService;
    }

    public function execute($taskName) {
        return $this->createTaskDomainService->createTaskAndReport($taskName);
    }
}