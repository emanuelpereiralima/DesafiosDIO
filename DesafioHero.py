while True:
    # Solicita o nome e a quantidade de experiência (XP) do herói
    nome = input("Digite o nome do herói (ou 0 para sair): ")
    if nome == '0':
        break
    
    xp = int(input("Digite a quantidade de experiência (XP) do herói: "))

    # Define o nível com base na quantidade de XP
    if xp < 1000:
        nivel = "Ferro"
    elif 1001 <= xp <= 2000:
        nivel = "Bronze"
    elif 2001 <= xp <= 5000:
        nivel = "Prata"
    elif 5001 <= xp <= 7000:
        nivel = "Ouro"
    elif 7001 <= xp <= 8000:
        nivel = "Platina"
    elif 8001 <= xp <= 9000:
        nivel = "Ascendente"
    elif 9001 <= xp <= 10000:
        nivel = "Imortal"
    else:
        nivel = "Radiante"

    # Exibe a mensagem com o nome e o nível do herói
    print(f"O Herói de nome {nome} está no nível de {nivel}")
