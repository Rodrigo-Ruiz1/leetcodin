class MinStack(object):

    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val):
        self.stack.append(val)
        if len(self.minStack) >= 1:
            minimum = min(self.minStack[-1], val)
            self.minStack.append(minimum)
        else:
            self.minStack.append(val)

    def pop(self):
        self.stack.pop()
        self.minStack.pop()
        

    def top(self):
        return self.stack[-1]
        

    def getMin(self):
        return self.minStack[-1]

