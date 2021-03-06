# -*- coding: utf-8 -*-
"""PSO_input - flask.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1rIpWYe-CwXNQqIMgMF2VcrnvOtf_yKDA

#Particle Swarm Optimizer(PSO) - Minimization
"""

import numpy as np
#import matplotlib.pyplot as plt
#import plotly.graph_objects as go

"""#Function definitions"""

def getUpperLowerBound(bounds):
  # ub1 = int(input("Enter 1st Upper Bound value: "))
  # ub2 = int(input("Enter 2nd Upper Bound value: "))
  # lb1 = int(input("Enter 1st Lower Bound value: "))
  # lb2 = int(input("Enter 2nd Lower Bound value: "))
  # ub = np.array([ub1,ub2])
  # lb = np.array([lb1,lb2])
  ub1 = bounds[0]
  ub2 = bounds[1]
  lb1 = bounds[2]
  lb2 = bounds[3]
  ub = np.array([ub1,ub2])
  lb = np.array([lb1,lb2])
  return(ub,lb)

def constraintCalc(num_const, constList):
  #nConst = int(input("Number of Constraints: "))
  nConst = num_const
  for i in range(nConst):
    const = input(f'Constraint {i}: ')
    constList.append(const)
  return constList

def objCalc(x, x1, x2, obj):
  #return np.sum(np.square(x))
  #return 1 * (x1 + x2)
  evobj = eval(obj)
  return evobj

def ObjectiveFunction(x_inp,constList,obj):
  x = x_inp[0]
  x1 = x[0]
  x2 = x[1]
  feasibleList=[]
  #Constraints
  for i in constList:
    feasibleList.append(eval(i))
    #Example constraints
      # const1 = (x2<=3.2) or (x2>=6.4)
      # const2 = (x1**2+x2**2) >= 1
      # const4 = (2*((x1-2)**2)+(x2+4)**2) >= 2
      # const3 = x1 != x2

  #Objective Function - Minimization
  ofunc = objCalc(x, x1, x2, obj)

  if all(feasibleList):
    #o=sum(x.^2)
    o = ofunc
  else:
    #Solution not feasible(Infeasible)
    #o=sum(x^2)+200
    o = ofunc +200
  return o


"""#Inputs

##Example Inputs:
###Eg.1
    Number of Constraints: 0
    Input Minimization Objective: 1 * (x1 + x2)
    Enter 1st Upper Bound value: 7
    Enter 2nd Upper Bound value: 7
    Enter 1st Lower Bound value: 2
    Enter 2nd Lower Bound value: 2
    Specify number of particles: 5
    Specify number of Iterations: 10

###Eg.2
    Number of Constraints: 4
    Constraint 0: (x2<=3.2) or (x2>=6.4)
    Constraint 1: (x1**2+x2**2) >= 1
    Constraint 2: (2*((x1-2)**2)+(x2+4)**2) >= 2
    Constraint 3: x1 != x2
    Input Minimization Objective: np.sum(np.square(x))
    Enter 1st Upper Bound value: 10
    Enter 2nd Upper Bound value: 10
    Enter 1st Lower Bound value: -10
    Enter 2nd Lower Bound value: -10
    Specify number of particles: 10
    Specify number of Iterations: 30

###Eg. 3 
    Number of Constraints: 0
    Input Minimization Objective: np.cos(np.sin(x1)+np.sin(x2))
    Enter 1st Upper Bound value: 10
    Enter 2nd Upper Bound value: 10
    Enter 1st Lower Bound value: 4
    Enter 2nd Lower Bound value: 4
    Specify number of particles: 10
    Specify number of Iterations: 30
"""

