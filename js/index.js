
const enterTask = document.querySelector('#newTask');
const toDoListContainer = document.querySelector('.todo-list');
const buttonClear = document.querySelector('#clearList');
console.log(enterTask);


enterTask.addEventListener('keydown', onPressEnter);
function onPressEnter(e) {
if (e.key === 'Enter') {
	let listDo = e.target.value;
	let data = JSON.parse(localStorage.getItem('newList'));//для того чтоюбы получить массив задач нужно создать
	// пустой обьект с ключов в Локалсторидж а потом в него записывать таски и получать их по этому ключу
	console.log(data);
	if (!data) {
		data = [];
	}
	//но для состояния выполнено кнопки ДАН нужно пушить не массив тасков а обьект с свойством выполнено
	data.push({
		value: listDo,
		state: 'pending',
	});
	
		console.log(data);
		const dataToString = JSON.stringify(data);
		localStorage.setItem('newList', dataToString);
		e.target.value = ''; // очищяем инпут после ввода таска
	makeToDoList();
		

	}

}

makeToDoList();// запускаем функцию сразу что бы были видны все таски при загрузки страници

buttonClear.addEventListener('click', onClearBth);

function onClearBth() {
	localStorage.setItem('newList', '[]');//для того что бы удалить такси нужно что бы был путсой массив
	makeToDoList();
}

function makeToDoList() {
	let dataList = JSON.parse(localStorage.getItem('newList'));
	toDoListContainer.innerHTML = '';// очищяем контейнер для того что бы таски не повторялись при добавлении
	
	dataList.forEach(({value, state},index) => { // деструктуризировали обьект который пушим (ДАТА)
		toDoListContainer.insertAdjacentHTML('beforeend', `
		<li><span class="${state}">${value}</span>
			<button class="done__task" data-taskId="${index}">Done</button>
			<button class="delete__task" data-taskId="${index}">Delete</button>
		</li>`);
	//ВАРИАНТ НЕ ШАЛБОННО
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

toDoListContainer.addEventListener('click', onBthRemoveAndDone);



function onBthRemoveAndDone(e) {
	
	if (e.target.className === 'delete__task') {
		console.log('good');
		console.log(e.target);
		console.log(e.target.dataset.taskid);
		getIdDleteTask(e.target.dataset.taskid);
	}
	if (e.target.className === 'done__task') {
		getIdDoneTask(e.target.dataset.taskid);
		
	}
}

//функция кнопки удалить таску
function getIdDleteTask(id) { //находим таксу по Айдишнику
	const data = JSON.parse(localStorage.getItem('newList'));
	data.splice(id, 1);
	localStorage.setItem('newList', JSON.stringify(data));
	makeToDoList();
}
//функция кнопки выполнено ДАН
function getIdDoneTask(id) {
	const data = JSON.parse(localStorage.getItem('newList'));
	data[id] = {
		...data[id],
		state:'done',
	}
	localStorage.setItem('newList', JSON.stringify(data));
	makeToDoList();
}


//-------Кнопка Дисaбле--------//

const formBth = document.querySelector('.from__bth');
console.log(formBth);

formBth.addEventListener('click', onBthClick);

function onBthClick(e) {
	e.preventDefault();
	if(e.target.className === 'just__bth')
		console.log('ok');
	e.target.disabled = true;
}