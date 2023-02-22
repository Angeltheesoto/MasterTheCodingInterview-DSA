def add80(n):
    print('Long Time')
    return n+80

print(add80(5))
print(add80(5))

# Memoization 1 - stores the saved data outside the function
cache = {}
def memoizedadd80(n):
    if n in cache:
        return n + 80
    else:
        print('Long time')
        cache[n] = n+80
        return cache[n]

print(memoizedadd80(6))
print(memoizedadd80(6))

# Memoization 2 - stores the saved data within the function
def memoizedadd80two():
    cache = {}
    def memoized(n):
        if n in cache:
            return n+80
        else:
            print('Long Time')
            cache[n] = n+80
            return cache[n]
    return memoized

memo = memoizedadd80two()
print(memo(7))
print(memo(7))

# Memoization 3 - # https://docs.python.org/3.3/library/functools.html --> Doc for lru_cache
from functools import lru_cache
@lru_cache(maxsize=1000)
def memoizedadd80three(n):
    return n+80

print(memoizedadd80three(8))
print(memoizedadd80three(8))
print(memoizedadd80three.cache_info())

# Fibonacci - 
# from functools import lru_cache
# @lru_cache(maxsize=1000)
def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)
print(fib(10))
print(fib.cache_info())

cache = {}
def fibo(n):
    if n in cache:
        return cache[n]
    elif n<2:
        cache[n] = n
        return cache[n]
    else:
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]

x = fibo(8)
print(cache)
print(x)
