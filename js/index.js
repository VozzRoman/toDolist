
const enterTask = document.querySelector('#newTask');
const toDoListContainer = document.querySelector('.todo-list');
const buttonClear = document.querySelector('#clearList');
console.log(enterTask);


enterTask.addEventListener('keydown', onPressEnter);
function onPressEnter(e) {
if (e.key === 'Enter') {
	let listDo = e.target.value;
	let data = JSON.parse(localStorage.getItem('newList'));
	console.log(data);
	if (!data) {
		data = [];
	}
		data.push(listDo);
		console.log(data);
		const dataToString = JSON.stringify(data);
		localStorage.setItem('newList', dataToString);
		e.target.value = '';



		
		// const storageList = localStorage.setItem(STORAGE__KEY, listDo);
		
		// console.log(storageList);
		// toDoListContainer.append(makeToDoList());
		

	}

}



function makeToDoList() {
	const getStorageList = localStorage.getItem(STORAGE__KEY);
	const list = document.createElement('li');
	const span = document.createElement('span');
	const buttonDone = document.createElement('button');
	const buttonDel = document.createElement('button');
	span.innerHTML = getStorageList;
	buttonDone.textContent = 'Done';
	buttonDel.textContent = 'Delete';
	list.appendChild(span);
	list.append(buttonDel);
	list.append(buttonDone);
	return list;
}
