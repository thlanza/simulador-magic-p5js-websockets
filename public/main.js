let socket;

function setup() {
  createCanvas(400, 400);
  socket = new WebSocket(`ws://${window.location.host}`);

  socket.onopen = () => console.log('Connection opened');
  socket.onmessage = event => console.log(`Received: ${event.data}`);
  socket.onclose = () => console.log('Connection closed');
  socket.onerror = error => console.error(`Error: ${error}`);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);

  if (mouseIsPressed && socket.readyState === WebSocket.OPEN) {
    const data = { x: mouseX, y: mouseY };
    socket.send(JSON.stringify(data));
  }
}