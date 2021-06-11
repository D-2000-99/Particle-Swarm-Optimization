# Particle Swarm Optimization

https://particle-swarm-eu.herokuapp.com/

Particle Swarm Optimization is an optimization technique where a set of candidate solutions (particles) are moved around a search landscape in order to find the optimum solution. The movement is done with a simple mathematical formula that adjusts each particle’s velocity and position.

![ezgif-4-3f8ada66f228](https://user-images.githubusercontent.com/68558063/121675639-4afcf700-cad1-11eb-9537-f15187a17358.gif)

Initially, the particles are assigned random positions within the search-space and carry out their own search for the global optimum. Each particle keeps track of its own personal best solution and there exists a global optimum for the entire swarm of particles (which is the best solution found by any particle). Once a global best is found, each particle then moves slowly towards the optimum and eventually the global optimum is found. This avoids the issue of local optimum due to the large number and stochastic nature of the particles.

<span><img src="https://user-images.githubusercontent.com/68558063/121676318-1b9aba00-cad2-11eb-9cae-ebcdb0544e31.png" width="250" height="250"><span>
<span><img src="https://user-images.githubusercontent.com/68558063/121676850-c27f5600-cad2-11eb-803e-6e0ffc7e3067.png" width="250" height="250"></span>
<span><img src="https://user-images.githubusercontent.com/68558063/121677537-9dd7ae00-cad3-11eb-88df-ac719532cb17.png" width="250" height="250"></span>
<p>The particles together can be said to have a “swarm-intelligence” as each particle is aware of the best solution that has been found so far and as a swarm, they are able to navigate complex, non-differentiable, multi-dimensional landscapes.</p>
