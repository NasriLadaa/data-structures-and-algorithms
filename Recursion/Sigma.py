#Sigma 

# 15  = 5 + 4 + 3 + 2 + 1 + 0 
def Sigma( mynumber):
    if mynumber == 0:
        return 0
    else:
        #print(mynumber)
        return mynumber + Sigma(mynumber-1)

print(Sigma(3))