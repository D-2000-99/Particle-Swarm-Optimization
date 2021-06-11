//setInterval(()=> {console.log(str1)},1000);
//SUBMIT BUTTON!!
sub.addEventListener('click', (e)=>{
	if (pow_mode){disable_power()}

	let x = str1.length;
	while (x>=0)
	{
		i = str1[x];
		if (i === '[')
		{
			console.log(i,' at ', x);
			str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
		}
		if (i === ']')
		{
			console.log(i,' at ', x);
			str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
		}
		if (i === '{')
		{
			console.log(i,' at ', x);
			str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
		}
		if (i === '}')
		{
			console.log(i,' at ', x);
			str1 = [str1.slice(0,x),'',str1.slice(x+1)].join('');
		}
		x--;
	}

	//Output
	if (paran_test(str1))
	{
		console.log('Ans:', str1);
		min_obj = str1;
		str1 = "";
	}
	c_exp = clean_exp(str1);
	//res_print(c_exp);
	if (num_const_sel.options.selectedIndex>0)
		constraints();
	else
		lbub();
});

//Constraint button
sub_const.addEventListener('click', (e)=>{
	++constraint_counter;
	if (constraint_counter<=num_const_sel.options.selectedIndex)
	{
		switch(constraint_counter)
		{
			// case 1: const1_bool = true;
			// 		const2_bool = false;
			// 		const3_bool = false;
			// 		break;
			case 2: const1_bool = false;
					const2_bool = true;
					const3_bool = false;
					constraints_arr.push(clean_exp(str1));
					str1='[';
					//Highlights
					bg_remove_highlight(document.querySelector("#const_tb1"))
					bg_highlight(document.querySelector("#const_tb2"))
					break;
			case 3: const1_bool = false;
					const2_bool = false;
					const3_bool = true;
					constraints_arr.push(clean_exp(str1));
					str1='[';
					//Highlights
					bg_remove_highlight(document.querySelector("#const_tb2"))
					bg_highlight(document.querySelector("#const_tb3"))
					break;
		}
	}

	else
	{
		constraints_arr.push(clean_exp(str1));
		lbub();
	}
	
});

sub_lbub.addEventListener('click', (e)=>{
	++bound_counter;
	if (bound_counter<=4)
	{
		switch(bound_counter)
		{
			// case 1: 
			case 2: ub1_bool = false;
					ub2_bool = true;
					lb1_bool = false;
					lb2_bool = false;
					bound_arr.push(Number(clean_exp(str1)));
					str1='';
					//Highlight
					bg_remove_highlight(ub1);
					bg_highlight(ub2);
					break;
			case 3: ub1_bool = false;
					ub2_bool = false;
					lb1_bool = true;
					lb2_bool = false;
					bound_arr.push(Number(clean_exp(str1)))
					str1='';
					bg_remove_highlight(ub2);
					bg_highlight(lb1);
					break;
			case 4: ub1_bool = false;
					ub2_bool = false;
					lb1_bool = false;
					lb2_bool = true;
					bound_arr.push(Number(clean_exp(str1)))
					str1='';
					bg_remove_highlight(lb1);
					bg_highlight(lb2);
					break;
		}
	}

	else
	{
		bound_arr.push(Number(clean_exp(str1)))
		nOP_func()
	}
});

sub_nop.addEventListener('click', (e)=>{
	nop = clean_exp(str1)
	str1 = "";
	num_Iter_func();
});

sub_iter.addEventListener('click', (e)=>{
	max_iter = clean_exp(str1)
	str1 = "";
	send_data = {arr: [num_const_sel.options.selectedIndex, constraints_arr ,min_obj, bound_arr, Number(nop), Number(max_iter)]}
	console.log(send_data["arr"]);
	send(send_data);
});