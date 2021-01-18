#Shahin Yousefi A00930414 Lab6

#------------ A0digit data ---------------

A0digits <- read.csv("D:/CIT/Level02/MATH-1350/labs/lab06/A0_numbers.csv", sep="")
histogram(~Digits,data = A0digits, main="Number of Digits", xlab = "Digits", ylab = "Frequency", type = "c", col="#ccffff",  width=1)
mean(~Digits,data=A0digits)
sd(~Digits,data=A0digits)
n <- 1:100
sample_sizes <- c(2,4,8,16,32,64)
samplemeans <- matrix(0,length(n),6)

for (j in 1:6) {
  for (i in n) {
    y <- sample(A0digits, sample_sizes[j], replace=TRUE)
    samplemeans[i,j] <- mean(~Digits, data=y)
  }
}

size2 <- samplemeans[,1]
size4 <- samplemeans[,2]
size8 <- samplemeans[,3]
size16 <- samplemeans[,4]
size32 <- samplemeans[,5]
size64 <- samplemeans[,6]

histogram(~size2, main="Sample Mean Size 2", type="c", col="#ccffff",  width=1)
histogram(~size4, main="Sample Mean Size 4", type="c", col="#ccffff",  width=1)
histogram(~size8, main="Sample Mean Size 8", type="c", col="#ccffff",  width=1)
histogram(~size16, main="Sample Mean Size 16", type="c", col="#ccffff",  width=1)
histogram(~size32, main="Sample Mean Size 32", type="c", col="#ccffff",  width=0.5)
histogram(~size64, main="Sample Mean Size 64", type="c", col="#ccffff",  width=0.5)

mean(~size2)
mean(~size4)
mean(~size8)
mean(~size16)
mean(~size32)
mean(~size64)

sd(~size2)
sd(~size4)
sd(~size8)
sd(~size16)
sd(~size32)
sd(~size64)

# --------------- height data ---------------

heights <- read.csv("D:/CIT/Level02/MATH-1350/labs/lab06/heights.csv", sep="")
histogram(~Height,data=heights, main="Heights of the population", xlab = "Height", type = "c", col="#ccffff",  width=1)
mean(~Height,data=heights)
sd(~Height,data=heights)
n <- 1:100
sample_sizes <- c(2,4,8,16,32,64)
samplemeans <- matrix(0,length(n),6)

for (j in 1:6) {
  for (i in n) {
    y <- sample(heights, sample_sizes[j], replace=TRUE)
    samplemeans[i,j] <- mean(~Height, data=y)
  }
}

size2 <- samplemeans[,1]
size4 <- samplemeans[,2]
size8 <- samplemeans[,3]
size16 <- samplemeans[,4]
size32 <- samplemeans[,5]
size64 <- samplemeans[,6]

histogram(~size2, main="Sample Mean Size 2", type="c", col="#ccffff",  width=1)
histogram(~size4, main="Sample Mean Size 4", type="c", col="#ccffff",  width=1)
histogram(~size8, main="Sample Mean Size 8", type="c", col="#ccffff",  width=1)
histogram(~size16, main="Sample Mean Size 16", type="c", col="#ccffff",  width=1)
histogram(~size32, main="Sample Mean Size 32", type="c", col="#ccffff",  width=0.5)
histogram(~size64, main="Sample Mean Size 64", type="c", col="#ccffff",  width=0.5)

mean(~size2)
mean(~size4)
mean(~size8)
mean(~size16)
mean(~size32)
mean(~size64)

sd(~size2)
sd(~size4)
sd(~size8)
sd(~size16)
sd(~size32)
sd(~size64)
