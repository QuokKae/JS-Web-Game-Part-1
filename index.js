//function for new image assets

function newImage (src, left, bottom){ //creates a function that manipulates the parameters of 'src', 'left', 'bottom'
    let image = document.createElement('img') 
    image.src = src // because the src is set to 'src' when the fuction is invoked it will replace 'src' with whatever is put in
    image.style.position = 'fixed'
    image.style.left = left // because left is set to 'left' when the fuction is invoked it will replace 'left' with whatever is put in
    image.style.bottom = bottom // because bottom is set to 'bottom' when the fuction is invoked it will replace 'bottom' with whatever is put in
    document.body.append(image)
}

newImage ('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px') // so the 'src' is pine-tree.png, 'left' is 450px, and 'bottom' is 200px
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

//function for new item assets

function newItem (src, left, bottom) {
    let item = document.createElement('img')
    item.src = src
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')