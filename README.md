# Cadastro de Carro

**RF** => requisitos funcionais
deve ser possível cadastrar um novo carro

**RNF**=> requisitos não funcionais

**RN** => regras ne negocio
não deve ser possível cadastrar um carro com uma placa já existente

carro deve ser cadastrado com disponibilidade por padrão

o usuário responsável pelo cadastro deve ser admin

# Listagem de Carros

**RF** => requisitos funcionais

deve ser possível listar todos os carros disponíveis pelo nome da categoria, da marca e do carro

**RNF**=> requisitos não funcionais

**RN** => regras ne negocio

o usuário n precisa estar logado no sistema

# cadastro de Especificação no carro

**RF** => requisitos funcionais

deve ser possível cadastrar uma especificação para um carro

deve ser possível listar todas as especificações

deve ser possível listar todos os carros

**RNF**=> requisitos não funcionais

**RN** => regras ne negocio

não deve ser possível cadastrar uma especificação para um carro não cadastrado

não deve ser possível cadastrar uma especificação ja existente para o mesmo carro

o usuário responsável pelo cadastro deve ser admin

# cadastro de imagens do carro

**RF** => requisitos funcionais

deve ser possível cadastrar a imagem do carro
deve ser possível listar todos os carros

**RNF**=> requisitos não funcionais

utilizar o multer para upload dos arquivos

**RN** => regras ne negocio

o usuário pode cadastrar mais de uma imagem paro o carro

o usuário responsável pelo cadastro deve ser admin

# Aluguel de carro

**RF** => requisitos funcionais

deve ser possível cadastrar o aluguel

**RNF**=> requisitos não funcionais

**RN** => regras ne negocio

o aluguel deve ter duração minima de 24h
não de ser possível cadastrar um novo aluguel para o mesmo usuário e mesmo carro
Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível

# Devolução de carro

RF

Deve ser possível realizar a devolução de um carro

RN

Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do - aluguel.
Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve estar logado na aplicação
