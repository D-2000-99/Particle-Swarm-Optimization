function disable_power()
{
	//str1 = str1.concat(")");
	pow_mode = false;
}

function paran_test(str1)
{	let counter= 0;
	i='';
	console.log('paran_test',str1);
	for (i of str1)
		{	

			if (i==='(') ++counter;
			if (i===')') --counter;
			console.log(i,counter);
		}
	if (counter===0) 
		{
			console.log('okay', counter);
			return(true);
		}
	else if (counter>0) 
		{
			console.log('Too many (', counter);
			return(false);
		}
	else if (counter<0) 
		{
			console.log('Too many )', counter);
			return(false);
		}
}

function clean_exp(str1)
{	//On-the-fly printing to textbox
	let c_exp = str1;
	let x = str1.length;
	while (x>=0)
	{
		i = str1[x];
		if (i === '[')
		{
			c_exp = [c_exp.slice(0,x),'',c_exp.slice(x+1)].join('');
		}
		if (i === ']')
		{
			console.log(i,' at ', x);
			c_exp = [c_exp.slice(0,x),'',c_exp.slice(x+1)].join('');
		}
		if (i === '{')
		{
			console.log(i,' at ', x);
			c_exp = [c_exp.slice(0,x),'',c_exp.slice(x+1)].join('');
		}
		if (i === '}')
		{
			console.log(i,' at ', x);
			c_exp = [c_exp.slice(0,x),'',c_exp.slice(x+1)].join('');
		}
		x--;

	}
	return c_exp;
}


function res_print(c_exp)
{ //!!!!!!!!!!!!!!!!!!!!!!!<------------------PRINTS TO RESULTS---------------------->!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if (obj_bool)
	{
		res_tb.value=(c_exp);
		//res_tb.style.background ='yellow'
	}
	else if (const1_bool)
		document.querySelector("#const_tb1").value=(c_exp);
	else if (const2_bool)
		document.querySelector("#const_tb2").value=(c_exp);
	else if (const3_bool)
		document.querySelector("#const_tb3").value=(c_exp);
	else if (ub1_bool)
		ub1.value=(c_exp);
	else if (ub2_bool)
		ub2.value=(c_exp);
	else if (lb1_bool)
		lb1.value=(c_exp);
	else if (lb2_bool)
		lb2.value=(c_exp);
	else if (nop_bool)
		nOP.value=(c_exp);
	else if (num_iter_bool)
		num_iter_tb.value=(c_exp);
}

let nums_1_3 = document.querySelector('#nums_1-3');
let nums_4_6 = document.querySelector('#nums_4-6');
let nums_7_9 = document.querySelector('#nums_7-9');
let nums_0 = document.querySelector('#nums0');

//On-page number elements
for(let i=0;i<10;i++)
{   
	let btn = document.createElement(`button`);
    btn.innerHTML = `${i}`;
    if(i>0 && i<=3){
    	nums_1_3.appendChild(btn);
    }
    if(i>3 && i<=6){
    	nums_4_6.appendChild(btn);
    }
    if(i>6 && i<=9){
    	nums_7_9.appendChild(btn);
    }
    if(i==0){
    	nums_0.appendChild(btn);
    }
    btn.setAttribute('onclick',`OnNum(${i})`);
}

/////////////////////////////////Parser_code//////////////////////////////////
plus.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]+");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

minus.addEventListener('click', (e)=>{
	num_count=0
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]-");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

mul.addEventListener('click', (e)=>{
	num_count=0
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]*")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

div.addEventListener('click', (e)=>{
	num_count=0
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]/")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

x_btn.addEventListener('click', (e)=>{
	//if (pow_mode){disable_power()}
	str1 = str1.concat("[x1")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

y_btn.addEventListener('click', (e)=>{
	//if (pow_mode){disable_power()}
	str1 = str1.concat("[x2")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

function np_term(term){
	if (pow_mode){disable_power()}
	num_count=0;
	str1 = str1.concat(")");
	let x = str1.length;
	let curly = false ;
	while (x>=0)
	{
		i = str1[x];
		if (i === '{')
		{	
			console.log(i,' at ', x);
					str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
					str1 = [str1.slice(0,x),'[',term,'',str1.slice(x)].join('');
					curly = true;
					break;
		}
		x--;
	}

	if (!curly){
		x = str1.length;
		while (x>=0)
		{
			i = str1[x];
			if (i === '[')
			{
				console.log(i,' at ', x);
				str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
				str1 = [str1.slice(0,x),'[',term,'(',str1.slice(x)].join('');
				break;
			}
			x--;
		}
	}
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
}

sq.addEventListener('click', (e)=>{
	term = 'np.square'
	np_term(term)
});

pow.addEventListener('click', (e)=>{
	pow_mode = true;
	num_count=0;
	let pow_term = 'np.power'
	let x = str1.length;
	let curly=false;
	while (x>=0)
	{
		i = str1[x];
		if (i === '{')
		{
			console.log(i,' at ', x);
			str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
			str1 = [str1.slice(0,x),'[',pow_term,'(',str1.slice(x),'),('].join('');
			curly = true;
			break;
		}
		x--;
	}

	if(!curly)
	{
	x = str1.length;
		{
			while (x>=0)
			{	i = str1[x];
				if (i === '[')
				{
					console.log(i,' at ', x);
					str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
					str1 = [str1.slice(0,x),'[',pow_term,'(',str1.slice(x),','].join('');
					break;
				}
				x--;
			}
		}
	}

	console.log(x)
	console.log(str1)
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});


cos.addEventListener('click', (e)=>{
	term = 'np.cos'
	np_term(term)
});

sin.addEventListener('click', (e)=>{
	term = 'np.sin'
	np_term(term)
});

sum.addEventListener('click', (e)=>{
	term = 'np.sum'
	np_term(term)
});

tan.addEventListener('click', (e)=>{
	term = 'np.tan'
	np_term(term)
});

or.addEventListener('click', (e)=>{
	str1 = str1.concat(" or ")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

and.addEventListener('click', (e)=>{
	str1 = str1.concat(" and ")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

p_left.addEventListener('click', (e)=>{
	//if (pow_mode){disable_power()}
	str1 = str1.concat("{(")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});
	
p_right.addEventListener('click', (e)=>{
	if (pow_mode){disable_power()}
	str1 = str1.concat("})")
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

clear.addEventListener('click', (e)=>{
	str1='';
	res_print('');
})

//<--------------------EQUALITY PARSE------------------------>

gt_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]>");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

lt_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]<");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

gteq_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]>=");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

lteq_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]<=");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

eq_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]==");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});

nteq_btn.addEventListener('click', (e)=>{
	num_count=0;
	//if (pow_mode){disable_power()}
	str1 = str1.concat("]!=");
	console.log(str1);
	//Output
	c_exp = clean_exp(str1)
	res_print(c_exp);
});
//////////////////////////////////////////////END OF PARSER CODE////////////////////////////////////////////////
