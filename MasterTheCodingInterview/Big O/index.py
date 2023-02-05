from ctypes import Array

everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
];
large = Array(100000).fill("nemo")
def findNemo(array):
  for i in array:
    print(i)
    if i == "nemo":
      print("Found NEMO!")
findNemo(everyone)