let s_width = 500;

if(screen.width>=1600){
	s_width = 600;	
}

if(screen.width<=650){
	s_width = 350;	
}

function plt_surface(o, x_new, y_new)
{
	let data = [{
           z: o,
           x: x_new,
           y: y_new,
           colorscale: 'YlOrRd',
           type: 'surface'
        }];

	let layout = {
	  title: 'Landscape',
	  autosize: false,
	  width: s_width,
	  height: s_width,
	  // margin: {
	  //   l: 65,
	  //   r: 50,
	  //   b: 65,
	  //   t: 90,
	  // }
	};
	// if(screen.width<=650){
	// let config = {responsive: true, displayModeBar: false}
	// }
	// else
	// {
	let config = {responsive: true}
	// }
	Plotly.newPlot('surface_plot', data, layout, config);
}

function plt_scatter(xCurve, o, x_new, y_new)
{
	let data_x = [];
	let data_y = [];

	for(let k=0;k<nop;k++)
	{
		data_x.push(xCurve[k][0]['__ndarray__'][0][0]);
		data_y.push(xCurve[k][0]['__ndarray__'][0][1]);
	}
	let trace = {
		  x: data_x,
		  y: data_y,
		  mode: 'markers',
		  type: 'scatter'
		};

	let trace1 = {
		z: o,
		x: x_new,
        y: y_new,
        colorscale: 'YlOrRd',
		type: 'contour'
		}
	;

	let layout1 = {
	  title: 'Particles - Initial',
	  width: s_width,
	  height: s_width,
	};
	let config = {responsive: true}
	//Plotly.newPlot('scatter_plot_init', data, layout1);
	Plotly.newPlot('scatter_plot_init', [trace,trace1], layout1, config);
}

function plt_scatter_end(xCurve, o, x_new, y_new)
{
	let data_x = [];
	let data_y = [];

	for(let k=0;k<nop;k++)
	{
		data_x.push(xCurve[k][max_iter-1]['__ndarray__'][0][0]);
		data_y.push(xCurve[k][max_iter-1]['__ndarray__'][0][1]);
	}

	let trace = {
		  x: data_x,
		  y: data_y,
		  mode: 'markers',
		  type: 'scatter'
		};

	let trace1 = {
		z: o,
		x: x_new,
        y: y_new,
        colorscale: 'YlOrRd',
		type: 'contour'
		}
	;

	let layout2 = {
	  title: 'Particles - End',
	  width: s_width,
	  height: s_width,
	};
	let config = {responsive: true}
	//Plotly.newPlot('scatter_plot_init', data, layout1);
	Plotly.newPlot('scatter_plot_end', [trace,trace1], layout2, config);
}

let cg_count = 0;
let scatter_count = 0;

function getData(cgCurve)
{
	cg_count++;
	return cgCurve[cg_count];
}

function plt_cg_anim(cgCurve)
{
	let layout_cg = {
	  title: 'Convergence Graph',
	  width: s_width,
	  height: s_width,
	};

	let config = {responsive: true}

	Plotly.plot('convergence_plot',[{
		y: [getData(cgCurve)],
		type:'line'
	}], layout_cg, config);

	let curr_y= 0;
	let interval = setInterval(()=>{
		if (cg_count < max_iter){
			curr_y = getData(cgCurve)
			Plotly.extendTraces('convergence_plot',{y:[[curr_y]]}, [0])
			}
		else
			clearInterval(interval);
	},600);
}

function get_scatterData(data_x,data_y,xCurve)
{
	data_x = [];
	data_y = [];
	scatter_count++;
	for(let k=0;k<nop;k++)
	{
		data_x.push(xCurve[k][scatter_count]['__ndarray__'][0][0]);
		data_y.push(xCurve[k][scatter_count]['__ndarray__'][0][1]);
	}
	return [data_x,data_y]
}

function plt_scatter_anim(xCurve, o, x_new, y_new)
{
	let data_x = [];
	let data_y = [];

		let trace1 = {
			z: o,
			x: x_new,
	        y: y_new,
	        colorscale: 'YlOrRd',
			type: 'contour'
			};

		let layout1 = {
		  title: 'Particles Plot',
		  width: s_width,
		  height: s_width,
		};

		let trace ={};

	let interval = setInterval(()=>{
		if (cg_count < max_iter){
		data = get_scatterData(data_x,data_y,xCurve)
		data_x = data[0];
		data_y = data[1];
		trace = {
			  x: data_x,
			  y: data_y,
			  mode: 'markers',
			  type: 'scatter'
			};
		let config = {responsive: true}
		Plotly.newPlot('scatter_plot_anim', [trace,trace1], layout1, config);
	}
	else
		clearInterval(interval);
	},500);
	
}

function out_vals(z,x,y){
	document.querySelector('#min_z_op').innerHTML = z;
	document.querySelector('#min_z_op').style.fontSize = '30px';
	document.querySelector('#min_xy_op').innerHTML = x+", "+y;
	document.querySelector('#min_xy_op').style.fontSize = '30px';
}
