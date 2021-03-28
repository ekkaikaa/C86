var canvas= new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img;
        //player_object.scaletoWidth(150);
        //player_object.scaletoHeight(140);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object)
    })
}
player_update();

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img) {
        block_imaage_object = img;
        block_imaage_object.scaletoWidth(block_image_width);
        block_imaage_object.scaletoHeight(block_image_height);
        block_imaage_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add( block_imaage_object)
    })
}
