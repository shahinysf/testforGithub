import random
import os
from player import Player


class Maze:

    def __init__(self, filename):
        with open (filename, "r") as fp:
            lines = [ line.strip() for line in fp ]
            self._maze = [ [char for char in elem] for elem in lines ]
            del(lines)
        self.add_item()
        for i in range(len(self._maze)):
            for j in range(len(self.maze[i])):
                if self._maze[i][j]=='P':
                    self._player = Player(i,j)
        

    @property
    def maze(self):
        return self._maze


    @property
    def player(self):
        return self._player


    def can_move_to(self, line, column):
        if self._maze[line][column] == 'X':
            return False
        else:
            return True

    def move(self,line,column):
        self.maze[self.player.x][self.player.y] = ' '
        self.player.x = line
        self.player.y = column
        if self.is_item(line,column):
            self.player.backpack.append(self._maze[line][column])

        if not self.is_exit(line,column):
            self.maze[self.player.x][self.player.y] = 'P'
        


    def display(self):
        if os.name == 'nt':
            os.system('cls')
        if os.name == 'posix':
            os.system('clear')
             
        for i in range(len(self._maze)):
            for j in range(len(self.maze[i])):
                print(f'{self._maze[i][j]}',end="")
            print()
        
        print(f'Score : {len(self.player.backpack)}')
         

    def find_random_spot(self):
        i=random.randint(0,len(self._maze)-1)
        j=random.randint(0,len(self._maze[i])-1)
        if self._maze[i][j] == ' ':
            return (i,j)
        else:
            return self.find_random_spot()


    def add_item(self):
        k = 0
        while k < 4:
            (i,j) = self.find_random_spot()
            self._maze[i][j] = "O"
            k += 1


    def is_item(self,row,column):
        if self._maze[row][column] == 'O':
            return True
        else:
            return False


    def is_exit(self,row,column):
        if self._maze[row][column] == 'E':
            return True
        else:
            return False


