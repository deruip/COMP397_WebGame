module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Methods / Functions
        // Methods / Functions
        public Start(): void {
            this.x = Math.floor(Math.random() * 600) + 0; // Random value between 0 and 500
            this.y = Math.floor(Math.random() * -200) + -50;

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void { }
        public Move(): void {
            this.y += Math.floor(Math.random() * 10) + 2;
        }
        public CheckBounds(): void {
            // Check y bounds
            if (this.y >= 800 + this.height) {
                this.y = -50;
            }
        }
    }
}