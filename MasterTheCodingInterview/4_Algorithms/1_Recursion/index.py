# Recursion:

# Factorial:
def find_factorial_iterative(n):
  total = 1
  while(n>1):
    total *= n
    n -= 1
  return total

def find_factorial_recursive(n):
  if n == 2:
    return 2
  return n * find_factorial_recursive(n-1)

# print(find_factorial_iterative(5)) # 120
# print(find_factorial_recursive(5)) # 120

# Fibonacci:
def fibonacci(n):
  if n < 2:
    return n
  a = 0
  b = 1
  total = 0
  for i in range(n-1):
    total = a+b
    a = b
    b = total
  return total

def fibonacci_recursive(n):
  if n < 2:
    return n
  return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# print([fibonacci(i) for i in range(10)])
# print([fibonacci_recursive(i) for i in range(7)])

# Revers String:
def reverse_string(n):
  myList = list(reversed(n))
  return ''.join(myList)

def reverse_string_recursive(n):
  size = len(n)
  if size == 0:
    return ''
  last_char = n[size-1]
  print(last_char, end='')
  return reverse_string_recursive(n[0:size-1])

print(reverse_string('Angel'))
print(reverse_string_recursive('Angel'))