class Player:
    def __init__(self, x, y):
        self._x = x
        self._y = y
        self.backpack = []

    @property
    def x(self):
        return self._x

    @property
    def y(self):
        return self._y

    @x.setter
    def x(self,new_x):
        self._x = new_x

    @y.setter
    def y(self,new_y):
        self._y = new_y

    

    