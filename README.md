# CakePHP Projecto Base

[![Build Status](https://img.shields.io/travis/cakephp/app/master.svg?style=flat-square)](https://travis-ci.org/cakephp/app)
[![License](https://img.shields.io/packagist/l/cakephp/app.svg?style=flat-square)](https://packagist.org/packages/cakephp/app)

Esqueleto para criaçao de aplicaçao em [CakePHP](https://cakephp.org) 3.x.

O codigo fonte do CakePHP pode ser encontrado em: [cakephp/cakephp](https://github.com/cakephp/cakephp).

## Instalação

1. Instalar o [Composer](https://getcomposer.org/doc/00-intro.md)

```bash
cd ~/Transferências
sudo apt-get update
sudo apt-get install curl
sudo curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

2. Se o Composer já estiver instalado, actualizar o mesmo:

```bash
composer self-update
```

3. Puxar este template para criar um projecto:

```bash
git clone https://github.com/sergioamsilva/CakePhp.git
cd CakePhp
composer install
```

4. Para testar a instalação da aplicação, verificar se se encontra na raiz do projecto e 
depois executar o seguinte comando:

```bash
bin/cake server -p 8765
```

Depois visite [`http://localhost:8765`](http://localhost:8765) para ver a página inicial da aplicação.

## Actualizações do projecto

Infelizmente as actualização desta framework não é automática. Para actualizar todas as dependências do
projecto, entre na raiz do projecto e execute o seguinte comando:

```bash
composer update
```

## Configurações

Para alterar as configurações relativas ao projecto como a configuração da base de dados, o fuso horário,
e-mail, etc., entre na pasta `config` e renomeie o ficheiro `app.default.php` para `app.php`.

## Layout (apresentação)

Este template utiliza [Bootstrap](http://getbootstrap.com/) CSS por defeito. Sinta-se à vontade para alterar
para a sua framework preferida.
