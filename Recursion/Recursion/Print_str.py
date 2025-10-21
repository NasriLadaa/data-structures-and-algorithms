def print_smth(times):
    if times == 0:
        return False
    else:
        print(times)
        return print_smth(times-1)

print_smth(10)