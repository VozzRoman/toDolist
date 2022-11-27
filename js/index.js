
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
	makeToDoList();
		

	}

}

makeToDoList();

buttonClear.addEventListener('click', onClearBth);

function onClearBth() {
	localStorage.setItem('newList', '[]');
	makeToDoList();
}

function makeToDoList() {
	let dataList = JSON.parse(localStorage.getItem('newList'));
	toDoListContainer.innerHTML = '';
	
	dataList.forEach((test,index) => {
		toDoListContainer.insertAdjacentHTML('beforeend', `
		<li><span>${test}</span>
			<button>Done</button>
			<button class="delete__task" data-taskId="${index}">Delete</button>
		</li>`);
	// const list = document.createElement('li');
	// const span = document.createElement('span');
	// const buttonDone = document.createElement('button');
	// const buttonDel = document.createElement('button');
	// span.textContent = test;
	// buttonDone.textContent = 'Done';
	// buttonDel.textContent = 'Delete';
	// list.appendChild(span);
	// list.append(buttonDel);
	// list.append(buttonDone);
	
	// 	toDoListContainer.append(list);
		
	});
}

toDoListContainer.addEventListener('click', onBthRemove);

function onBthRemove(e) {
	
	if (e.target.className === 'delete__task') {
		console.log('good');
		console.log(e.target);
		console.log(e.target.dataset.taskid);
		getId(e.target.dataset.taskid);
	}
}

function getId(id) {
	const data = JSON.parse(localStorage.getItem('newList'));
	data.splice(id, 1);
	localStorage.setItem('newList', JSON.stringify(data));
	makeToDoList();
}
