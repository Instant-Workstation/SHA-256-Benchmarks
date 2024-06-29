import hashlib
import os
import time

data = bytearray(os.urandom(1024 * 1024 * 25))

execution_start = time.time()
hashlib.sha256(data)
execution_end = time.time()

print("SHA-256 speed: %s MB/s" % round(((1 / (execution_end - execution_start)) * 25)))
