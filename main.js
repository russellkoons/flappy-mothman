var mainState = {
  preload: function() {
    // Load mothman
    game.load.image('mothman', 'assets/bird.png');
  },

  create: function() {
    // Change background color
    game.state.backgroundColor = '#71c5cf';

    // Set physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display mothman
    this.mothman = game.add.sprite(100, 245, 'mothman');

    // Add physics to mothman
    game.physics.arcade.enable(this.mothman);

    // Add gravity to mothman
    this.mothman.body.gravity.y = 1000;

    // jump on space
    var spaceKey = game.input.keyboard.addKey(
      Phaser.Keyboard.SPACEBAR
    );
    spaceKey.onDown.add(this.jump, this);
  },

  update: function() {
    // if mothman is off screen restart
    if (this.mothman.y < 0 || this.mothman.y > 490) {
      this.restart();
    }
  },

  jump: function() {
    // Add vertical velocity
    this.mothman.body.velocity.y = -350;
  },

  restart: function() {
    //Restarts the game
    game.state.start('main');
  }
};

var game = new Phaser.Game(400,900);

game.state.add('main', mainState);

game.state.start('main');