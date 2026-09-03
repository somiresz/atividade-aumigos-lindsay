# 🐶 AuMigos — Adoção Responsável

Site desenvolvido para uma atividade de HTML5 com o tema de **adoção responsável de cães**. A página apresenta alguns cães disponíveis para adoção e possui um formulário para quem tiver interesse em conhecê-los.

## Funcionalidades

- Apresentação dos cães disponíveis para adoção;
- Informações sobre cada cão;
- Formulário de interesse na adoção;
- Validação dos campos do formulário;
- Vídeo relacionado ao tema;
- Vídeo em formatos MP4 e WebM;
- Legendas no vídeo através de arquivo `.vtt`.

## 🛠️ Tecnologias

**HTML5** — estrutura semântica, formulários e recursos de multimídia.

---
## Avaliação

DATA - quarta feira, 02 de setembro, 2026
Avaliação em pares

Em relação à estrutura semântica, o conteúdo está organizado utilizando elementos como `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` e `<footer>`, dando significado adequado às diferentes partes da página. 
Foi utilizado apenas um `<main>`, conforme solicitado, e o conteúdo principal foi dividido em seções distintas, cada uma com seus respectivos headings. 
A hierarquia dos títulos também está organizada de forma adequada, começando pelo `<h1>` e utilizando `<h2>` para as seções principais e `<h3>` para os conteúdos internos, sem pular níveis.

A navegação foi implementada utilizando a tag `<nav>` e links com `<a>`, evitando o uso de elementos genéricos para funções interativas. 
Dessa forma, os elementos utilizados possuem semântica apropriada e contribuem para uma estrutura mais acessível.

O formulário também está coerente com o tema do projeto, pois foi criado para demonstrar interesse na adoção de um dos cães disponíveis. 
Ele possui mais de quatro campos e utiliza tipos semanticamente adequados, como `text`, `email`, `tel`, `number` e `date`. 
Foram utilizados campos obrigatórios com `required` e também foi aplicado `pattern` no campo de telefone, além de `min` e `max` no campo de idade. 
Os campos estão agrupados por meio de `<fieldset>` e `<legend>`, e os `<label>` estão corretamente associados aos respectivos inputs através dos atributos `for` e `id`.

Na parte de multimídia, foi adicionada uma seção de vídeo relacionada diretamente ao tema do projeto, utilizando dois formatos diferentes, MP4 e WebM, através de múltiplas tags `<source>`. 
Dessa forma, existe fallback caso um dos formatos não seja suportado pelo navegador. A ordem dos formatos foi definida e os arquivos foram testados.

Foi utilizado `preload="metadata"` e a escolha foi justificada por meio de um comentário no HTML, explicando que o vídeo é um conteúdo complementar da página e que o carregamento apenas dos metadados evita o carregamento completo antes da reprodução. 
O vídeo também possui um poster configurado.

Além disso, foram adicionadas legendas utilizando `<track>` e um arquivo `.vtt` contendo três blocos de tempo. 
As legendas foram testadas durante a reprodução do vídeo. 
Também foi utilizado o método `canPlayType()` para verificar a compatibilidade dos formatos, sendo que os testes realizados retornaram "probably" tanto para o MP4 quanto para o WebM, atendendo ao requisito da atividade.

A mídia escolhida possui relação direta com o tema do projeto, apresentando cães em um site voltado à adoção responsável, portanto a utilização do vídeo é coerente com a proposta do AuMigos.

Em relação ao versionamento, o projeto foi publicado no GitHub, foi criada uma branch específica para a atividade e utilizado um commit seguindo o padrão Conventional Commits, com a mensagem "feat: adiciona seção de vídeo com fallback de formatos". 
Também foi criado um Pull Request para a branch main, posteriormente mesclado ao projeto.

De forma geral, o projeto apresenta uma estrutura semântica adequada, formulário coerente e corretamente estruturado e uma implementação de mídia que contempla os requisitos da Aula 04. Os principais conceitos apresentados nas Aulas 03 e 04 foram aplicados corretamente ao projeto. 
