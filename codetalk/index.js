function printMessage() {
  let x = true;
  let y = 0;

  while(x) {
    y++;
    console.log("you can do this");
    if (y === 4 ) {
      x = false;
    }
  }
}

printMessage();