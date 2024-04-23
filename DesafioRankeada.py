def calcular_nivel(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas
    
    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= saldo_vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= saldo_vitorias <= 50:
        nivel = "Prata"
    elif 51 <= saldo_vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= saldo_vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= saldo_vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"
    
    return saldo_vitorias, nivel

# Exemplo de uso
vitorias = int(input("Digite a quantidade de vitórias: "))
derrotas = int(input("Digite a quantidade de derrotas: "))

saldo_vitorias, nivel = calcular_nivel(vitorias, derrotas)
print(f"O jogador tem um saldo de {saldo_vitorias} está no nível de {nivel}")
