function constraints()
{
	//sub.style.visibility = 'hidden';
	num_const_sel.disabled = 'true';
	sub_const.style.display = 'block';
	sub.remove();
	gt_btn.style.visibility = 'visible';
	lt_btn.style.visibility = 'visible';
	gteq_btn.style.visibility = 'visible';
	lteq_btn.style.visibility = 'visible';
	eq_btn.style.visibility = 'visible';
	nteq_btn.style.visibility = 'visible';
	or.style.visibility = 'visible';
	and.style.visibility = 'visible';

	obj_bool = false;
	const1_bool = true;
	let num_of_constraints = num_const_sel.options.selectedIndex;
	let count = 0;
	console.log('Number of Constraints: ',num_of_constraints);

	for(let i=1; i<=num_of_constraints; i++)
	{
		let inp = document.createElement(`INPUT`);
		inp.setAttribute("type","text");
		inp.disabled = true;
		inp.visibility = 'hidden';
		inp.setAttribute("id",`const_tb${i}`);
		inp.style.width = '70%';
		inp.style.display = 'block';
	    num_const_div.appendChild(inp);
	}

	//Highlights
		bg_remove_highlight(res_tb);
		bg_highlight(document.querySelector("#const_tb1"))
	//constraint_input(count,num_of_constraints)
}

////////////////////////////////////////////END OF CONSTRAINTS CODE///////////////////////////////////////////

////////////////////////////////////////////LBUB CODE///////////////////////////////////////////
function lbub()
{	
	num_const_sel.disabled = 'true';
	sub.remove();
	sub_const.remove();
	sub_lbub.style.display = 'block';
	//Visibility_toggle
		str1 ="";
		hide_buttons();
		falsify_bools();
		sub_const.style.visibility = 'hidden';
		minus.style.visibility = 'visible';
	
	//if (bound_counter==1)
		ub1_bool = true;
	//Highlights
	bg_highlight(ub1);
	bg_remove_highlight(res_tb);
	bg_remove_highlight(document.querySelector("#const_tb1"));
	bg_remove_highlight(document.querySelector("#const_tb2"));
	bg_remove_highlight(document.querySelector("#const_tb3"));
}
////////////////////////////////////////////END OF LBUB CODE///////////////////////////////////////////

////////////////////////////////////////////nOP CODE///////////////////////////////////////////
function nOP_func()
{	
	sub_lbub.remove();
	sub_nop.style.display = 'block';
	minus.style.visibility = 'hidden';
	sub_lbub.style.visibility = 'hidden'
	str1="";
	falsify_bools();
	nop_bool = true;
	//Highlight
	bg_remove_highlight(lb2);
	bg_highlight(nOP);
}
////////////////////////////////////////////END OF nOP CODE///////////////////////////////////////////

////////////////////////////////////////////num_ITER CODE///////////////////////////////////////////
function num_Iter_func()
{	
	sub_nop.remove()
	sub_iter.style.display = 'block';
	str1="";
	falsify_bools();
	num_iter_bool = true;
	//Highlight
	bg_remove_highlight(nOP);
	bg_highlight(num_iter_tb);
}
////////////////////////////////////////////END OF num_ITER CODE///////////////////////////////////////////