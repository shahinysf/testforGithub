import msvcrt
from os import linesep
from maze import Maze
from player import Player


if __name__ == '__main__':

    maze = Maze('maze.txt')
    maze.display()


    while maze.is_exit(maze.player.x,maze.player.y) == False: 

        print('J:LEFT')
        print('K:DOWN')
        print('L:RIGHT')
        print('I:UP')
        direction = (str(list(str(msvcrt.getch()))[2]))
        
        if direction == chr(74) or direction == chr(106):
            i = maze.player.x
            j = maze.player.y - 1
            if maze.can_move_to(i,j):
                maze.move(i,j)
                maze.display()
            else:
                maze.display()

        elif direction == chr(75) or direction == chr(107):
            i = maze.player.x + 1
            j = maze.player.y
            if maze.can_move_to(i,j):
                maze.move(i,j)
                maze.display()
            else:
                maze.display()

        elif direction == chr(76) or direction == chr(108):
            i = maze.player.x
            j = maze.player.y + 1
            if maze.can_move_to(i,j):
                maze.move(i,j)
                maze.display()
            else:
                maze.display()

        elif direction == chr(73) or direction == chr(105):
            i = maze.player.x - 1
            j = maze.player.y
            if maze.can_move_to(i,j):
                maze.move(i,j)
                maze.display()
            else:
                maze.display()

        
    if len(maze.player.backpack)== 4 :
        print("You collected all the objects and won the game !")    




    























