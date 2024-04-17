class Solution(object):
    def reverseList(self, head):
        current = head
        prev = None
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
        return prev