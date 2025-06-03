document.getElementById('nav-btn').addEventListener('click',function(){
	document.body.style.background= '#' + Math.floor(Math.random()*16777215).toString(16);
})

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);



// card click 01
document.getElementById('btn-1').addEventListener('click',function(){
	const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 01')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	
	const taskOne=document.getElementById('task-1').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne} 
	on `
	messegeContainer.appendChild(p);
	
});

// second page btn setting
document.getElementById('second-page').addEventListener('click',function(){
	window.location.href="index2.html"
})

// history delete btn
document.getElementById('history-delete-btn').addEventListener('click',function(event){
	event.preventDefault();

const messegeContainer=document.getElementById('messege-container');
messegeContainer.innerText=''

	
})

// date 


const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', };
const formattedDate = today.toLocaleDateString('en-GB', options);
document.getElementById('current-date').textContent=formattedDate;

//  function updateDateTime() {
//       const now = new Date();
//       const dateTimeString = now.toLocaleString('en-GB'); // Formats date and time based on user's locale
//       document.getElementById("current-date").textContent = dateTimeString;
//     }
// 	setInterval(updateDateTime, 1000)
// 	updateDateTime()



// for time copy from chat gpt
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // এক অঙ্কের সংখ্যা হলে সামনে শূন্য যোগ করা
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  const realTime= document.getElementById('clock').textContent = currentTime;
  
}

// প্রতি সেকেন্ডে সময় আপডেট করা
// setInterval(updateClock, 1000);
updateClock(); // পেজ লোডের সময় সাথে সাথে আপডেট


// card btn 2
document.getElementById('btn-2').addEventListener('click',function(event){
	event.preventDefault();

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 02')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	console.log(messegeContainer)
	const taskOne=document.getElementById('task-2').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne}`
	messegeContainer.appendChild(p);

})
// card btn -3
document.getElementById('btn-3').addEventListener('click',function(event){
	event.preventDefault();

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 03')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	console.log(messegeContainer)
	const taskOne=document.getElementById('task-3').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne}`
	messegeContainer.appendChild(p);

})
// card btn =4
document.getElementById('btn-4').addEventListener('click',function(event){
	event.preventDefault();

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 04')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	console.log(messegeContainer)
	const taskOne=document.getElementById('task-4').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne}`
	messegeContainer.appendChild(p);

})
// btn-5
document.getElementById('btn-5').addEventListener('click',function(event){
	event.preventDefault();

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 05')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	console.log(messegeContainer)
	const taskOne=document.getElementById('task-5').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne}`
	messegeContainer.appendChild(p);

})
// btn-6
document.getElementById('btn-6').addEventListener('click',function(event){
	event.preventDefault();

const completeTask=document.getElementById('complete-task').innerText
	const result=parseInt(completeTask)
	
	const task= document.getElementById('task-number').innerText;
	const taskNumber=parseInt(task);
	const work = 1;

	alert('task complete 06')
	const remaineTask=taskNumber - work;
	document.getElementById('task-number').innerText=remaineTask;
	const totalTask=result + work;
	document.getElementById('complete-task').innerText=totalTask;
	this.disabled = true;
	

	
	const messegeContainer=document.getElementById('messege-container');
	console.log(messegeContainer)
	const taskOne=document.getElementById('task-6').innerText
	const p =document.createElement('p');
	p.innerText=`
	You have complete ${taskOne}`
	messegeContainer.appendChild(p);
	
})






