/******w***********
    
    Project 3 Javascript
    Name: Eric Timperman
    Date: July 20th 2024
    Description: Javascript for Project 3

******************/

function validate(e){
	hideErrors();
	if(formHasErrors()){
		e.preventDefault();
		return false;
	}

	return true;
}




function formHasErrors(){
	let errorFlag = false;
	let requiredFields = ["name", "phone", "email", "message"];

	for (let i = 0; i < requiredFields.length; i++){
		if(!formFieldHasInput(document.getElementById(requiredFields[i]))){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			isFirstError(errorFlag, requiredFields[i]);
			errorFlag = true;
		}

		else if (requiredFields[i] == "phone") {
			let phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/); //src: https://ihateregex.io/expr/phone/
			if (!phoneRegex.test(document.getElementById("phone").value)){
				isFirstError(errorFlag, requiredFields[i]);
				errorFlag = true;
				document.getElementById("invalidPhone_error").style.display = "block";
			}
		}

		else if (requiredFields[i] == "email") {
			let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);//source: https://regexr.com/3e48o
			if(!emailRegex.test(document.getElementById("email").value)){
				isFirstError(errorFlag, requiredFields[i]);
				errorFlag = true;
				document.getElementById("invalidEmail_error").style.display = "block";
			}
		}	



	}

	
	return errorFlag;
}

function isFirstError(flag, field) {
	if (!flag) {
		document.getElementById(field).focus();
		document.getElementById(field).select();

	}

}

function trim(str) 
{
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement){
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{

		return false;
	}
	

	return true;
}

function resetForm(e){
	if ( confirm('Clear form?') ){
		hideErrors();
		
		document.getElementById("name").focus();

		return true;
	}

	e.preventDefault();
	

	return false;	
}

function hideErrors(){
	let errors = document.getElementsByClassName("error");
	for (let i = 0; i < errors.length; i++){
		errors[i].style.display = "none";
	}
}

function load(){
	hideErrors();
	document.getElementById("contact").addEventListener("submit", validate);//Calls validate on submit
	document.getElementById("contact").reset();//resets the form on refresh
	document.getElementById("clear").addEventListener("click", resetForm);
}


document.addEventListener("DOMContentLoaded", load);


/*
TODO
*Lorem Ipsum (or any other “ipsum”) is not allowed for your project.
(any page not validated will result in a deduction of 1 mark per unvalidated page (up to 2 marks maximum) ☹ ). 
There must be at least two headings of different sizes used on the home page. There must also be at least one image included on the page.
At least two goods or services must be included. Images and appropriate headings should be included for each good/service, along with a detailed description. 



Use media queries to ensure that your site is responsive in multiple resolutions.



*/