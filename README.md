
## Índice
- [Fórmula para Validar un NIT en El Salvador](#formula-para-validar-un-nit-en-el-salvador)
    - [Cálculo si el Correlativo es > 100](#calculo-si-el-correlativo-es-100)
    - [Cálculo si el Correlativo es <= 100](#calculo-si-el-correlativo-es-100)

## Fórmula para Validar un NIT en El Salvador




**Ejemplo NIT:** 0614-090291-107-1

- **Dígito Validador:** 1 (último dígito)
- **Correlativo:** 107 (Posición 3)
- **Dígitos:** 0614-090291-107 (Todos menos el validador)

### Cálculo si el Correlativo es > 100

#### Operación Fórmula
- Operacion formula = `digito * ( 3 + (6 * ((INDICE + 5 ) / 6) - (INDICE + 1)))`

- `(6 * ((INDICE + 5) / 6))` - Esta operación se redondea según el decimal.

| DIGITOS | OPERACIÓN                                     | RESULTADO OPERACIÓN | INDICE | RESULTADO | TOTAL |
| ------- | --------------------------------------------- | ------------------- | ------ | --------- | ----- |
| 0       | `(3 + (6 * ((0 + 5) / 6) - (0 + 1)))`       | 2                   | 0      | 0         | 0     |
| 6       | `(3 + (6 * ((1 + 5) / 6) - (1 + 1)))`       | 7                   | 1      | 42        | 42    |
| 1       | `(3 + (6 * ((2 + 5) / 6) - (2 + 1)))`       | 6                   | 2      | 6         | 48    |
| 4       | `(3 + (6 * ((3 + 5) / 6) - (3 + 1)))`       | 5                   | 3      | 20        | 68    |

*asi por cada digito*

Suma total: 186

Residuo: 186 % 11 = 10

- Si el residuo es mayor a 1: `11 - residuo = 11 - 10 = 1`
- Si el residuo es igual a 1, se deja el residuo = 0

**Validador:** 1

#### Verificamos la Veracidad del NIT

Si el validador es igual al dígito validador, el NIT es válido (1 = 1).

### Cálculo si el Correlativo es <= 100

**Ejemplo:** 9615-050483-100-4

- **Dígito Validador:** 4 (último dígito)
- **Correlativo:** 100 (Posición 3)
- **Dígitos:** 9615-050483-100 (Todos menos el validador)

#### Operación Fórmula
- Operacion formula = `digito * (14 - INDICE)`


| DIGITOS | OPERACIÓN           | RESULTADO OPERACIÓN | INDICE | RESULTADO | TOTAL |
| ------- | ------------------- | ------------------- | ------ | --------- | ----- |
| 9       | `(14 - 0)`          | 14                  | 0      | 126       | 126   |
| 6       | `(14 - 1)`          | 13                  | 1      | 78        | 204   |
| 1       | `(14 - 2)`          | 12                  | 2      | 12        | 216   |
| 5       | `(14 - 3)`          | 11                  | 3      | 55        | 271   |

*asi por cada digito*


Suma total: 411

Residuo: 411 % 11 = 4

- Si el residuo es igual a 10, entonces el validador es igual a 0.
- Si el residuo es diferente a 10, entonces el validador es igual al residuo.

**Validador:** 4

#### Verificamos la Veracidad del NIT

Si el validador es igual al dígito validador, el NIT es válido (4 = 4).
