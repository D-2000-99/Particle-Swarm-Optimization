//Minimization Objective TB
const res_tb = document.querySelector("#result_tb");

//Constraints TB
const num_const_div = document.querySelector("#num_const_div");
const num_const_tb = document.querySelector("#num_const_tb");
const num_const_sel = document.querySelector("#num_const_select");
	
//UBLB TBs
const ub1 = document.querySelector("#ub1_tb");
const ub2 = document.querySelector("#ub2_tb");
const lb1 = document.querySelector("#lb1_tb");
const lb2 = document.querySelector("#lb2_tb");

//nOP TB
const nOP = document.querySelector("#nOP");

//Iter TB
const num_iter_tb = document.querySelector("#Iter");

//////////////BUTTONS DECLARATION//////////////////////
const const_tb = document.querySelector("#result_tb");
const x_btn = document.querySelector("#x_btn");
const y_btn = document.querySelector("#y_btn");
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const mul = document.querySelector('#mul');
const div = document.querySelector("#div");
const sq = document.querySelector("#sq");
const pow = document.querySelector("#pow");
const cos = document.querySelector("#cos_button");
const sin = document.querySelector("#sin_button");
const tan =  document.querySelector("#tan_button");
const sum = document.querySelector("#sum_button");
const p_left = document.querySelector("#p_left");
const p_right = document.querySelector("#p_right");
const container = document.querySelector('#container')
const nums = document.querySelector('#nums');
const clear = document.querySelector('#clear');
////EQUALITY////
const gt_btn = document.querySelector("#gt");
const lt_btn = document.querySelector("#lt");
const gteq_btn = document.querySelector("#gteq");
const lteq_btn = document.querySelector("#lteq");
const eq_btn = document.querySelector("#eq");
const nteq_btn = document.querySelector("#nteq");
const or = document.querySelector("#or_button");
const and = document.querySelector("#and_button");

gt_btn.style.visibility = 'hidden';
lt_btn.style.visibility = 'hidden';
gteq_btn.style.visibility = 'hidden';
lteq_btn.style.visibility = 'hidden';
eq_btn.style.visibility = 'hidden';
nteq_btn.style.visibility = 'hidden';
or.style.visibility = 'hidden';
and.style.visibility = 'hidden';

//Submits
const sub = document.querySelector('#submit');
const sub_const = document.querySelector('#submit_const');
const sub_lbub = document.querySelector('#submit_lbub');
const sub_nop = document.querySelector('#submit_nop');
const sub_iter = document.querySelector('#submit_iter');

//Loader//
const load = document.querySelector(".loader");
load.style.display = 'none';
///////////////////////////////////////////////////////////////////////////////
let vis = document.querySelector('#vis');
vis.style.display = 'none';

let out_div = document.querySelector('#output');
out_div.style.display = 'none';
///////////////////////////////////////////////////////////////////////////////
let str1="";
let arr= [];
let num_count = 0;
let pow_mode = false;
let x=5;
let min_obj = '';
let obj_bool = true;
//constraint_bools
let const1_bool = false;
let const2_bool = false;
let const3_bool = false;

let constraint_counter = 1;
let constraints_arr = [];

//lbub bool
let ub1_bool = false;
let ub2_bool = false;
let lb1_bool = false;
let lb2_bool = false;

let bound_counter = 1;
let bound_arr = [];
//nop
let nop_bool = false;
let nop = "";

//num_Iter
let num_iter_bool = false;
let max_iter = "";

function OnNum(i)
{//for numbered buttons
	if (num_count === 0)
	{	
		if (!pow_mode)
		str1 = str1.concat('[');
	}
	str1 = str1.concat(i.toString());
	console.log(str1);
	
	num_count = ++num_count;
	console.log(num_count);
	//Output
	c_exp = clean_exp(str1);
	res_print(c_exp);
	invalid_ip(c_exp);
}


///===START STATE===========:
//Highlight min
bg_highlight(res_tb);
sub_const.style.display = 'none';
sub_lbub.style.display = 'none';
sub_nop.style.display = 'none';
sub_iter.style.display = 'none';

function invalid_ip(c_exp)
{
	if (parseInt(c_exp)>50)
	{
		sub_lbub.disabled = true;
	}

	else if (parseInt(c_exp)<-50)
	{
		sub_lbub.disabled = true
	}

	else
	{
		sub_lbub.disabled = false;
		sub_nop.disabled = false;
		sub_iter.disabled = false;
	}

	if (parseInt(c_exp)<0||parseInt(c_exp)>50)
	{
		sub_nop.disabled = true
		sub_iter.disabled = true
	}
	else
	{
		sub_nop.disabled = false
		sub_iter.disabled = false
	}
}