def main_prog(num_const, const, min_obj, bounds, nop, iters):##EDIT FOR INPUTS!!!!!
	nVar = 2
	#fobj
	wMax = 0.9
	wMin = 0.2
	c1 = 2
	c2 = 2
	#Forplots
	cgCurve = []
	wCurve = []
	xCurve = []

	print(num_const, const, min_obj, bounds, nop, iters)
	currentX = []
	constList = []
	constList = const#constraintCalc(num_const, const)
	obj = min_obj
	[ub, lb] = getUpperLowerBound(bounds)
	nOP = nop
	maxIter = iters
	print(ub,lb)
	vMax = (ub-lb)*0.2
	print("vMax=", vMax)
	vMin = -vMax
	print("vMix=",vMin)

	Swarm = {"Particles": [],"GBEST":{"X": np.zeros((1, nVar)), "O": np.inf}}

	for k in range(nOP):
	  X = (ub-lb)*np.random.rand(1,nVar)+lb
	  V = np.zeros((1, nVar))
	  PBEST_X = np.zeros((1, nVar))
	  PBEST_O = np.inf
	  Swarm["Particles"].append({"X": X,"V":V,"O": np.inf,"PBEST":{"X": PBEST_X,"O": PBEST_O}})
	  xCurve.append([])

	"""#Main Code"""

	for t in range(maxIter):
	  for k in range(nOP):
	    for n in range(nVar):
	      if Swarm["Particles"][k]["X"][0][n]>ub[n]:
	          Swarm["Particles"][k]["X"][0][n] = ub[n]
	      if Swarm["Particles"][k]["X"][0][n]<lb[n]:
	          Swarm["Particles"][k]["X"][0][n] = lb[n]

	    currentX = Swarm["Particles"][k]["X"]
	    Swarm["Particles"][k]["O"] = ObjectiveFunction(currentX, constList, obj)

	    #Personal Best
	    if Swarm["Particles"][k]["O"] < Swarm["Particles"][k]["PBEST"]["O"]:
	      Swarm["Particles"][k]["PBEST"]["X"] = currentX
	      Swarm["Particles"][k]["PBEST"]["O"] = Swarm["Particles"][k]["O"]
	    #Global Best
	    if Swarm["Particles"][k]["O"] < Swarm["GBEST"]["O"]:
	      Swarm["GBEST"]["X"] = currentX
	      Swarm["GBEST"]["O"] = Swarm["Particles"][k]["O"]
	  
	  w = wMax-t*((wMax - wMin)/maxIter)#Decrease linearly with time

	  #Update X and V vectors
	  for k in range(nOP):
	    Swarm["Particles"][k]["V"] = w*Swarm["Particles"][k]["V"]+c1*np.random.rand(1,nVar)*(Swarm["Particles"][k]["PBEST"]["X"] - Swarm["Particles"][k]["X"])+c2*np.random.rand(1,nVar)*(Swarm["GBEST"]["X"] - Swarm["Particles"][k]["X"])

	    for n in range(nVar):#Basically linear time, Can be changed to not use loop
	      if Swarm["Particles"][k]["V"][0][n]>vMax[n]:
	        Swarm["Particles"][k]["V"][0][n] = vMax[n]
	      if Swarm["Particles"][k]["V"][0][n]<vMin[n]:
	        Swarm["Particles"][k]["V"][0][n] = vMin[n]
	      ######
	    Swarm["Particles"][k]["X"] = Swarm["Particles"][k]["X"] + Swarm["Particles"][k]["V"]
	      
	    xCurve[k].append(Swarm["Particles"][k]["X"])
	  print("Iteration#",t,", Swarm[GBEST][O] = ",Swarm["GBEST"]["O"])
	  cgCurve.append(Swarm["GBEST"]["O"])
	  wCurve.append(w)

	print(Swarm["Particles"][0]["X"][0])
	print(Swarm["Particles"][0]["V"][0])

	x_draw = np.linspace(lb[0],ub[1],300)
	y_draw = np.linspace(ub[0],lb[1],300)
	[x_mesh, y_mesh] = np.meshgrid(x_draw,y_draw)

	o=np.zeros((x_mesh.shape[0],x_mesh.shape[1]))
	for i in range(x_mesh.shape[0]):
	  for j in range(x_mesh.shape[1]):
	    currX = [x_mesh[i][j], y_mesh[i][j]]
	    o[i][j] = ObjectiveFunction([currX],constList,obj)

	"""#Global Minimum:"""

	print("The minimum feasible value of z is approximately: ", round(Swarm["GBEST"]["O"],3))
	print("The values x1 and x2 values are approximately: ", round(Swarm["Particles"][0]["X"][0][0],1), ",", round(Swarm["Particles"][0]["X"][0][1],1))

	#=============Final Points===========================
	Global_Best_z = round(Swarm["GBEST"]["O"],3)
	Global_Best_x = round(Swarm["Particles"][0]["X"][0][0],1)
	Global_Best_y = round(Swarm["Particles"][0]["X"][0][1],1)

	# o = o.tolist()
	# x_draw = x_draw.tolist()
	# y_draw = y_draw.tolist()
	# x_mesh = x_mesh.tolist()
	# y_mesh = y_mesh.tolist()
	#set = [Global_Best_z, Global_Best_x, Global_Best_y, o, x_draw, y_draw, x_mesh, y_mesh, xCurve]
	print("!!!!!!!!!!!!!!!!!",xCurve[0][0][0][0])
	print("!!!!!!!!!!!!!!!!!",xCurve[0][0][0][1])
	return {'Z': Global_Best_z, 'X': Global_Best_x, 'Y': Global_Best_y, 'Plot_vals': {'O': o.tolist(), 'X_draw':x_draw.tolist(), 'Y_draw': y_draw.tolist(), 'X_mesh':x_mesh.tolist(), 'Y_mesh': y_mesh.tolist(), 'X_curve':xCurve, 'CGCurve':cgCurve}}
	#return set
	#return o.tolist()
