class Start{
    constructor() {
        this.playButton = createButton("");
        this.titleImg = createImg("./assets/title.png", "gameTitle");
        this.fercImg = createImg("./assets/niñoFerci.png", "Ferci");
      
    }
    setElementsPosition() {
        this.titleImg.position(width/2-300, height-630);
        this.playButton.position(width / 2-170, height / 2 +180);
        this.fercImg.position(width/2.5, height/2.5-80)
        this.fercImg.size(210,310);
     
    }
    setElementsStyle(){
       this.playButton.class("buttonStart")
    }
      
      
    hide() {
      this.playButton.hide();
      this.titleImg.hide()
    }
    
    handleMousePressed() {
      this.playButton.mousePressed(() => {
      this.playButton.hide();
      this.titleImg.hide();
      this.fercImg.hide();
      });
    }
      
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
          
    }

}