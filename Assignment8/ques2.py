list=[]
i=0
while(i<5):
    print('Enter number to append in list')
    n=int(input())
    list.append(n)
    i=i+1
if(list[0]==list[len(list)-1]):
    print("First and Last number of list are same")
    print(True)
else:
    print("First and Last number of list are not same")
    print(False)