<?php

// class Task private constructor(val taskName: String) {
//     companion object {
//       fun create(param: TaskCreateParameter): Task { // ①
//         return Task(param.taskName)
//       }
//     }
//   }
  
// /**
//  * 特定のドメインサービスでだけタスク作成を許可するためのインターフェイス
//  * ユースケースでこのインターフェイスを実装したクラスを作成しないでください
//  */
// interface TaskCreateParameter(val taskName: String)

class Task {
    public $taskName;

    private function __construct($taskName) {
        $this->taskName = $taskName;
    }

    public static function create(TaskCreateParameter $param): Task {
        return new Task($param->taskName);
    }
}

/**
 * 特定のドメインサービスでだけタスク作成を許可するためのインターフェイス
 * ユースケースでこのインターフェイスを実装したクラスを作成しないでください
 */
interface TaskCreateParameter {
    public function __construct($taskName);
}
