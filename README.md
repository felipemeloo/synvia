# Synvia

Projeto desenvolvido baseado no desafio técnico da Synvia

## Instalação

Clone ou baixe o repositório

Ao baixar, instale as dependências do projeto na pasta raiz executando o comando abaixo:

```
npm install
```

Caso não tenha o [node](https://nodejs.org/en/) instalado, necessário baixar e instalar.

Após instalar as dependências do projeto, basta executar com o seguinte comando:

```
npm start
```

## Usabilidade

Abaixo, seguem api´s desenvolvidas para contemplar as necessidades do projeto.

```

Geração de token:
POST - http://localhost:3000/v1/token -> Exemplo Request Body: 
{
    "client_id": "e4cb3e0081d0f9fe54528a3d6b5f1169",
    "client_secret": "46f86faa6bbf9ac94a7e459509a20ed0"
}

Obrigatório realizar envio de token tipo Bearer em todas as requisições.

Checar amostra:
POST - http://localhost:3000/v1/sample/validateSample -> Exemplo Request Body:
{
    "codigo_amostra": "02383322",
    "Cocaína": 0.678,
    "Anfetamina": 0.1,
    "Metanfetamina": 0.1,
    "MDA": 0.1,
    "MDMA": 0,
    "THC": 0.1,
    "Morfina": 0.1,
    "Codeína": 0.1,
    "Heroína": 0.1,
    "Benzoilecgonina": 0,
    "Cocaetileno": 2,
    "Norcocaína": 0
}
Listas amostrar
GET - http://localhost:3000/v1/sample/list

```
