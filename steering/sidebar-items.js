initSidebarItems({"struct":[["Arrive","This behavior aims to arrive at target position and stop. It is like Seek behavior but aiming to be at zero speed on target."],["Evade","Evade behaviour produces the negative steering of Pursue behavior. With this behavior owner tries to run away from targets future position at time t."],["Flee","This behavior is the oposite of Seek behavior. It produces linear steering acceleration to go away from target"],["Pursue","Pursue behaviour aims to steer the agent towards target by predicting where target will be in time t. Steering calculation is based on targets future position. It is like aiming at a moving target."],["Seek","Seek behavior calculates the maximum linear valocity to reach the target location"],["SteeringAcceleration","Represents result of a steering behaviour computation. User can aggregate more than one behaviour result into single acceleration struct."],["SteeringBehavior","Common properties of steering behaviors"]],"trait":[["HasSteeringBehavior",""],["IsEnabled",""],["Limiter","Interface to set limits  on linear and angular speed and acceleration of the agent"],["Steerable","Steerable agent interface"],["SteeringAccelerationCalculator",""]]});