from controllers.application_controller import AppController

def main():
    """ This is main functions for the program and it will initialize the AppController() which 
    will run the whole game"""
    controller = AppController()
    controller.start_app()

if __name__=="__main__":
    main()