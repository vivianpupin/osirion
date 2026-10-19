## Publicação (Netlify) — regra fixa
- Cada publicação gasta créditos do plano da Netlify.
- NUNCA colocar `[publicar]` numa mensagem de commit sem a Vivian dizer "publica" naquele momento.
- Fluxo: fazer os ajustes, commitar e dar push SEM `[publicar]`, mostrar as mudanças por imagem/vídeo e, quando ela pedir, publicar tudo de uma vez num único commit com `[publicar]`.

## O app (Osirion · Sonho lúcido e viagem astral)
- O que é: um caminho de autoaprimoramento das faculdades do sonhar (lembrar, perceber, despertar, viajar). Tudo no app serve a isso.
- Técnicas antes de dormir (`NOITE` em `app/conteudo.js`): uma por semana (o ideal para ter resultado), em ordem das mais simples às mais avançadas. A pessoa escolhe com qual começar e pode trocar; depois de 7 dias o app sugere a próxima.
- Método: Arhat, do livro da Vivian. Duat = céu das noites.
- Nomes na tela: o mínimo de nomes próprios. Não usar "Abaton" (é "a prática da noite"). "Arhat" só aparece como o objetivo (tornar-se um Arhat), sempre com a explicação; no resto, o método é "o Osirion".
- A programação (`app/programa.js`): as etapas em sequência, na ordem do Arhat (ler a cápsula → praticar → dormir → anotar), por ato. Cada etapa só abre depois da anterior. A aba "Caminho" mostra todas; o Hoje mostra só a próxima etapa e os hábitos já aprendidos. Para mudar a ordem, mover as linhas em `programa.js`.
- `app/index.html`: telas e lógica (Hoje, Diário, Duat, Caminho, Jornada). Jornada = nível, chama, missões, mapa, selos, álbum dos alvos e os atos. Modo noite (tela vermelha, sons, despertar) abre por "Vou dormir".
- Imagens: toda imagem nova em `app/img/` entra na lista de `app/imagens.js` (o app pré-carrega todas na abertura e o `app/sw.js` guarda no celular). Ao trocar uma imagem mantendo o mesmo nome, subir a versão do cache em `app/sw.js` (osirion-vN).
- `app/alvos.js`: o oráculo dos alvos (sorteio = sincronicidade, a pessoa não escolhe). Os lugares pessoais ficam fora do sorteio.
- `app/conteudo.js`: as práticas dos cinco atos, com o texto do livro Arhat.
- `app/capsulas.js`: as cápsulas diárias (livro, ciência do sono, tradições). Sem interpretação de sonhos.
- Os textos de ciência e tradições foram escritos para o app e não estão no livro impresso: a Vivian revisa antes de publicar.
