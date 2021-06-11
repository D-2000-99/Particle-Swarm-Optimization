function send(data){
console.log(data['arr'])
fetch("/predict", {
    method: 'POST', 
    redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    	data_parsed = JSON.parse(data)
     	Z = data_parsed.Z;
     	X = data_parsed.X;
     	Y = data_parsed.Y;
     	O = data_parsed.Plot_vals.O;
     	X_draw= data_parsed.Plot_vals.X_draw;
     	Y_draw= data_parsed.Plot_vals.Y_draw;
     	X_mesh= data_parsed.Plot_vals.X_mesh;
     	Y_mesh= data_parsed.Plot_vals.Y_mesh;
     	X_curve=data_parsed.Plot_vals.X_curve;
        CGCurve = data_parsed.Plot_vals.CGCurve

    	plt_surface(O, X_draw, Y_draw)
        plt_scatter(X_curve, O, X_draw, Y_draw)
        plt_scatter_end(X_curve, O, X_draw, Y_draw)
        plt_cg_anim(CGCurve)
        plt_scatter_anim(X_curve, O, X_draw, Y_draw)
        out_vals(Z,X,Y)
        vis.style.display = 'grid';
        out_div.style.display = 'grid';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
