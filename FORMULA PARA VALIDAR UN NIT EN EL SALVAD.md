FORMULA PARA VALIDAR UN NIT EN EL SALVADOR
-------------------------------------------


example nit: 0614-090291-107-1

digito Validador: 1 (utimo digito)

correlativo : 107 (Posicion 3)

digitos : 0614-090291-107 (Todos menos el validador)



===================================
CALCULO SI EL CORRELATIVO ES > 100
=====================================

OPERACION FORMULA = digito * ( 3 + (6 * ((INDICE + 5 ) / 6) - (INDICE + 1))) 

(6 * ((INDICE + 5 ) / 6) esta operacion se tiene que redondear dependiendo el decimal :)


---------------------------------------------------------------------------------------------------------------------
 DIGITOS  |            OPERACION                         |  RESULTADO OPERACION  | INDICE   |  RESULTADO  |  TOTAL
---------------------------------------------------------------------------------------------------------------------
  0       |  ( 3 + (6 * ((0 + 5 ) / 6) - (0 + 1)))       |         2             |   0      |     0       |   0
  6       |  ( 3 + (6 * ((1 + 5 ) / 6) - (1 + 1)))       |         7             |   1      |     42      |   42
  1       |  ( 3 + (6 * ((2 + 5 ) / 6) - (2 + 1)))       |         6             |   2      |     6       |   48
  4       |  ( 3 + (6 * ((3 + 5 ) / 6) - (3 + 1)))       |         5             |   3      |     20      |   68   


  
asi por cada  uno de los digitos
 
 
en la suma total nos dara 186  

residuo = 186 % 11 = 10

si el residuo es mayor a 1 se resta 11 - residuo = 11 - 10 = 1
si el residuo es igual a 1 se deja el residuo = 0

validador = 1

VERIFICAMOS LA VERACIDAD DEL NIT
---------------------------------
si el validador es igual al digito validador el nit es valido (1 = 1)



===================================
CALCULO SI EL CORRELATIVO ES <= 100
=====================================

example: 9615-050483-100-4

digito Validador: 4 (utimo digito)

correlativo : 100 (Posicion 3)

digitos : 9615-050483-100 (Todos menos el validador)



OPERACION FORMULA = digito * (14 - INDICE)

---------------------------------------------------------------------------------------------------------------------
 DIGITOS  |            OPERACION                         |  RESULTADO OPERACION  | INDICE   |  RESULTADO  |  TOTAL
---------------------------------------------------------------------------------------------------------------------
  9       |            (14 - 0)                          |         14            |   0      |     126     |   126
  6       |            ( 14- 1)                          |         13            |   1      |     78      |   204
  1       |            ( 14 -2)                          |         12            |   2      |     12      |   216
  5       |            ( 14 -3)                          |         11            |   3      |     55      |   271   

asi por cada  uno de los digitos

en la suma total nos dara 411

residuo = 411 % 11 = 4


si el residuo es igual a 10 entonces el validador es igual a 0 
si el  residuo es diferente a 10 entonces el validador es igual al residuo

validador = 4

VERIFICAMOS LA VERACIDAD DEL NIT

si el validador es igual al digito validador el nit es valido (4 = 4)