"""#Plots

##Convergence Plot
"""

#plt.plot(cgCurve)

"""##Search Landscape

###Search Landscape - Contour plot
"""

# fig = go.Figure(data=[go.Contour(z=o, x=x_draw,y=y_draw)])
# fig.update_layout(title='Search Landscape - Contour', autosize=False,
#                   width=500, height=500,
#                   margin=dict(l=65, r=50, b=65, t=90))
# fig.show()

"""###Search Landscape - 3D plot"""

# fig = go.Figure(data=[go.Surface(z=o, x=x_new, y=y_new)])
# fig.update_layout(title='Search Landscape', autosize=False,
#                   width=500, height=500,
#                   margin=dict(l=65, r=50, b=65, t=90))
# fig.show()

"""##Initial random positions of particles"""

# colors= []

# for i in range(nOP):
#   c=[0,0,0]
#   c[0]=np.random.rand()
#   c[1]=np.random.rand()
#   c[2]=np.random.rand()
#   colors.append(c)

#PLOT FINAL
# fig = plt.figure()
# plt.contourf(x_new, y_new, o, 20, cmap='viridis');
# plt.colorbar();
# contour = plt.contour(x_new, y_new, o, 3, colors='black');

# for k in range(nOP):
#   plt.scatter(xCurve[k][0][0][0], xCurve[k][0][0][1], color=colors[k])

"""##Traversal of landscape by particles
The path taken by the particle is plotted where each color represents a specific particle in the landscape.
"""

#PLOT FINAL
# fig = plt.figure()
# plt.contourf(x_new, y_new, o, 20, cmap='viridis');
# plt.colorbar();
# contour = plt.contour(x_new, y_new, o, 3, colors='black');

# p= []
# for i in range(maxIter):
#   for k in range(nOP):
#     plt.scatter(xCurve[k][i][0][0], xCurve[k][i][0][1], color=colors[k])

# result = main_prog('3+np.square(x1+x2)')
# print(result['Z'])
