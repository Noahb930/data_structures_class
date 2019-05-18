class Node
  attr_accessor :data, :next, :prev
  def initialize(data)
    @data = data
    @next = nil
    @prev = nil
  end
end

class LinkedList
  attr_accessor :head
  def initialize()
    @head = nil
  end
  def peek
    @head.data
  end
  def length
    if @head == nil
      return 0
    else
      length = 1
      current = @head
      while current.next != @head
        current = current.next
        length = length + 1
      end
      return length
    end
  end
  def add(node)
    if @head == nil
      node.next = node
      node.prev = node
      @head = node
    else
      current = @head
      while current.next != @head
        current = current.next
      end
      node.prev = current
      current.next = node
      current.next.next = @head
      @head.prev = node
    end
  end
  def remove(data)
    if @head.data == data
      prev = @head.prev
      next_node = @head.next.next
      @head = @head.next
      @head.next = next_node
      @head.prev = prev
    else
      current = @head
      while current.next.data != data
        current = current.next
      end
      current.next = current.next.next
      current.next.next.prev = current
      if current.next.next == @head
        @head.prev = current
      end
    end
  end
end


#####TEST######

hello =LinkedList.new
h = Node.new("h")
e = Node.new("e")
l = Node.new("l")
l2 = Node.new("l")
l3 = Node.new("l")
o = Node.new("o")
hello.add(h)
hello.add(e)
hello.add(l)
hello.add(l2)
hello.add(l3)
hello.add(o)
puts hello.head.data
puts hello.head.next.data
puts hello.head.next.next.data
puts hello.head.next.next.next.data
puts hello.head.next.next.next.next.data
puts hello.head.next.next.next.next.next.data

hello.remove("l")
puts hello.head.data
puts hello.head.next.data
puts hello.head.next.next.data
puts hello.head.next.next.next.data
puts hello.head.next.next.next.next.data
puts hello.head.next.next.next.next.next.data


last = hello.head.next.next.next.next
puts last.data
puts last.prev.data
puts last.prev.prev.data
puts last.prev.prev.prev.data
puts last.prev.prev.prev.prev.data
puts hello.length
puts hello.peek
