array1 = ['a','b','c','d']
array2 = ['l','b','f']

def containsCommonItems(arr1, arr2):
    for i in arr1:
        for j in arr2:
            if i == j:
                return True
    return False
            
            
            
print(containsCommonItems(array1, array2))
