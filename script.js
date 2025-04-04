//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit',function (event) {

	event.preventDefault();
	const age=document.getElementById('age').value;
	const name=document.getElementById('name').value;
	if(age === '' || name === '')
	{
		alert('Please enter valid details');
		return;
	}
	new Promise((resolve,reject) => {
		if (parseInt(age) >= 18) {
			setTimeout(() =>{
				resolve();
			},4000);
		} else {
			reject();
		}
	}).then(() => {
		alert('Welcome, . You can vote.');
	}).catch(() =>{
		alert('Oh sorry . You aren't old enough.')
	});
	
});