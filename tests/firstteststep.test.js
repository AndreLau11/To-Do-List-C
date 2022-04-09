import Application from '../modules/application/application.js';

describe('Add to list', () => {
  test('Test case 1', () => {
    document.body.innerHTML = '<div> <ul class="todo-list"> </ul> </div>';

    const Test = new Application(true);
    Test.addTaskToList('Example 1');
    Test.addTaskToList('Example-2');
    Test.addTaskToList('Example-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });

  test('Test Case 2', () => {
    document.body.innerHTML = '<div> <ul class="todo-list"> </ul> </div>';

    const Test = new Application(true);
    Test.addTaskToList('Example 1');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });

  test('Test Case 3', () => {
    document.body.innerHTML = '<div>  <ul class="todo-list"></ul> </div>';

    const test = new Application(true);
    test.addTaskToList('Rojo');
    test.addTaskToList('Azul');
    test.addTaskToList('Verde');
    test.addTaskToList('Amarillo');
    expect(test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list.length).toBe(4);
  });
});

describe('Delete', () => {
  test('Test 1', () => {
    document.body.innerHTML = '<div> <ul class="todo-list"></ul> </div>';

    const Test = new Application(true);
    Test.addTaskToList('Example 1');
    Test.addTaskToList('Example 2');
    Test.addTaskToList('Example 3');
    Test.deleteTask(2);
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list.length).toBe(2);
  });

  test('Test 2', () => {
    document.body.innerHTML = '<div> <ul class="todo-list"></ul> </div>';

    const Test = new Application(true);
    Test.addTaskToList('Example 1');
    Test.deleteTask(0);
    Test.addTaskToList('Example 2');
    Test.addTaskToList('Example 3');
    Test.deleteTask(0);

    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list.length).toBe(1);
  });

  test('Test 3', () => {
    document.body.innerHTML = '<div> <ul class="todo-list"></ul> </div>';

    const Test = new Application(true);
    Test.addTaskToList('Example 1');
    Test.addTaskToList('Example 2');
    Test.addTaskToList('Example 3');
    Test.deleteTask(0);
    Test.deleteTask(1);

    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list.length).toBe(1);
  });
});