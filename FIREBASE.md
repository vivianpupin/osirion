# Ligar o login e as notificações do Osirion

## 1. Entrar no Firebase
- https://console.firebase.google.com (conta Google da Vivian). Abrir o projeto do Osirion.

## 2. Login por e-mail e senha
- https://console.firebase.google.com/project/_/authentication/providers
- "Vamos começar" → E-mail/senha → ativar a primeira chave → Salvar.

## 3. Domínio do app
- https://console.firebase.google.com/project/_/authentication/settings
- Domínios autorizados → Adicionar domínio → `ooosirion.netlify.app`.

## 4. Banco de dados (Firestore)
- https://console.firebase.google.com/project/_/firestore
- Criar banco de dados → modo de produção → região `southamerica-east1 (São Paulo)`.
- Aba Regras → apagar tudo → colar o conteúdo de `firestore.rules` → Publicar.

## 5. Configuração do app (vai no `app/firebase-config.js`)
- https://console.firebase.google.com/project/_/settings/general
- Seus apps → ícone `</>` → nome "Osirion" → Registrar → copiar o bloco `firebaseConfig`.

## 6. Chave das notificações (só na Netlify, nunca no código)
- https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk → Gerar nova chave privada (baixa um .json).
- https://app.netlify.com → site ooosirion → Site configuration → Environment variables → Add a variable.
- Nome `FIREBASE_SA`, valor: o conteúdo inteiro do .json.

## 7. No iPhone
- Safari → Compartilhar → Adicionar à Tela de Início → abrir pelo ícone → entrar na conta → Jornada → Ativar os lembretes.
