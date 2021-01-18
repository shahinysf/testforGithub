#Author: Shahin Yousefi  A00930414

#-------------- Question 6 -----------------

#a)p(x=94)
dbinom(94,1000,0.094)

#b)p(x>80) or p(x>=81) or 1-p(x<80) or 1-p(x<=79)
1-pbinom(79,1000,0.094)

#c)p(x<=65)
pbinom(65,1000,0.094)

#d)p(x<100) or (x<=99)
pbinom (99,1000,0.094)

#e)p(x>=75) or 1-p(x<75) or 1-p(x<=74)
1-pbinom (74,1000,0.094)

#f)p(x<20) or (x<=19)
pbinom(19,1000,0.094)

#g)p(50<=x<=90) ,or p(x<=90)-p(x<50), or p(x<=90)-p(x<=49)
pbinom (90,1000,0.094)- pbinom (49,1000,0.094)

#h)p(x=32)
dbinom(32, 1000, 0.094)

mean = 1000*0.094
mean

s = sqrt((1000*0.094)*(1-0.094))
s

#--------------- Question 7 ----------------------

#a) lambda=0.22 , x=2
dpois(2,0.22)

#b) lambda=0.55 , x1=1 x2=2
dpois(1,0.55)+ dpois(2,0.55)

#c) lambda = 5.5, 5<= x <=10
ppois(10,5.5)-ppois(4,5.5)


#-------------- Question 8 -----------------------

#a) x=2 , lambda=0.4 
dpois(2,0.4)

#b) x=3 , lambda=2 
ppois(3,2)

#c) x=2 lambda=0.8
1-ppois(2,0.8)


