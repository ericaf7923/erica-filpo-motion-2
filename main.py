while True: 
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 20 or input.acceleration(Dimension.X) < -20:
        light.set_all(light.rgb(0,0,0)) 
    else:
        light.clear()