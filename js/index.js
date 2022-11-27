
const enterTask = document.querySelector('#newTask');
const toDoList = document.querySelector('.todo-list');
const buttonClear = document.querySelector('#clearList');
console.log(enterTask);

let STORAGE__KEY = 'to-do-list'

enterTask.addEventListener('keydown', onPressEnter);
function onPressEnter(e) {
	if (e.key === 'Enter') {
	const listDo = e.target.value;
	const storageList = localStorage.setItem(STORAGE__KEY, listDo);
		console.log(storageList);
		backDate();
	}

}

function backDate() {
	const getStorageList = localStorage.getItem(STORAGE__KEY);
	console.log(getStorageList);
}