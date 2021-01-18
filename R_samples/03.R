# Shahin Yousefi Lab-03
library(mosaic)
gametimes <- read.delim("D:/CIT/Level 02/MATH-1350/week03&04/Lab3.txt")
bwplot(~Time ,data=gametimes, main="Times of all students in both sets")
bwplot(Set~Time,data=gametimes, main="Times of all students by set", ylab="Set")
favstats(~Time, data = gametimes,)

#Stage 2 - Probability Experiment in R
n <- 1:20000
payout <- 0*n
cards <- sample(c(1:13), length(n), replace=TRUE)
dierolls <- sample(c(1:6), length(n), replace=TRUE)
#let a 0 represents heads up coin, a 1 represents a tails up coin
for (i in n){
  if (cards[i]<5){
    payout[i]<-dierolls[i]*5
  }
  else{
    payout[i]<-dierolls[i]
  }
}
mean(payout)


