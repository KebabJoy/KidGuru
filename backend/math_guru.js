const operators = ['*', '+', '-']

const task = {
  operator: '-', 
  result: null,
  first_arg: null,
  second_arg: null,
  task_num: 0      
}

var math_it_up = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
}

function genNum(num = 100, min = 0){
  return Math.floor(Math.random() * (num-min) + min);
}

function genOperator(){
  task.operator = operators[Math.floor(Math.random()*3)]
}

function genResult(){
  task.first_arg = genNum(10, 2);
  task.second_arg = genNum(10, 2);
  return task.result = math_it_up[task.operator](task.first_arg, task.second_arg)
}

function genNextTask(){
  genOperator()
  genResult()
  console.log('genNextTask')
  console.log(task)
  task.task_num++
}

genNextTask()



module.exports = {task, genNextTask}