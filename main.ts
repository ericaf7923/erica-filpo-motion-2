while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 20 || input.acceleration(Dimension.X) < -20) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.clear()
    }
    
}
