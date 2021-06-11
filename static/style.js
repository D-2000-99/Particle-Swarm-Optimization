function hide_buttons()
{
	x_btn.style.visibility = 'hidden';
	y_btn.style.visibility = 'hidden';
	plus.style.visibility = 'hidden';
	minus.style.visibility = 'hidden';
	mul.style.visibility = 'hidden';
	div.style.visibility = 'hidden';
	gt_btn.style.visibility = 'hidden';
	lt_btn.style.visibility = 'hidden';
	gteq_btn.style.visibility = 'hidden';
	lteq_btn.style.visibility = 'hidden';
	eq_btn.style.visibility = 'hidden';
	nteq_btn.style.visibility = 'hidden';
	p_left.style.visibility = 'hidden';
	p_right.style.visibility = 'hidden';
	sq.style.visibility = 'hidden';
	pow.style.visibility = 'hidden';
	or.style.visibility = 'hidden';
	and.style.visibility = 'hidden';
	cos.style.visibility = 'hidden';
	sin.style.visibility = 'hidden';
	sum.style.visibility = 'hidden';
	tan.style.visibility = 'hidden';
}

function disable_buttons()
{
	x_btn.style.disabled = 'true';
	y_btn.style.disabled = 'true';
	plus.style.disabled = 'true';
	minus.style.disabled = 'true';
	mul.style.disabled = 'true';
	div.style.disabled = 'true';
	gt_btn.style.disabled = 'true';
	lt_btn.style.disabled = 'true';
	gteq_btn.style.disabled = 'true';
	lteq_btn.style.disabled = 'true';
	eq_btn.style.disabled = 'true';
	p_left.style.disabled = 'true';
	p_right.style.disabled = 'true';
	sq.style.disabled = 'true';
	pow.style.disabled = 'true';
	or.style.disabled = 'true';
	and.style.disabled = 'true';
	cos.style.disabled = 'true';
	sin.style.disabled = 'true';
	sum.style.disabled = 'true';
	tan.style.disabled = 'true';
}

function bg_highlight(ele)
{
	ele.style.border='2px solid #888';
	ele.style.borderRadius = '10px';
	ele.style.background='#f7f7f7';
}

function bg_remove_highlight(ele)
{
	ele.style.border='';
	ele.style.borderRadius = '';
	ele.style.background='';
}

function falsify_bools()
{	
	obj_bool = false;

const1_bool = false;
	const2_bool = false;
	const3_bool = false;
	ub1_bool = false;
	ub2_bool = false;
	lb1_bool = false;
	lb2_bool = false;
	nop_bool = false;
}
