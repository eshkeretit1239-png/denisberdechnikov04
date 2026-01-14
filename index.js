function submitData(e) {
	/* Для работы с формой и вывода результата */
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Ваш доход: ${res.toFixed(2)} руб`;
}

function calculate(sum, day, percent, isCapital) {
	if (isCapital === 'yes')
	return stoncks = (sum * day * percent/365)/100;
	else 
		return stoncks = sum * (1 + (percent/100)/365)**day - sum;

/* TeODO: Нужно написать данную функцию */


	/* TODO: Вернуть получившееся значение */
}
console.log(calculate)
