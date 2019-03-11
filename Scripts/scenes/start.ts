module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private background: objects.Background;

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        private startButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }

        // Use start function to create objects
        public Start(): void {
            this.welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#FFFFFF", 320, 240, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        }

        public Update(): void {
            this.background.Update();
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);

            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}