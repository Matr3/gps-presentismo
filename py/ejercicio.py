edad1=int(input("Ingrese su edad :"))
edad2=int(input("Ingrese su edad :"))

if edad1 > edad2:
    print("Es mayor de edad", edad1)
elif edad1 == edad2:
    print("Es igual edades de", edad1)
else:
    print("No es mayor de edad", edad2)


nota=int(input("ingrese su Nota :"))

if nota > 10:
  print("Error al cargar la nota")
elif nota >= 9:
  print("Sobresaliente")
elif nota >=7:
  print("Notable")
elif nota >=6:
  print("Bien")
elif nota >=5:
  print("Suficiente")
elif nota >=3:
  print("Insuficiente")
elif nota >= 0:
  print("Muy deficiente")
else:
  print("Error al cargar la nota")


cont= 0
suma= 0
while cont < 3:
    num= int(input("Ingrese un número: "))
    suma = suma + num # Acumulamos, es equivalente suma += num
    cont = cont + 1 # Incrementamos, es equivalente cont += 1

print("La suma es:", suma)
print("El promedio es:", suma/cont)

###