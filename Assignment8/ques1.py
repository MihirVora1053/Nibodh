num = list(range(10))
previousNum = 0
for i in num:
    sum = previousNum + i
    print('Current Number '+ str(i) + ' Previous Number ' + str(previousNum) + ' and sum is ' + str(sum))
    previousNum=i