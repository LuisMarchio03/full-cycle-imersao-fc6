[<img src="../img/nestjs.svg" width="72"/>](Nest.js)

# Imersão Full Stack & FullCycle 6.0 - Fincycle - Back-end do monitoramento de tweets

## Descrição

Repositório do back-end do monitoramento de tweets feito com Nest.js

**Importante**: A aplicação do Apache Kafka primeiro.

## Rodar a aplicação

### Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.


Execute o comando:

```
docker-compose up
```

Acessar http://localhost:3000. Use o arquivo `api.http` para testar a API.

Quer configurar um ambiente de desenvolvimento produtivo? Veja o vídeo: [https://www.youtube.com/watch?v=bniD6dehPCQ](https://www.youtube.com/watch?v=bniD6dehPCQ) 

### Para Windows 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 
